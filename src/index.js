import React from 'react';
import Arrays from './component/arrays'
import Adder from './component/adder'
import Class1 from './component/class1';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Calculator from './component/calculator';
import Styling from './component/styling';
import Arrays_Project from './component/arraysProject';
import CalculatorComp from './component/calculatorComp';


ReactDOM.render(
  <React.StrictMode>
    {/* <Class1/> */}
    <Styling />
    <Adder/>
    <Arrays /> 
    <Arrays_Project />
    <CalculatorComp />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
