import { useState } from 'react';
import api from '../utils/api';

export default function AddItemForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return; // simple validation

    try {
      await api.post('/items', {
        name,
        price: Number(price),
        description,
      });
      setName('');
      setPrice('');
      setDescription('');
      window.location.reload(); // or better: refetch items properly
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="px-4 py-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="px-4 py-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
