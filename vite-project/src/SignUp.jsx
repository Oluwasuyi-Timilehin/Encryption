import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center md:bg-white ">
        <nav className="px-4 container mx-auto flex flex-col justify-center items-center space-y-10">
          <p className="text-left text-2xl first-letter:text-4xl font-semibold md:text-center md:text-4xl">
            Sign up
          </p>
          <form className="flex w-full flex-col justify-center space-y-5 md:border md:border-grey md:shadow-xl md:px-8 md:rounded-xl  md:py-7 md:w-96">
            <div className="flex flex-col space-y-2">
              <label className="text-lg text-left md:text-xl">Email</label>
              <input
                type="email"
                placeholder="mail@mailer.com"
                className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg text-left md:text-xl">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
              />
            </div>
            <button className="font-bold bg-primary text-white py-2 rounded-lg ">
              Sign In
            </button>
            <div className="flex justify-center items-center space-x-3">
              <i className="border border-b-1 border-grey w-full"></i>
              <p className="text-center">or</p>
              <i className="border border-b-1 border-grey w-full"></i>
            </div>
            <button className="font-bold border border-grey text-black py-2 rounded-lg ">
              <Link to="/log">Continue with gmail</Link>
            </button>
          </form>
        </nav>
      </section>
    </>
  );
};
export default SignUp;
