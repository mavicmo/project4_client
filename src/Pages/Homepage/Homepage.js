import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import Typed from "react-typed";
const Homepage = () => {
  const currentUser = UserMethods.getCurrentUser().user;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex bg-gray-800">
      <Sidebar />
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-5xl text-white font-semibold">
          Hello {capitalizeFirstLetter(currentUser.firstName)}!
        </h1>
        <br />

        <div className="text-white">
          <div className="">
            <p className="text-[#00df9a] font-bold p-2">SAVING WITH PURPOSE</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Welcome to <span className="font-bold">SimplyBudget.</span>
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Budgeting made
              </p>
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                strings={["easy.", "effortless.", "simple.", "clear."]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
              Monitor your spending to increase saving for financial freedom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
