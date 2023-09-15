const {
    getSingleThough,
    getAllThoughs
} = require("../../controllers/thoughController")

const router = require("express").Router()


router.route('/').get(getAllThoughs)
router.route('/:thoughId').get(getSingleThough)

module.exports = router