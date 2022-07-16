import { useEffect, useState } from "react";

import ExpenseMethods from "../../Services/ExpenseMethods";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

const Expenses = ({ expensesId, monthId }) => {
  console.log(expensesId);
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [need, setNeed] = useState([]);
  const [want, setWant] = useState([]);
  const [save, setSave] = useState([]);
  const [investment, setInvestment] = useState([]);
  const [paycheck, setPaycheck] = useState([]);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    // if (!expenses) {
    //   return console.log(`fetching data`);
    // } else {
    getExpenseData();
    // }
  }, [expensesId]);
  const getExpenseData = async () => {
    try {
      const res = await MonthMethods.getExpensePerMonth(
        monthId,
        currentUserToken
      );
      setExpenses(res.data.data);
      console.log(expenses);
      setNeed(expenses.need);
      setWant(expenses.want);
      setSave(expenses.save);
      setInvestment(expenses.investment);
      setPaycheck(expenses.paycheck);
    } catch (error) {
      console.log(error);
    }
  };

  if (!expenses.length) {
    console.log(" Expense waiting...");
  }
  return (
    <div className="border rounded-3xl bg-teal-100 h-screen ">
      <h1 className="font-bold text-3xl pt-5 mb-5">Expenses</h1>

      {/* {expenses.map((expense) => {
        return (
          <div>
            <h1 className="font-bold text-2xl text-left ml-5 ">Need</h1>
          </div>
        );
      })} */}

      {/* saving before edit */}
      {/* <div>
        <h1 className="font-bold text-2xl text-left ml-5 ">Need</h1>
        <div class="overflow-auto relative p-3 h-2/6">
          <table class="w-full text-sm text-left text-gray-500 dark:text-black">
            <thead class="text-xs text-emerald-50 uppercase bg-gray-50 dark:bg-teal-900 dark:text-emerald-50">
              <tr>
                <th scope="col" class="py-1 px-3">
                  Expense name
                </th>
                <th scope="col" class="py-1 px-3">
                  Amount
                </th>

                <th scope="col" class="py-1 px-3">
                  Action
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-emerald-300 dark:border-teal-700 hover:bg-gray-50 dark:hover:bg-slate-50">
                <th
                  scope="row"
                  class="py-3 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-3 px-3">Sliver</td>

                <td class="py-3 px-3 text-left">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 mr-1 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline "
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Expenses;
