const express = require('express');
const router = express.Router();
const { getItems, addItem, deleteItem, updateItem } = require('../controllers/item.controller');
const protect = require('../middleware/auth.middleware');

router.get('/', protect, getItems);
router.post('/', protect, addItem);
router.delete('/:id', protect, deleteItem);
router.put('/:id', protect, updateItem);

module.exports = router;
 