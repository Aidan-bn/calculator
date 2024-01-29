import './App.css';
import CalculatorProvider from './context/CalculatorContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Notes from './components/Notes';
import Todo from './components/Todo';

function App() {
  const [calc, setCalc] = useState({
    operator: '',
    num: 0,
    response: 0
});

const providerValues = {
    calc,
    setCalc
};
  return (
    <>
      <CalculatorProvider value={providerValues}>
        <div className='app'>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/notes' element={<Notes />} />
          </Routes>
          </BrowserRouter>
        </div>
      </CalculatorProvider>
    </>
  );
}

export default App;
