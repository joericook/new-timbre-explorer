const express = require("express");
const path = require("path");
const app = express();
const { MongoClient } = require("mongodb");

let dbName;
const collectionName = "responses";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  console.log(process.env.MONGODB_URI);
  dbName = "experiment-data-dev";
} else {
  dbName = "experiment-data-prod";
}

async function storeResponse(response) {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(response);
    client.close();
  }

// Serves static directory when 'static' is included in pathname
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.use(express.json());                                  // Replaces the depreciated 'bodyParser'
app.use(express.urlencoded({ extended: true }));          // Parse URL-encoded bodies

// Serve .flac files when requested
//app.get("/stimuli_HugginsPitch/*.flac", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "frontend", "static/" + req.originalUrl));
//});

// This ensures that any path is routed to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.post("/api/store-response", (req, res) => {
    console.log("Storing response:");
    console.log(req.body);
    storeResponse(req.body).then(() => {
      res.end("Response successfully stored");
    });
  });


app.listen(process.env.PORT || 5099, () => console.log("Server running..."));