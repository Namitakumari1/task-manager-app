import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        Task Manager
      </h1>

      <div className="flex gap-6 items-center">
        {!token ? (
          <>
            <Link
              to="/login"
              className="hover:text-blue-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-blue-300"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="hover:text-blue-300"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;