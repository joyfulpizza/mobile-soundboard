const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Serve sounds folder
app.use("/sounds", express.static(path.join(__dirname, "sounds")));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
