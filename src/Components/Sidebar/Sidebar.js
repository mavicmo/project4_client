import { useState } from "react";
import {
  BsArrowLeftShort,
  BsFillCalendar2MonthFill,
  BsFillCalendarPlusFill,
  BsSearch,
} from "react-icons/bs";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`duration-500 relative bg-teal-600 shadow h-screen p-5 pt-8 ${
          open ? "w-60" : "w-20"
        }  `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-black text-3xl rounded-full absolute -right-3 top-3 border border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsFillCalendar2MonthFill
            className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl pt-1 duration-300  ${
              !open && "scale-0"
            }`}
          >
            Months
          </h1>
        </div>
        <div
          className={`flex items-center bg-gray-200 rounded-md mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full focus:outline-one ${
              !open && "hidden"
            }`}
          />
        </div>
        {/* where the months will be added to */}
        <div className="">Sidebar</div>
        <div className={`flex items-center rounded-md mt-6 px-4 py-2`}>
          <BsFillCalendarPlusFill
            className={`text-xl block float-left mr-2 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-md pt-1 duration-300  ${
              !open && "scale-0"
            }`}
          >
            Add a Month
          </h1>
        </div>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
};

export default Sidebar;