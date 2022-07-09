import React from "react";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
const ListOfMonths = (open) => {
  return (
    <div
      className={`flex opacity-75 bg-teal-500 h-4/6  mt-6 
       overflow-auto ${!open.open && "scale-0"}`}
    >
      <div className="m-3 ">
        <div className="inline-flex border-b pb-3 mt-2 border-black">
          <BsFillCalendar2MonthFill
            className={`text-3xl rounded cursor-pointer block float-left mr-2 duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl duration-300  ${
              !open && "scale-0"
            }`}
          >
            September
          </h1>
        </div>
        <div className="inline-flex border-b pb-3 mt-2 border-black">
          <BsFillCalendar2MonthFill
            className={`text-3xl rounded cursor-pointer block float-left mr-2 duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl duration-300  ${
              !open && "scale-0"
            }`}
          >
            September
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ListOfMonths;
