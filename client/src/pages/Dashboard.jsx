import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ItemTable from '../components/ItemTable';
import AddItemForm from '../components/AddItemForm';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Product List</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            + Add Item
          </button>
        </div>

        <ItemTable />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
              >
                ×
              </button>
              <AddItemForm onClose={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
