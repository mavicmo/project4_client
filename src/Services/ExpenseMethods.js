import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3005";
const BASE_URL = "http://localhost:3005";

class ExpenseMethods {
  //test ExpenseMethods class
  static test = () => {
    return console.log("expense Method has been reached");
  };

  // method to send data to the back end to add a expense
  static addExpense = (expenseData, currentUserToken) => {
    return axios.post(BASE_URL + `/api/expenses/createexpense`, expenseData, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  // send frontend data to backend server to login
  static getExpenses = (currentUserToken) => {
    return axios.get(BASE_URL + `/api/expenses/`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
  // retrieve expense data by ID
  static getExpenseByID = (expenseID, currentUserToken) => {
    return axios.get(BASE_URL + `/api/expenses/${expenseID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static editExpensesById = (data, expenseID, currentUserToken) => {
    return axios.put(BASE_URL + `/api/expenses/edit/${expenseID}`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static deleteExpenseById = (expenseID, currentUserToken) => {
    return axios.delete(BASE_URL + `/api/expenses/${expenseID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
}

export default ExpenseMethods;
