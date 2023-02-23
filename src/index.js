import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerPlugFactory } from "temphia-frontend/dist/cjs/engine/register";

registerPlugFactory("excalidraw.main", (opts) => {
  const root = ReactDOM.createRoot(opts["target"] || document.body);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})


