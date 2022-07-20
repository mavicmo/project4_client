import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseMethods from "../../Services/ExpenseMethods";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";
import EditExpense from "../EditExpense/EditExpense";

const Expenses = ({
  monthId,
  setListOfExpenses,
  renderNewExpense,
  setRenderNewExpense,
}) => {
  //modal expenses
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [expenses, setExpenses] = useState([]);
  const [useEffectExpense, setUseEffectExpense] = useState(false);
  useEffect(() => {
    getExpenseData();
    setUseEffectExpense(false);
    setRenderNewExpense(false);
  }, [useEffectExpense, renderNewExpense]);
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
        setListOfExpenses={setListOfExpenses}
        setUseEffectExpense={setUseEffectExpense}
      />
    </div>
  );
};

export default Expenses;
