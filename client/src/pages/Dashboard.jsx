import Sidebar from '../components/Sidebar';
import ItemTable from '../components/ItemTable';
import AddItemForm from '../components/AddItemForm';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Product List</h1>
        <AddItemForm />
        <ItemTable />
      </div>
    </div>
  );
}
