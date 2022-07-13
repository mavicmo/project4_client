import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import Months from "../../Components/Months/Months";
const Homepage = () => {
  const currentUser = UserMethods.getCurrentUser().user;
  console.log(currentUser);
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 border-red-500">
        <h1 className="text-2xl font-semibold">
          Hello {currentUser.firstName}!
        </h1>
      </div>
      <Months />
    </div>
  );
};

export default Homepage;
