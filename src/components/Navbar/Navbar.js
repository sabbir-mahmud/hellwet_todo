import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-secondary text-xl">
            HellWet ToDo Application
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost text-secondary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
