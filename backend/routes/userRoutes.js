const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router()

// router.get()
// router.route('/login').get(()=>{}).post(()=>{})

router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser)
// router.route('/').get(allUsers) // this is also correct

module.exports = router;