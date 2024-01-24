import { createContext, useState } from "react"

export const CalculateContext = createContext();

const CalculatorProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        operator: '',
        num: 0,
        response: 0
    });

    const providerValues = {
        calc,
        setCalc
    };

    return(
        <CalculateContext.Provider value={providerValues}>
            {children}
        </CalculateContext.Provider>
    )
}

export default CalculatorProvider;
