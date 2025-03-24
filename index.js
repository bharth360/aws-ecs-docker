const express = require("express");

const app = express();

// Health check route for AWS ELB
app.get("/health", (req, res) => {
  res.status(200).send("Healthy");  // Respond with HTTP 200 and message "Healthy"
});

// Your other routes
app.get("/", (req, res) => {
  res.send("<h1>Hey guys, Welcome to my new Express Application!!!!!</h1>");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

// Make sure your app listens on the correct port and on all network interfaces
app.listen(4000, "0.0.0.0", () => {
  console.log("Server is running on port 4000");
});
