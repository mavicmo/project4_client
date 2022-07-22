import React from "react";
import "./App.css";
import PageRouter from "./Router/PageRouter";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="container-lg">
      <Navbar />
      {/* <Sidebar /> */}
      <main>
        <PageRouter />
      </main>
    </div>
  );
}

export default App;
