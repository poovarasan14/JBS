import { BrowserRouter } from "react-router-dom"; // Ensure this is correctly imported
import SharedLayout from "./shared-layout";
import Index from "../../cra-sales-template";
import "../../cra-sales-template/css/satoshi.css";
import "../../cra-sales-template/css/style.css";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect } from "react";

    // Start of Selection
    // Ensure the correct path to your App component
    
    const SharedUi = ({ children }: { children: React.ReactNode }) => {
      useEffect(() => {
        // Dynamically load the script
        const script = document.createElement("script");
        script.src = "../../../../../node_modules/flyonui/flyonui.js"; // Update this path if necessary
        script.async = true;
    
        // Append the script to the document
        document.body.appendChild(script);
    
        // Clean up after the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      return (
        <React.StrictMode>
          <BrowserRouter>
            <SharedLayout >
        {children}</SharedLayout>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default SharedUi;
