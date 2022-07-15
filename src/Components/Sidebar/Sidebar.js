import { useState } from "react";
import {
  BsArrowLeftShort,
  BsFillCalendar2MonthFill,
  BsFillCalendarPlusFill,
  BsSearch,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import ListOfMonths from "../ListOfMonths/ListOfMonths";
import AddMonth from "../AddMonth/AddMonth";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [model, setModel] = useState(false);
  // onClick function to add a month
  const addMonth = () => {
    setModel(true);
  };
  const handleOnClose = () => {
    setModel(false);
  };
  return (
    <div className="flex">
      <div
        className={`duration-500 relative bg-teal-600 shadow  p-5 pt-8 ${
          open ? "w-60" : "w-20"
        }  `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-black text-3xl rounded-full absolute -right-3 top-3 border border-black cursor-pointer duration-1000 ${
            !open && "-rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsFillCalendarWeekFill
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
            onClick={() => setOpen(!open)}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full focus:outline-one  ${
              !open && "hidden"
            }`}
          />
        </div>
        <ListOfMonths open={open} />

        <div
          className={`flex items-center rounded-md mt-6 px-4 py-2 cursor-pointer`}
          onClick={() => {
            addMonth();
          }}
        >
          <BsFillCalendarPlusFill
            className={`text-xl block float-left mr-2 duration-500 ${
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
        <div>
          {model ? <AddMonth model={model} onClose={handleOnClose} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
