import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const styleArgument = { color: 'red', fontSize:'100px', fontWeight: 'bold' };

const changeText=(event)=>{
  console.log(event.target);
  event.target.innerText=event.target.innerText+"被點了";
};

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <div>
      <h1 style={styleArgument}onClick={changeText}>Hello CGU！</h1>
    </div>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
