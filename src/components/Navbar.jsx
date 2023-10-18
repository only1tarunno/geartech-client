import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provides/AuthProvider";
import { useContext } from "react";
import userimg from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then(navigate("/login")).catch();
  };

  return (
    <div className="bg-[#5e5e5e]">
      <div className="navbar container mx-auto px-5 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold  rounded-md w-auto text-lg"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24" />
            <h2 className="text-white font-bold ">
              Gear<span className="text-[#9dd4b9]">Teach</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-transparent font-bold text-white text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <h2 className="text-white text-xl font-bold">
                {user.displayName ? user.displayName : "User"}
              </h2>
              <img
                className="w-10 rounded-full object-cover"
                src={user?.photoURL ? user.photoURL : userimg}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="btn text-base md:text-xl text-white bg-[#494848] border-[#494848] hover:border-[#3b3b3b] hover:bg-[#3b3b3b]"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              className="btn text-base md:text-xl text-white bg-[#494848] border-[#494848] hover:border-[#3b3b3b] hover:bg-[#3b3b3b]"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
