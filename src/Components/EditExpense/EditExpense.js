import { useState } from "react";

import ExpenseMethods from "../../Services/ExpenseMethods";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";

const EditExpense = ({
  setListOfExpenses,
  listOfExpenses,
  expenses,
  setExpenseValues,
  setTransctionsModal,
  editExpense,
}) => {
  //   console.log(expenses);
  const initialState = {
    name: "",
    amount: "",
    category: "",
  };
  const currentUserToken = UserMethods.getCurrentUser().jwt;
  const [values, setValues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    editExpense(values);
  };

  // close modal
  const cancelHandler = () => {
    // setChoice(false);
    setTransctionsModal(false);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") cancelHandler();
  };

  // setting the values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="container"
      className=" absolute inset-0 z-50 bg-opacity-80 flex justify-center items-center "
      onClick={handleOnClose}
    >
      <div
        className={`form max-w-sm  ml-5 w-96 border p-10 bg-teal-700 shadow-sm border-grey-500 rounded-3xl`}
      >
        <h1 className="font-bold pb-4 text-white text-2xl">Edit Expense</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <select
              id="expenses"
              name="category"
              value={values.category}
              onChange={onChange}
              className="bg-gray-50 border border-black   text-lg rounded-lg focus:ring-teal-700 focus:border-teal-700 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-700 dark:focus:border-teal-700"
            >
              <option defaultValue>Choose the type of Expense</option>
              <option value="Need">Need</option>
              <option value="Want">Want</option>
              <option value="Save">Save</option>
              <option value="Investment">Investment</option>
              <option value="Paycheck">Paycheck</option>
            </select>
            <div className="input-group">
              <div className="flex justify-center">
                <div className=" w-full rounded-lg">
                  <label
                    className="block text-left tracking-wide text-gray-100 text-sm font-bold mb-2 ml-2"
                    htmlFor="name"
                  >
                    Name of Transaction
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={onChange}
                    value={values.name}
                    className="rounded-lg appearance-none border-2 border-teal-500   w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className=" w-full rounded-lg">
                  <label
                    className="block text-left tracking-wide text-gray-100 text-sm font-bold mb-2 ml-2"
                    htmlFor="number"
                  >
                    Amount for the Transaction
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="any"
                    name="amount"
                    id="amount"
                    onChange={onChange}
                    value={values.amount}
                    className="rounded-lg appearance-none border-2 border-teal-500  w-full mb-2
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                    required
                  />
                </div>
              </div>
              <div className="submit-btn">
                <button className="border border-teal-500 rounded-lg py-2 text-lg text-white bg-teal-500 w-full">
                  Submit Transaction
                </button>
                <button
                  onClick={cancelHandler}
                  className="border border-red-500 rounded-lg py-2 text-lg text-white bg-red-500 w-full"
                >
                  Cancel Transaction
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
