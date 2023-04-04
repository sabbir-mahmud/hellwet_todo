import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { handleLogout } = useUser();
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-secondary text-xl"
          >
            HellWet ToDo Application
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <button
              onClick={() => handleLogout()}
              className="btn btn-ghost text-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
