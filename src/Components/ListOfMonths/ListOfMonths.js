import { useEffect, useState } from "react";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
import MonthMethods from "../../Services/MonthMethods";
import UserMethods from "../../Services/UserMethods";

import { Link, useNavigate } from "react-router-dom";
const ListOfMonths = (open) => {
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [months, setMonths] = useState([]);

  useEffect(() => {
    getMonthData();
  }, [open.choice]);
  const getMonthData = async () => {
    try {
      const res = await MonthMethods.getMonths(currentUserToken);

      setMonths(res.data.month);
    } catch (error) {
      console.log(error);
    }
  };

  if (!months.length) {
    console.log("waiting...");
  }

  return (
    <div
      className={`flex opacity-75 bg-teal-500 h-4/6  mt-6 
       overflow-auto  ${!open.open && "scale-0"}`}
    >
      <div className="m-3 ">
        {months.map((data) => (
          <Link key={data._id} to={`/${data._id}`}>
            <div className="inline-flex  pb-3 mt-2 cursor-pointer border-black">
              <BsFillCalendar2MonthFill
                className={`text-2xl rounded cursor-pointer block float-left mr-2 duration-500  ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-black origin-left capitalize font-medium text-lg duration-300 mr-1 ${
                  !open && "scale-0"
                }`}
              >
                {data.month}
              </h1>
              <h1
                className={`text-black origin-left font-medium text-lg duration-300 ${
                  !open && "scale-0"
                }`}
              >
                {data.year}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListOfMonths;
