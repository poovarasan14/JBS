import { BrowserRouter } from "react-router-dom"; // Ensure this is correctly imported
import Index from "./index";
import "../../../public/css/satoshi.css";
import "../../../public/css/style.css";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import React from "react";

// Ensure the correct path to your App component

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
