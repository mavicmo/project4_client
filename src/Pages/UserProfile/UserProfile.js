import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
const UserProfile = () => {
  const currentUser = UserMethods.getCurrentUser().user;
  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full container mx-auto  max-w-6xl text-center drop-shadow-lg text-gray-800">
        <div className="p-7  mb-10  ">
          <h1 className=" text-5xl font-bold ">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
        </div>
        <div className="shadow-2xl  h-5/6 w-full border border-rose-400">
          <div className="shadow-2xl m-10 p-6 border text-left border-rose-400">
            <h1 className="text-lg font-bold ">
              First Name:
              <span className="text-4xl m-5 p-6">{currentUser.firstName}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
