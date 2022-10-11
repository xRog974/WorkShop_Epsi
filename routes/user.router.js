const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

router.post('/signUp', UserController.createUser);
router.post('/signIn', UserController.login);
router.post('/logOut', UserController.logOut);
router.get('/getAll', UserController.getAllUsers);
router.get('/getbyId', UserController.getUserById);
router.put('/updatebyId', UserController.updateUserById);
router.delete('/deleteById', UserController.deleteUserById);

module.exports = router;