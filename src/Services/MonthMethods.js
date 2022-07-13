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
  // retrieve user data from local localStorage
  static getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  static logout = () => {
    localStorage.removeItem("user");
  };
}

export default MonthMethods;
