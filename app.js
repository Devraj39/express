const express = require('express');
const app = express();
const name = "user";

app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/Home', (req, res) => {
    const students = ["Dev", "Raj", "Singh"];

    res.render('home', { 
        name: " ",
        students: students
    });
});

const authMiddleware = (req, res, next) => {
    console.log("Auth middleware triggered");

    const isLoggedIn = true; 

    if (!isLoggedIn) {
        return res.send("Unauthorized");
    }

    next();
};

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


app.use('/users', userRoutes);
app.use('/login',authMiddleware, authRoutes);

module.exports = app;