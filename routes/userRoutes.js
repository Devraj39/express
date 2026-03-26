const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");


router.get('/', (req, res) => {
    res.send("User Page");
});


router.get('/getUser', userController.getUsers);

// REST style route
router
    .route('/users')
    .get((req, res) => {
        res.send("Get Users");
    })
    .post((req, res) => { 
        res.send("Create User");
    });

module.exports = router;