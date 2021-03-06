import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserMethods from "../../Services/UserMethods";

const Signup = () => {
  // useState for input Values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [emailExistError, setEmailExistError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      signUpUser();
    }
  };

  const signUpUser = async () => {
    setEmailExistError(false);
    try {
      await UserMethods.signup(values);
    } catch (error) {
      console.log(error);
      setEmailExistError(true);
    }
  };

  // useEffect for input Values
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);
  // error validate
  const validate = (values) => {
    const error = {};
    if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 16) {
      error.password = "Password cannot exceed more than 16 characters";
    } else if (!(values.password === values.confirmPassword)) {
      error.password = "Passwords does not match. Please confirm the password!";
      error.confirmPassword =
        "Passwords does not match. Please confirm the password!";
    }
    return error;
  };

  // grabbing the input values

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
          <Link to="/">
            <span className="text-black mx-2 underline cursor-pointer">
              Login to your account
            </span>
          </Link>
          It's simple and easy
          <br />
        </p>
        <br />
        {Object.keys(errors).length === 0 && isSubmit && !emailExistError ? (
          <div
            className="bg-teal-100 border border-teal-400 text-black px-4 py-3 rounded text-center  mb-5"
            role="alert"
          >
            Account has been created!
          </div>
        ) : null}

        {emailExistError ? (
          <div
            className="bg-red-100 border border-red-400 text-black px-4 py-3 rounded text-center  mb-5"
            role="alert"
          >
            Email already exist. Please try again with a different email!
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
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
                value={values.firstName}
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
                value={values.lastName}
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
                value={values.email}
                errormessage="It should be a valid email address!"
                onChange={onChange}
                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 `}
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
                value={values.password}
                errormessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                onChange={onChange}
                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 ${
                  errors.password ? "focus:border-red-500 border-red-500" : null
                }`}
                required
              />
            </div>
          </div>
          <p className="text-center text-red-500 py-1">{errors.password}</p>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                errormessage="Passwords do not match!"
                onChange={onChange}
                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full shadow-lg
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 ${
                  errors.confirmPassword
                    ? "focus:border-red-500 border-red-500"
                    : null
                }`}
                required
              />
            </div>
          </div>
          <p className="text-center text-red-500 py-1">
            {errors.confirmPassword}
          </p>

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
