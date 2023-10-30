const router = require('express').Router()
const  {
    getAllUser,
    getOnUser,
    createUser,
    updateUser
} = require('../../controllers/userController')

router.route('/').get(getAllUser).post(createUser);
router.route('/:userId').get(getOnUser).put(updateUser);


module.exports = router