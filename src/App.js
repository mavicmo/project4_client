import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import PageRouter from "./Router/PageRouter";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <main>
        <PageRouter />
      </main>
    </div>
  );
}

export default App;
