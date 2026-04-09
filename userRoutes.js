const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/getusers', userController.getUsers);
router.get('/:id', userController.getUsersById);
router.post('/createUser', userController.createUser);
router.post('/createUsers', userController.createUsers);
router.get('/getUsersById/:id/:isActive',userController.getUsersById)


module.exports = router;