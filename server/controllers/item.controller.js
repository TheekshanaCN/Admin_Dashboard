const Item = require('../models/item.model');

// Get all items for current user
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ createdBy: req.user._id });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items', error: err.message });
  }
};

// Add new item
exports.addItem = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newItem = await Item.create({
      name,
      price,
      description,
      createdBy: req.user._id
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create item', error: err.message });
  }
};

// Delete item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ message: 'Item not found' });

    if (item.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this item' });
    }

    await item.deleteOne();
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item', error: err.message });
  }
};
