import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={34}/>
        {/* <FirstApp title='Hola, Soy Vegeta'/> */}
    </React.StrictMode>
);