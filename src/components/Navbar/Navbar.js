import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../app/endpoints/profileEndpoints";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { user, loading } = useUser();
  const [img, setImg] = useState(null);
  const { data: profile, isLoading } = useGetProfileQuery(user?.email);

  useEffect(() => {
    if (!img) {
      if (profile) {
        setImg(profile[0]?.img);
      }
    }
  }, [img, profile]);
  const { handleLogout } = useUser();

  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-base-100 text-xl"
          >
            ToDo Application
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={`http://localhost:5000/api/profile/images/${img}`}
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between text-white">
                Profile
              </Link>
            </li>
            <li>
              <p onClick={() => handleLogout()} className="text-white">
                Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
