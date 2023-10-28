import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<App/>} />
        </Routes>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    </React.StrictMode>,
)
