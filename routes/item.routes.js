const express = require('express');
const router = express.Router();
const { getItems, addItem, deleteItem } = require('../controllers/item.controller');
const protect = require('../middleware/auth.middleware');

router.get('/', protect, getItems);
router.post('/', protect, addItem);
router.delete('/:id', protect, deleteItem);

module.exports = router;
