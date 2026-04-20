const express = require('express');
const app = express();

const mdb = require('./modules/db'); // adjust path if needed

// // useing ejs
// app.set("view engine", "ejs");


// initialization
mdb();

app.use(express.json());


const message = {
    header: {title: "GLA"},
    content: {data: "Here is my data"},
    footer: {createdBy: "Dev"}
}

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/',userRoutes)
app.use('/users', userRoutes);

app.use("/employees",employeeRoutes);


// app.get('/home', (req, res) => {
//     const students = ["Dev", "Raj", "Singh"];

//     res.status(200).render('home', { 

//         name: "Dev",
//         students: students,
//         ...message
//     });
// });

// app.get('/header', (req, res) => {
//     res.render('header');
// });

// const authMiddleware = (req, res, next) => {
//     console.log("Auth middleware triggered");

//     const isLoggedIn = true;

//     if (!isLoggedIn) {
//         return res.send("Unauthorized");
//     }

//     next();
// };

// const authRoutes = require('./routes/authRoutes');

// app.use('/login', authRoutes);

module.exports = app;


