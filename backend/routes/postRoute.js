import express from 'express'
import { createPost, deletePost, likePost, updatePost, viewAllPosts, viewMyPosts, viewSinglePost } from '../controllers/postController.js'
import requireAuth from '../middleware/requireAuth.js'

const router = express.Router()

router.use(requireAuth)

router.post('/createPost', createPost)
router.get('/viewPost/:id', viewSinglePost)
router.get('/', viewAllPosts)
router.get('/myposts', viewMyPosts)
router.put('/updateposts/:id', updatePost)
router.delete('/delete/:id', deletePost)
router.put('/like/:id', likePost)

export default router