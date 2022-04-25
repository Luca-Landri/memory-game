import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Game from './Game';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
