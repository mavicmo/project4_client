import React from "react";

import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users";

class UserMethods {
  //test UserMethods class
  static test = () => {
    return console.log("User Method has been reached");
  };

  // method to sign up a user to the backend
  static signup = (userData) => {
    return axios.post(`http://localhost:3005/api/users/signup`, userData);
  };

  static login = (userData) => {
    console.log("login route has been reached");
    return axios.post(`http://localhost:3005/api/users/login`, userData);
  };
}

export default UserMethods;
