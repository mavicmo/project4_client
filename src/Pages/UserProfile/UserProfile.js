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
        <div className="  shadow-2xl  h-5/6 w-full ">
          <h1 className="text-5xl font-bold ">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
