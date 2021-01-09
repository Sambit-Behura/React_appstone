import React from 'react';
import Arrays from './component/arrays'
import Adder from './component/adder'
import Sub from './component/substraction'
import Mult from './component/multiplication'
import Class1 from './component/class1';
import Test from './component/test';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Calculator from './component/calculator';
import Comp1 from './component/comp1'

ReactDOM.render(
  <React.StrictMode>
    {/* <Class1/> */}
    {/* <Test/> */}
    {/* <Adder/>
    <Sub />
    <Mult /> */}
    {/* <Arrays />  */}
    {/* <Comp1 /> */}
    <Calculator />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
