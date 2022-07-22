import { useEffect, useState } from "react";

import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";

const Expenses = ({
  monthId,
  setListOfExpenses,
  renderNewExpense,
  setRenderNewExpense,
  useEffectExpense,
  setUseEffectExpense,
  setPaychecks,
  setExpenseValues,
}) => {
  //modal expenses
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenseData();
    setUseEffectExpense(false);
    setRenderNewExpense(false);
  }, [useEffectExpense, renderNewExpense, monthId]);
  const getExpenseData = async () => {
    try {
      const res = await MonthMethods.getExpensePerMonth(
        monthId,
        currentUserToken
      );
      setExpenses(res.data.data);
      setExpenseValues(res.data.data);
      setPaychecks(res.data.data.paycheck);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(expenses);

  if (!Object.keys(expenses)) {
    console.log(" Expense waiting...");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className=" border rounded-3xl bg-teal-100 ">
      <h1 className=" font-bold text-3xl pt-5 mb-5">Expenses</h1>
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
