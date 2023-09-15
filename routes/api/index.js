const router = require('express').Router();
const thoughRoutes = require("./thoughRoutes");
const userRoutes = require('./userRoutes')

router.use('/thoughs', thoughRoutes);
router.use('/user', userRoutes);


module.exports = router;