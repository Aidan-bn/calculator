import { useContext } from 'react';
import { CalculateContext } from '../context/CalculatorContext';
import { Textfit } from "react-textfit";

const Display = () => {
  const  {calculate}  = useContext(CalculateContext)
    return(
        <> 
          <Textfit
            className="screen"
            max={30}
          >
            { calculate }
            9090
          </Textfit>
        </>
    )
}

export default Display;
