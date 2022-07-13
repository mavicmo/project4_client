import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Homepage from "../Pages/Homepage/Homepage";
import Months from "../Pages/Months/Months";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/:id" element={<Months />} />
    </Routes>
  );
};

export default PageRouter;
