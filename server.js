const db = require('./db');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req,res){
    const user = {
        name: "Manpreet",
        age: 30,
        is_married: false
    }
    res.send(user);
});


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


// Use the routers
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000);