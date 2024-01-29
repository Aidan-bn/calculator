import { useContext } from 'react';
import CalculateContext from '../context/CalculatorContext';
import { Textfit } from "react-textfit";

const Display = ({ children }) => {
  const  calculate  = useContext(CalculateContext)
    return(
        <> 
          <Textfit
            className="screen"
            max={30}
          >
            { calculate }
          </Textfit>
        </>
    )
}

export default Display;
