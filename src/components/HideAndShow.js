import { useEffect } from "react";

export const useHideAndShow = (ref, overlay, updater) => {
  useEffect(() => {
    const handleClick = (event) => {
        if(overlay && ref.current && !ref.current.contains(event.target)){
            updater();
        }
    }
    document.addEventListener('mousedown', handleClick);
    return () => {document.removeEventListener('mousedown', handleClick)} 
  }, [ref, overlay, updater]);  
}
