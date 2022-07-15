import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";
import ExpenseForm from "../../Components/ExpenseForm/ExpenseForm";
import Transactions from "../../Components/Transactions/Transactions";
const Months = () => {
  const monthId = useParams().id;
  const userToken = UserMethods.getCurrentUser().jwt;
  const currentUser = UserMethods.getCurrentUser().user;
  const [month, setMonth] = useState([]);
  useEffect(() => {
    getMonth();
  }, [monthId]);
  const getMonth = async () => {
    try {
      const res = await MonthMethods.getMonthByID(monthId, userToken);
      console.log(res.data.month);
      setMonth(res.data.month);
    } catch (error) {
      console.log(error);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!month.length) {
    console.log("waiting...");
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10  text-Black rounded">
          Expense for the Month of {capitalizeFirstLetter(`${month.month}`)}
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2  ">
          {/* Chart */}
          {/* <Graph></Graph> */}
          {/* Form */}
          <ExpenseForm monthId={monthId} />
          <Transactions />
        </div>
      </div>
    </div>
    // <div className="flex">
    //   <Sidebar />
    //   <div className="p-7 border-red-500">
    //     <h1 className="text-4xl font-semibold border border-red-500">
    //       Expense for the Month of {capitalizeFirstLetter(`${month.month}`)}
    //     </h1>
    //   </div>
    //   <div className="p-7 border-red-500">
    //     <h1 className="text-2xl font-semibold border border-red-500">
    //       Expense for the Month of {capitalizeFirstLetter(`${month.month}`)}
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Months;
