const router = require('express').Router()
const  {
    getAllUser,
    getOnUser,
    createUser,
    updateUser,
    createFriend,
    deleteFriend
} = require('../../controllers/userController')

router.route('/').get(getAllUser).post(createUser);
router.route('/:userId').get(getOnUser).put(updateUser);
router.route('/:userId/friend/:friendId').post(createFriend).delete(deleteFriend)


module.exports = router