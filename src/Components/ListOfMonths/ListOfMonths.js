import React from "react";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
const ListOfMonths = (open) => {
  return (
    <div
      className={`flex opacity-75 bg-teal-500 h-4/6 border mt-6 overflow-auto ${
        !open.open && "scale-0"
      }`}
    >
      <div className="m-4 border">
        <div className="inline-flex">
          <BsFillCalendar2MonthFill
            className={`text-2xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <div>July</div>
        </div>
      </div>
    </div>
  );
};

export default ListOfMonths;
