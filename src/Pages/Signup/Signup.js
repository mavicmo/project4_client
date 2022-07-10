import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // useState for input Values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // error validate

  //validate email
  const [emailError, setEmailError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const emailErrorhandleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError("It should be a valid email address!");
    } else {
      setEmailError(null);
    }
  };

  // grabbing the input values

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
          Sign Up Now!
        </h2>
        <p
          className="text-center text-sm leading-5
         text-gray-600"
        >
          Or
          <span className="text-black mx-2 underline cursor-pointer">
            Login to your account
          </span>
          It's simple and easy
          <br />
        </p>
        <br />

        <form>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="firstName"
                name="firstName"
                id="firstName"
                pattern="^[A-Za-z0-9]{1,16}$"
                onChange={onChange}
                errormessage="First Name should be 1-16 characters and shouldn't include any special character!"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                pattern="^[A-Za-z0-9]{1,16}$"
                onChange={onChange}
                errormessage="Last Name should be 1-16 characters and shouldn't include any special character!"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
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
                errormessage="It should be a valid email address!"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
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
                errormessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="verifyPassword"
              >
                Verify Password
              </label>
              <input
                type="verifyPassword"
                name="verifyPassword"
                id="verifyPassword"
                errormessage="Passwords do not match!"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>

          {/** submit button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-lg strong font-bold leading-5 
              rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400
              focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
