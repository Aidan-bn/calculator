import Display from "./Display";

const buttons = [['AC', '+/-', '%', '/'], [7, 8, 9, 'X'], [4, 5, 6, '-'],
                 [1, 2, 3, '+'], [0, '.', '=']];

const specialChar = (button) => {
  const className = {
    'X': 'operator',
    '/': 'operator',
    '-': 'operator',
    '=': 'operator',
    '+': 'operator',
    0: 'zero'
  }
  return className[button];
}

const Button = ({ children }) => {
    return(
        <>
          <div 
            className="calc-area">
            <Display />
            <div
              className="buttons-area">
              {
                buttons.flat().map((button, id) => 
                (<button
                  type="button"
                  value={button}
                  key={id}
                  className={`${specialChar(button)} button`}
                  >
                  {button}
                  </button>
                  ))
              }
            </div>
          </div>
        </>
    )
}

export default Button;
