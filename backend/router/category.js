const router = require('express').Router();

const categoryController = require('../controller/category');

router.post('/category', categoryController.createCategory);

router.get('/category', categoryController.getCategory);

router.put('/category/:id', categoryController.updateCategory);

router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;
