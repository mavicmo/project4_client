import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import { FaEdit } from "react-icons/fa";

const UserProfile = () => {
  let currentUser = UserMethods.getCurrentUser().user;
  const currentUserToken = UserMethods.getCurrentUser().jwt;

  const [values, setValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "********",
  });
  const [editUser, setUserEdit] = useState(false);
  const [updatedUser, setUserUpdated] = useState(false);
  const cancelHandle = () => {
    setUserEdit(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`edit got clicked`);
    console.log(editUser);

    updateUser();
  };

  // useEffect(() => {
  //   const currentUser = UserMethods.getCurrentUser().user;
  // }, [updatedUser]);

  const updateUser = async () => {
    try {
      await UserMethods.updateUser(values, currentUser._id, currentUserToken);
      const res = await UserMethods.getAllUsers();
      const userId = res.data.users.at(-1)._id;
      console.log(userId);
      const resUser = await UserMethods.getUserById(userId);
      console.log(resUser.data);
      localStorage.setItem("user", JSON.stringify(resUser.data));
      currentUser = UserMethods.getCurrentUser().user;
      console.log(currentUser);
      setUserEdit(false);
    } catch (errors) {
      console.log(errors);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full container mx-auto  max-w-6xl text-center drop-shadow-lg text-gray-800">
        <div className="p-7  mb-10 flex ">
          <h1 className=" text-5xl font-bold ">User Profile</h1>
          <FaEdit
            className="text-blue-700 text-lg ml-3 cursor-pointer"
            onClick={() => {
              setUserEdit(true);
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="shadow-2xl  h-5/6 w-full border ">
            <div className="shadow-2xl m-10 p-6  text-left ">
              <h1 className="text-lg font-bold ">
                First Name:
                {editUser ? (
                  <input
                    type="name"
                    name="firstName"
                    id="name"
                    onChange={onChange}
                    value={values.firstName}
                    className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                    required
                  />
                ) : (
                  <span className="text-4xl m-5 p-6">
                    {currentUser.firstName}
                  </span>
                )}
              </h1>
            </div>
            <div className="shadow-2xl m-10 p-6  text-left ">
              <h1 className="text-lg font-bold ">
                Last Name:
                {editUser ? (
                  <input
                    type="name"
                    name="lastName"
                    id="name"
                    onChange={onChange}
                    value={values.lastName}
                    className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                    required
                  />
                ) : (
                  <span className="text-4xl m-5 p-6">
                    {currentUser.lastName}
                  </span>
                )}
              </h1>
            </div>
            <div className="shadow-2xl m-10 p-6  text-left ">
              <h1 className="text-lg font-bold ">
                Email:
                {editUser ? (
                  <input
                    type="email"
                    name="email"
                    id="name"
                    onChange={onChange}
                    value={values.email}
                    className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                    required
                  />
                ) : (
                  <span className="text-4xl m-5 p-6">{currentUser.email}</span>
                )}
              </h1>
            </div>
            <div className="shadow-2xl m-10 p-6  text-left ">
              <h1 className="text-lg font-bold ">
                Password:
                {editUser ? (
                  <>
                    <input
                      type="password"
                      name="password"
                      id="name"
                      onChange={onChange}
                      value={values.password}
                      className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                      required
                    />
                    <label>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="name"
                      onChange={onChange}
                      value={values.confirmPassword}
                      className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                      required
                    />
                  </>
                ) : (
                  <span className="text-4xl m-5 p-6">********</span>
                )}
              </h1>
            </div>
            <div className="submit-btn m-10 p-6">
              {editUser ? (
                <>
                  <button
                    type="submit"
                    className="border shadow-2xl w-6/12 border-blue-500 rounded-lg py-2 text-lg text-white bg-blue-500 "
                  >
                    Submit Edit
                  </button>
                  <button
                    onClick={cancelHandle}
                    className="border border-red-500 rounded-lg py-2 text-lg text-white bg-red-500 w-6/12"
                  >
                    Cancel Edit
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
