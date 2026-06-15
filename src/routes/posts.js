const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')
const { validatePost, validatePostUpdate } = require('../middlewares/validation')

router.get('/',                 postsController.getAll)
router.get('/:id',              postsController.getById)
router.get('/author/:authorId', postsController.getByAuthor)
router.post('/',                validatePost, postsController.create)
router.put('/:id',              validatePostUpdate, postsController.update)
router.delete('/:id',           postsController.remove)

module.exports = router