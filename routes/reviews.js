import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, reviewsCtrl.create)

export { router }