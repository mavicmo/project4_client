import axios from "axios";

const BASE_URL = "http://localhost:3005/api/months";

class MonthMethods {
  //test MonthMethods class
  static test = () => {
    return console.log("Month Method has been reached");
  };

  // method to sign up a user to the backend
  static addMonths = (monthData) => {
    return axios.post(
      `http://localhost:3005/api/months/createmonth`,
      monthData
    );
  };

  // send frontend data to backend server to login
  static login = (userData) => {
    console.log("login route has been reached");
    return axios.post(`http://localhost:3005/api/users/login`, userData);
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
