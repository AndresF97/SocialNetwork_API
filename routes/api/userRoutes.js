const router = require('express').Router()
const  {
    getAllUser,
    getOnUser
} = require('../../controllers/userController')

router.route('/').get(getAllUser);
router.route('/:userId').get(getOnUser);


module.exports = router