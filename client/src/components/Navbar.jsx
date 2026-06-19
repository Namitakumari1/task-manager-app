import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task Manager</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-300">
          Login
        </Link>

        <Link to="/register" className="hover:text-blue-300">
          Register
        </Link>

        <Link to="/dashboard" className="hover:text-blue-300">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;