import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3005";

class UserMethods {
  //test UserMethods class
  static test = () => {
    return console.log("User Method has been reached");
  };

  // method to sign up a user to the backend
  static signup = (userData) => {
    return axios.post(BASE_URL + `/api/users/signup`, userData);
  };

  // send frontend data to backend server to login
  static login = (userData) => {
    console.log(userData);
    return axios.post(BASE_URL + `/api/users/login`, userData);
  };
  // retrieve user data from local localStorage
  static getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  static logout = () => {
    localStorage.removeItem("user");
  };
}

export default UserMethods;
