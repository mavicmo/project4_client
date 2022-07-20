import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";

const Homepage = () => {
  const currentUser = UserMethods.getCurrentUser().user;

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 ">
        <h1 className="text-2xl font-semibold">
          Hello {currentUser.firstName}!
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
