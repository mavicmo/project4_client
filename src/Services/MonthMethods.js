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

  static addExpenseToMonth = (data, currentUserToken) => {
    return axios.put(`http://localhost:3005/api/months/addexpense`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static removeExpenseFromMonth = (data, currentUserToken) => {
    console.log(data);
    return axios.put(`http://localhost:3005/api/months/removeexpense`, data, {
      headers: {
        Authorization: `${currentUserToken}`,
      },
    });
  };

  static getExpensePerMonth = (monthId, currentUserToken) => {
    return axios.get(
      `http://localhost:3005/api/months/month/getexpenses/${monthId}`
    );
  };
}

export default MonthMethods;
