import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Routes from "./Routes/router";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
