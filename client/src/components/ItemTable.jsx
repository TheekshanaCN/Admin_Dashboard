import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function ItemTable() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await api.get('/items');
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      fetchItems(); // refresh after delete
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id} className="border-b">
            <td className="p-3">{item.name}</td>
            <td className="p-3">
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
