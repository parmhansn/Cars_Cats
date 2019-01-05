var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

console.log(__dirname)

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get('/cars', function(request, response) {
    response.render('cars')
})
app.get('/cats', function(request, response) {
    response.render('cats')
})

app.get('/cuddles', function(request, response) {
    var cats = [
       {fave_food: "Spaghetti", age: "3", sleeping: "under the bed or in a sunbeam"}, 
    ];
    response.render('details', {cuddles: cats});
})

app.get('/cuddles2', function(request, response) {
    var cats = [
       {fave_food: "Spaghetti", age: "3", sleeping: "under the bed or in a sunbeam"}, 
    ];
    response.render('details2', {cuddles2: cats});
})






app.get('/cars/new', function(request, response) {
    response.render('cars_new')
})












app.listen(8000, function() {
    console.log("listening on port 8000");
  })