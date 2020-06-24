var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting view engine for HTML files
app.set('view engine', 'ejs')


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
  return res.render('home.ejs')
});

// GETS shows
app.get("/shows", function (req, res) {
  return res.render('index.ejs')
});

// GETS a show
app.get("/show/:id", function (req, res) {
  var showId = parseInt(req.params.id);
  for (let i = 0; i < favoriteShows.length; i++) {
    const show = favoriteShows[i];
    if (show.id === showId) {
      return res.render('show.ejs');
    }
  }
  res.render("show.ejs");
});

// Serving The shows Form
app.get('/form', function(req,res){
  res.render("showsForm.ejs")
})

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
