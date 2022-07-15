import { useEffect, useState } from "react";

import ExpenseMethods from "../../Services/ExpenseMethods";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

const Transactions = () => {
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    getExpenseData();
  }, []);
  const getExpenseData = async () => {
    try {
      const res = await ExpenseMethods.getExpenses(currentUserToken);
      console.log(res);
      setExpenses(res.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(expenses);

  if (!expenses.length) {
    console.log("waiting...");
  }
  return (
    <div className="border rounded-3xl bg-teal-100 h-screen ">
      <h1 className="font-bold text-3xl pt-5">Expenses</h1>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Expense name
              </th>
              <th scope="col" class="py-3 px-6">
                Amount
              </th>

              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">Sliver</td>

              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-6">White</td>

              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="py-4 px-6">Black</td>

              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="grid grid-cols-3">
        <div>expense 1</div>
        <div>expense 1</div>
        <div>expense 1</div>
      </div> */}
    </div>
  );
};

export default Transactions;
