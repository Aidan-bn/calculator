import Nav from "./Navbar";
import Button from "./Button";

const Calculator = () => {
    return(
        <>
          <Nav />
          <div className="calculator">
            <aside>
               <h4>Yes, here we go</h4>
               <p>
                For now we do not have any project to show case but soon on
                later we will have something to put on the table sir. Just
                relax. Everything is under control
               </p>
            </aside>
            <aside>
              <Button />
            </aside>
          </div>
        </>
    )
};

export default Calculator;