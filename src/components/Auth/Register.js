import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const handleSignUp = useRegister();
  return (
    <div className="container mx-auto mt-14 mb-24">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="rounded-lg py-14">
        <form onSubmit={handleSignUp}>
          <div className="w-3/4 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <div className="title">
              <h3 className="text-center pt-5 text-4xl font-bold text-primary">
                <span className="">Create a new </span> account!
              </h3>
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email "
                  name="email"
                  placeholder="your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    all ready registered?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
