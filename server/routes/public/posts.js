import express from 'express'

// Controllers
import {get_posts, create_post} from '../../controllers/posts.js'

const router = express.Router()

router.get('/', get_posts)
router.post('/', create_post)

export default router