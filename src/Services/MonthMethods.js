import axios from "axios";

const BASE_URL = "http://localhost:3005/api/months";

class MonthMethods {
  //test MonthMethods class
  static test = () => {
    return console.log("Month Method has been reached");
  };

  // method to send data to the back end to add a month
  static addMonths = (monthData, currentUserToken) => {
    return axios.post(
      `http://localhost:3005/api/months/createmonth`,
      monthData,
      {
        headers: {
          Authorization: `${currentUserToken}`,
        },
      }
    );
  };

  // send frontend data to backend server to login
  static getMonths = (currentUserToken) => {
    return axios.get(`http://localhost:3005/api/months/`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
  // retrieve month data by ID
  static getMonthByID = (monthID, currentUserToken) => {
    return axios.get(`http://localhost:3005/api/months/${monthID}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static editMonthById = (data, monthID, currentUserToken) => {
    return axios.put(`http://localhost:3005/api/months/edit/${monthID}`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  // add a expense to the month
  static addExpenseToMonth = (data, currentUserToken) => {
    return axios.put(`http://localhost:3005/api/months/addexpense`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  // remove a expense to the month
  static removeExpenseFromMonth = (data, currentUserToken) => {
    return axios.put(`http://localhost:3005/api/months/removeexpense`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  // get all the expenses from a month
  static getExpensePerMonth = (monthId) => {
    return axios.get(
      `http://localhost:3005/api/months/month/getexpenses/${monthId}`
    );
  };

  // delete all the expenses from the month
  static deleteExpensesPerMonth = (monthId, currentUserToken) => {
    return axios.delete(
      `http://localhost:3005/api/months/month/deleteexpenses/${monthId}`,
      {
        headers: {
          Authorization: `${currentUserToken}`,
        },
      }
    );
  };

  // delete month by Id
  static deleteMonthById = (monthId, currentUserToken) => {
    return axios.delete(`http://localhost:3005/api/months/${monthId}`, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };
}

export default MonthMethods;
