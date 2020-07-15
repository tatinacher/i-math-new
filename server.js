const path = require("path");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
