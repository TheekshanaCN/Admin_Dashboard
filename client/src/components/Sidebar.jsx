import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</Link>
        <button
          onClick={logout}
          className="mt-auto bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
