import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(<App />);
const express = require('express');
const client = require('prom-client');

const app = express();

// Create a Registry instance to register metrics
const register = new client.Registry();

// Optionally, collect default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({
  register,
});

// Define your /metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    const metrics = await register.metrics();
    res.end(metrics);
  } catch (ex) {
    res.status(500).end(ex);
  }
});

// Your existing routes and middleware here
// e.g., app.use(express.static('public'))

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
