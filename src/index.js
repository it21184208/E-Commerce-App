import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Event from './Event';
import Garage from './Garage';
import Fruit from './Fruit';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
   <Fruit/>
  </React.StrictMode>
);



reportWebVitals();
