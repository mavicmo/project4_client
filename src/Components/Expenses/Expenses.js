import { useEffect, useState } from "react";

import ExpenseMethods from "../../Services/ExpenseMethods";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";

const Expenses = ({ expensesId, monthId }) => {
  const currentUserToken = UserMethods.getCurrentUser().jwt;

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    console.log(`use effect just ran`);
    getExpenseData();
  }, [expensesId]);
  const getExpenseData = async () => {
    try {
      const res = await MonthMethods.getExpensePerMonth(
        monthId,
        currentUserToken
      );
      setExpenses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!Object.keys(expenses)) {
    console.log(" Expense waiting...");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="border rounded-3xl bg-teal-100 h-auto w-8/12">
      <h1 className="font-bold text-3xl pt-5 mb-5">Expenses</h1>
      <DisplayExpenses
        monthId={monthId}
        expenses={expenses}
        capitalizeFirstLetter={capitalizeFirstLetter}
      />
    </div>
  );
};

export default Expenses;
