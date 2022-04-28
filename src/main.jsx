import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game from './Game';
import OfSac from './OfSac';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/ofsac" element={<OfSac />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
