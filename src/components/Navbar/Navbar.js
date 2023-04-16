import React from "react";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { handleLogout } = useUser();
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-base-100 text-xl">
            ToDo Application
          </p>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <button
              onClick={() => handleLogout()}
              className="btn btn-ghost text-base-100"
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
