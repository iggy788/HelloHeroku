// Dependencies
// ===========================================================
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;


// Body Parser Middleware
// ===========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Views
// ===========================================================
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});




// Data
// ===========================================================




// Routes
// ===========================================================
app.get('/api/cars', function (req, res) {
    var cars = [{
        make: 'Audi',
        model: 'A5'
    }, {
        make: 'Saturn',
        model: 'Something'
    }, {
        make: 'Ford',
        model: 'Tarus'
    }, {
        make: 'Nissan',
        model: 'Cool'
        }];
    res.send(cars);
});




// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});