const express = require('express');

const { InfoController } = require('../../controllers');

const userRouter = require('./user-routes');
const user = require('../../models/user');
const router = express.Router();

router.get('/info', InfoController.info);

router.use('/user',userRouter);

module.exports = router;