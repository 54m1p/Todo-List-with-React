import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
