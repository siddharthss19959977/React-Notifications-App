// React boiler plate code
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render
(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// We create a virtual DOM in line 8
// We use .render to render all content
// using the root we render all content to <App /> component in Strict mode to enable primary,secondary checks or additional checks
