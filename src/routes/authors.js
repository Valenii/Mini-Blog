const express = require('express')
const router = express.Router()
const authorsController = require('../controllers/authors')
const { validateAuthor } = require('../middlewares/validation')

router.get('/',     authorsController.getAll)
router.get('/:id',  authorsController.getById)
router.post('/',    validateAuthor, authorsController.create)
router.put('/:id',  validateAuthor, authorsController.update)
router.delete('/:id', authorsController.remove)

module.exports = router