import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
const UserProfile = () => {
  const currentUser = UserMethods.getCurrentUser().user;
  const [values, setValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "********",
  });
  const [editUser, setUserEdit] = useState(false);

  const cancelHandle = () => {
    setUserEdit(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`edit got clicked`);
    console.log(editUser);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full container mx-auto  max-w-6xl text-center drop-shadow-lg text-gray-800">
        <div className="p-7  mb-10  ">
          <h1 className=" text-5xl font-bold ">User Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="shadow-2xl  h-5/6 w-full border ">
            <div className="shadow-2xl m-10 p-6  text-left ">
              <h1 className="text-lg font-bold ">
                First Name:
                {editUser ? (
                  <input
                    type="name"
                    name="name"
                    id="name"
                    // onChange={onChange}
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
                    name="name"
                    id="name"
                    // onChange={onChange}
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
                    type="name"
                    name="name"
                    id="name"
                    // onChange={onChange}
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
                      type="name"
                      name="name"
                      id="name"
                      // onChange={onChange}
                      value={values.password}
                      className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                      required
                    />
                    <label>Confirm Password:</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      // onChange={onChange}
                      value={values.password}
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
              <button
                onClick={() => {
                  setUserEdit(true);
                }}
                className="border shadow-2xl w-6/12 border-teal-500 rounded-lg py-2 text-lg text-white bg-teal-500 "
              >
                Edit User
              </button>
              {editUser ? (
                <button
                  onClick={cancelHandle}
                  className="border border-red-500 rounded-lg py-2 text-lg text-white bg-red-500 w-6/12"
                >
                  Cancel Edit
                </button>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
