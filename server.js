const express = require("express");
const path = require("path");

const app = express();

// Serves static directory when 'static' is included in pathname
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Serve .flac files when requested
app.get("/stimuli_HugginsPitch/*.flac", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "static/" + req.originalUrl));
});

// This ensures that any path is routed to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


app.listen(process.env.PORT || 5099, () => console.log("Server running..."));