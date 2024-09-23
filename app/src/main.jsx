import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/dataContext.jsx";
import device from './assets/device.svg'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      {innerWidth >= 992 
      ? <App /> 
      : 
      <div className="device">
        <img src={device} alt="Device Image" />
        <p style={{color:'white'}}>Please Visit On Laptop | Desktop </p>
      </div>}
    </DataProvider>
  </StrictMode>
);

React.memo(App);
