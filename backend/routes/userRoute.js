import express from 'express'
import { loginUser, registerUser, updateUser, viewAllUsers, viewUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/', loginUser)
router.get('/profile/:id', viewUser)
router.get('/allUsers', viewAllUsers)
router.put('/update/:id', updateUser)

export default router