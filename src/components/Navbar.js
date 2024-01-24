import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
          <header>
            <nav>
                <h1>
                    Logo
                </h1>
                <menu>
                    <Link to='/'>Home</Link>
                    <Link to='/calculator'>Calculator</Link>
                    <Link to='/todo'>Todo</Link>
                    <Link to='/notes'>Notes</Link>
                </menu>
            </nav>
            <hr />
          </header>
        </>
    )
}
export default Nav;
