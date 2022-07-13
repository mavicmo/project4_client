import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

const Months = () => {
  const monthID = useParams().id;
  const userToken = UserMethods.getCurrentUser().jwt;
  const currentUser = UserMethods.getCurrentUser().user;
  const [month, setMonth] = useState([]);
  useEffect(() => {
    getMonth();
  }, [monthID]);
  const getMonth = async () => {
    try {
      const res = await MonthMethods.getMonthByID(monthID, userToken);
      console.log(res.data.month);
      setMonth(res.data.month);
    } catch (error) {
      console.log(error);
    }
  };

  if (!month.length) {
    console.log("waiting...");
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 border-red-500">
        <h1 className="text-2xl font-semibold">
          Hello {currentUser.firstName}!
        </h1>
      </div>
      <div>
        <h1>Looking at month: {month.month}</h1>
      </div>
    </div>
  );
};

export default Months;
