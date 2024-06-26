import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header1 from './Header1';
import reportWebVitals from './reportWebVitals';
import Footer1 from './Footer1';
import Body1 from './Body1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pcard1info from './Pcard1info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Pcard1info></Pcard1info>} />
                </Routes>
        </BrowserRouter>
    <Header1 />
    <Body1 />
    <Footer1 />
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
