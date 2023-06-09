import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // setup login and logout info
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-whites">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
            <img className="w-4/5 h-full object-cover" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/booking" className="font-bold">
                  MyBooking
                </Link>
              </li>
            )}
            <li>
              <Link to="/" className="font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold">
                Contact
              </Link>
            </li>
            {user ? (
              <li>
                <Link to="/" className="font-bold" onClick={handleLogout}>
                  LogOut
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className="font-bold">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="font-bold">
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link to="/">
            <HiOutlineShoppingBag size="1.5em" />
          </Link>
          <Link to="/">
            <BiSearch size="1.5em" />
          </Link>
          <Link to="/">
            <button className="btn btn-outline btn-error font-bold">
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
