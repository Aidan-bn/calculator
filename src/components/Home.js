import { useState } from "react";
import Nav from "./Navbar";
import Overlay from "./Overlay";

const Home = () => {
  const [overlay, setOverlay] = useState(false);
  const handleClick = () => {
    setOverlay((prev) => !prev)
  }
  return(
      <>
        <Nav />
        <div className="home">
          <aside>
              For now we do not have any project to show case but soon on
              later we will have something to put on the table sir. Just
              relax. Everything is under control
          </aside>
          <aside className="side-about">
              <button
               onClick={handleClick}
               >
                About me?
              </button>
               {
                overlay && 
                <Overlay />
               }
          </aside>
        </div>
      </>
  )
};

export default Home;