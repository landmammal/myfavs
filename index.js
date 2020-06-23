var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATABASE simulation
var favoriteShows = [
  {
    id: 1,
    category: "anime",
    name: "Dr.Stone",
  },

  {
    id: 2,
    category: "Drama",
    name: "West World",
  },

  {
    id: 3,
    category: "anime",
    name: "Death Note",
  },
];

// ROUTES

// Welcome
app.get("/", function (req, res) {
  return res.send("welcome to my favorites API");
});

// GETS shows
app.get("/shows", function (req, res) {
  return res.json(favoriteShows);
});

// GETS a show
app.get("/show/:id", function (req, res) {
  var showId = parseInt(req.params.id);
  for (let i = 0; i < favoriteShows.length; i++) {
    const show = favoriteShows[i];
    if (show.id === showId) {
      return res.json(show);
    }
  }
  res.send("That show is not on my list");
});

// POST show
app.post("/show", function (req, res) {
  var show = req.body;
  console.log(req.body);

  favoriteShows.push(show);

  return res.send("Successfully added show");
});

app.listen(PORT, function () {
  console.log("live on Port: " + PORT);
});
