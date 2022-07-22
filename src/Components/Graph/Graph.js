import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "../Labels/Labels";
import MonthMethods from "../../Services/MonthMethods";
import UserMethods from "../../Services/UserMethods";
import { chartData, getTotalExpenses } from "../../Helper/DoughnutHelp";
// import { chart_Data, getTotal } from "../helper/helper";
// import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

export default function Graph({ monthId, renderNewExpense, useEffectExpense }) {
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  //use state
  const [expenses, setExpenses] = useState([]);
  //useEffect
  useEffect(() => {
    getExpensesAmount();
  }, [monthId, renderNewExpense, useEffectExpense]);

  const getExpensesAmount = async () => {
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

  let graphData = <Doughnut {...chartData(expenses)}></Doughnut>;

  return (
    <div className="flex justify-content max-w-sm border ml-5 p-10 bg-teal-100 shadow-sm border-grey-500 rounded-3xl">
      <div className="item">
        <div className="chart relative">
          {graphData}
          {/* <Doughnut {...config}></Doughnut> */}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-4xl text-green-700">
              ${getTotalExpenses(expenses) ?? 0}
            </span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <Labels expenses={expenses}></Labels>
        </div>
      </div>
    </div>
  );
}
