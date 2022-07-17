import React from "react";

import UserMethods from "../../Services/UserMethods";
import ExpenseMethods from "../../Services/ExpenseMethods";
import MonthMethods from "../../Services/MonthMethods";
const DisplayExpenses = ({ expenses, capitalizeFirstLetter, monthId }) => {
  const userToken = UserMethods.getCurrentUser().jwt;

  const editExpense = async (expenseId) => {
    try {
      const res = await ExpenseMethods.editExpensesById(expenseId, userToken);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteExpense = async (expenseId, monthsId) => {
    try {
      const data = {
        expenseId,
        monthsId,
      };
      await ExpenseMethods.deleteExpenseById(expenseId, userToken);
      await MonthMethods.removeExpenseFromMonth(data, userToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {Object.keys(expenses).map((expense) => {
        return (
          <div className="p-3  ">
            <h1 className="font-bold text-2xl text-left  ">
              {capitalizeFirstLetter(`${expense}`)}
            </h1>
            <div className="overflow-auto whitespace-normal">
              <table className="w-full text-sm text-left whitespace-normal text-gray-500 dark:text-black table-auto">
                <thead className="text-xs text-emerald-50 uppercase whitespace-normal bg-gray-50 dark:bg-teal-900 dark:text-emerald-50">
                  <tr>
                    <th scope="col" className="whitespace-normal py-1 px-3">
                      Expense Name
                    </th>
                    <th scope="col" className="py-1 px-3">
                      Amount
                    </th>

                    <th scope="col" className="py-1 px-3">
                      Actions
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-auto  relative h-2/6">
                  {expenses[expense].map((item) => {
                    return (
                      <tr
                        key={item._id}
                        className="bg-white border w-96 dark:bg-emerald-300 dark:border-teal-700 hover:bg-gray-50 dark:hover:bg-slate-50"
                      >
                        <th
                          scope="row"
                          className="py-3 px-3  font-medium text-gray-900 whitespace-nowrap dark:text-black"
                        >
                          {item.name}
                        </th>

                        <td className="py-3 px-3">${item.amount}</td>

                        <td className="py-3 px-3 text-left">
                          <a
                            href="#"
                            className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 mr-1 hover:underline"
                          >
                            Edit
                          </a>
                          <a
                            onClick={() => {
                              deleteExpense(item._id, monthId);
                            }}
                            className="font-mediu cursor-pointer text-red-600 dark:text-red-500 hover:underline "
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExpenses;
