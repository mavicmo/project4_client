import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserMethods from "../../Services/UserMethods";
const Login = () => {
  // state the variables
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // handle submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    loginHandle();
  };

  const loginHandle = async () => {
    try {
      console.log(`hit`);
      if (values) {
        localStorage.setItem("email", values.email);
      } else {
        localStorage.removeItem("email", values.email);
      }

      const res = await UserMethods.login(values);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  // setting the values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="signIn-page">
      <br />
      <br />
      <div className="p-10">
        <h2
          className="text-center text-3xl leading-9 
        font-extrabold text-gray-800 mb-4"
        >
          Login to your account
        </h2>
        <p
          className="text-center text-sm leading-5 
         text-gray-600"
        >
          Or
          <Link to="/signup">
            <span className="text-black mx-2 underline cursor-pointer">
              Create an account
            </span>
          </Link>
          It's simple and easy
          <br />
        </p>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={values.email}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
                value={values.password}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>
          {/** submit button */}

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border font-bold border-transparent text-lg leading-5 
              rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400 
              focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
