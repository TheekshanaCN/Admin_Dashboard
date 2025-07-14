import { useState } from 'react';
import api from '../utils/api';

export default function AddItemForm({ onItemAdded, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.price) {
      setError('Name and price are required');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/items', {
        ...formData,
        price: Number(formData.price)
      });
      
      setFormData({ name: '', price: '', description: '' });
      setSuccess('Item added successfully!');
      
      if (onItemAdded) {
        onItemAdded(response.data);
      }

      // Close the modal after short delay so user can see success message
      setTimeout(() => {
        setSuccess('');
        if (onClose) onClose();
      }, 1000);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-[#171717] dark:text-gray-100 mb-4">Add New Item</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100 dark:bg-red-900 dark:text-red-400 dark:border-red-700">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-md border border-green-100 dark:bg-green-900 dark:text-green-400 dark:border-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#171717] dark:text-gray-100 mb-1">
            Item Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter item name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2664eb] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-[#171717] dark:text-gray-100 mb-1">
            Price *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500 dark:text-gray-400">$</span>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="w-full pl-8 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2664eb] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#171717] dark:text-gray-100 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter item description (optional)"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2664eb] focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`py-2 px-4 rounded-md text-white font-medium transition-all ${
              isLoading ? 'bg-[#2664eb]/80 cursor-not-allowed' : 'bg-[#2664eb] hover:bg-[#1e56d4]'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adding...
              </span>
            ) : (
              'Add Item'
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-100 transition dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
