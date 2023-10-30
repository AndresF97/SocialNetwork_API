const {
    getSingleThough,
    getAllThoughs,
    createThough,
    updateThough
} = require("../../controllers/thoughController")

const router = require("express").Router()


router.route('/').get(getAllThoughs).post(createThough);
router.route('/:thoughId').get(getSingleThough).put(updateThough)

module.exports = router