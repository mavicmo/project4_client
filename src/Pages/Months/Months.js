import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import Expenses from "../../Components/Expenses/Expenses";
const Months = () => {
  const monthId = useParams().id;
  const userToken = UserMethods.getCurrentUser().jwt;

  const [month, setMonth] = useState([]);
  const [listOfExpenses, setListOfExpenses] = useState([]);

  useEffect(() => {
    console.log(`useEffect just ran`);
    getMonth();
  }, [monthId]);
  const getMonth = async () => {
    try {
      const res = await MonthMethods.getMonthByID(monthId, userToken);
      setMonth(res.data.month);
      setListOfExpenses(res.data.month.expenses);
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
        <div className="grid md:grid-cols-2">
          {/* Chart */}
          {/* <Graph></Graph> */}
          {/* Form */}
          <TransactionForm monthId={monthId} />
          <Expenses expensesId={listOfExpenses} monthId={monthId} />
        </div>
      </div>
    </div>
  );
};

export default Months;
