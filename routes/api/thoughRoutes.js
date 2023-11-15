const {
    getSingleThough,
    getAllThoughs,
    createThough,
    updateThough,
    createReaction,
    deleteReaction
} = require("../../controllers/thoughController")

const router = require("express").Router()


router.route('/').get(getAllThoughs).post(createThough);
router.route('/:thoughId').get(getSingleThough).put(updateThough)
router.route('/:thoughId/reaction').post(createReaction)
router.route('/:thoughId/reaction/:reactionId').delete(deleteReaction)

module.exports = router