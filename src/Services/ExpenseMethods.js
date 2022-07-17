import axios from "axios";

const BASE_URL = "http://localhost:3005/api/Expense";

class ExpenseMethods {
  //test ExpenseMethods class
  static test = () => {
    return console.log("expense Method has been reached");
  };

  // method to send data to the back end to add a expense
  static addExpense = (expenseData, currentUserToken) => {
    return axios.post(
      `http://localhost:3005/api/expenses/createexpense`,
      expenseData,
      {
        headers: {
          Authorization: `${currentUserToken}`,
        },
      }
    );
  };

  // send frontend data to backend server to login
  static getExpenses = (currentUserToken) => {
    return axios.get(`http://localhost:3005/api/expenses/`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
  // retrieve expense data by ID
  static getExpenseByID = (expenseID, currentUserToken) => {
    return axios.get(`http://localhost:3005/api/expenses/${expenseID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static editExpensesById = (expenseID, currentUserToken) => {
    return axios.put(`http://localhost:3005/api/expenses/${expenseID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static deleteExpenseById = (expenseID, currentUserToken) => {
    console.log(expenseID);
    return axios.delete(`http://localhost:3005/api/expenses/${expenseID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
}

export default ExpenseMethods;
