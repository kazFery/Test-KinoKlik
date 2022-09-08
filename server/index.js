const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all people

app.get("/api/people/", async (req, res) => {
  try {
    const apiResponse = await fetch("https://swapi.dev/api/people");
    const apiResponseJson = await apiResponse.json();

    console.log(apiResponseJson);
    res.send(apiResponseJson.results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/api/planets/", async (req, res) => {
  try {
    const apiResponse = await fetch("https://swapi.dev/api/planets/");
    const apiResponseJson = await apiResponse.json();

    console.log(apiResponseJson);
    res.send(apiResponseJson.results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/api/starships/", async (req, res) => {
  try {
    const apiResponse = await fetch("https://swapi.dev/api/starships/");
    const apiResponseJson = await apiResponse.json();

    console.log(apiResponseJson);
    res.send(apiResponseJson.results);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
