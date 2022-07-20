import { useState } from "react";
import EditExpense from "../EditExpense/EditExpense";
import UserMethods from "../../Services/UserMethods";
import ExpenseMethods from "../../Services/ExpenseMethods";
import MonthMethods from "../../Services/MonthMethods";
const DisplayExpenses = ({
  expenses,
  capitalizeFirstLetter,
  monthId,
  setUseEffectExpense,
}) => {
  const [transactionsModal, setTransctionsModal] = useState(false);
  const [transactionId, setTransactionId] = useState();
  const userToken = UserMethods.getCurrentUser().jwt;

  const openExpenseModal = (id) => {
    setTransctionsModal(true);
    setTransactionId(id);
  };

  const editExpense = async (data) => {
    try {
      console.log(transactionId);
      console.log(data);
      await ExpenseMethods.editExpensesById(data, transactionId, userToken);
      setTransctionsModal(false);
      setUseEffectExpense(true);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteExpense = async (expenseId) => {
    try {
      const data = {
        expenseId,
        monthId,
      };

      console.log(data);

      await ExpenseMethods.deleteExpenseById(expenseId, userToken);
      await MonthMethods.removeExpenseFromMonth(data, userToken);
      setUseEffectExpense(true);
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
              <table className="w-full text-sm text-left whitespace-normal  text-gray-500 dark:text-black table-auto">
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
                <tbody className="overflow-auto relative h-2/6">
                  {expenses[expense].map((item) => {
                    return (
                      <tr
                        key={item._id}
                        className="bg-white border  w-96 dark:bg-emerald-300 rounded-lg dark:border-teal-700 hover:bg-gray-50 dark:hover:bg-slate-50"
                      >
                        <th
                          scope="row"
                          className="py-3 px-3  font-medium text-gray-900 uppercase whitespace-nowrap dark:text-black"
                        >
                          {item.name}
                        </th>

                        <td className="py-3 px-3">${item.amount}</td>

                        <td className="py-3 px-3 text-left">
                          <a
                            onClick={() => {
                              openExpenseModal(item._id);
                            }}
                            className="font-medium cursor-pointer text-blue-600  dark:text-blue-500 mr-1 hover:underline"
                          >
                            Edit
                          </a>
                          <a
                            onClick={() => {
                              deleteExpense(item._id);
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
      <div>
        {transactionsModal && (
          <EditExpense
            setTransctionsModal={setTransctionsModal}
            expenses={expenses}
            editExpense={editExpense}
            setUseEffectExpense={setUseEffectExpense}
          />
        )}
      </div>
    </div>
  );
};

export default DisplayExpenses;
