import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import Expenses from "../../Components/Expenses/Expenses";
import EditMonth from "../../Components/EditMonth/EditMonth";
const Months = () => {
  const navigate = useNavigate();
  const monthId = useParams().id;
  // console.log(monthId);
  const userToken = UserMethods.getCurrentUser().jwt;

  const [month, setMonth] = useState([]);
  const [listOfExpenses, setListOfExpenses] = useState([]);

  // expense useState
  const [expenseValues, setExpenseValues] = useState();
  // usestate for the edit modal
  const [editModal, setEditModal] = useState(false);
  const [choice, setChoice] = useState(false);

  useEffect(() => {
    getMonth();
  }, [month]);
  const getMonth = async () => {
    try {
      const res = await MonthMethods.getMonthByID(monthId, userToken);
      setMonth(res.data.month);
      setListOfExpenses(res.data.month.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const openEditModal = () => {
    setEditModal(true);
  };

  const editMonth = async (data) => {
    try {
      await MonthMethods.editMonthById(data, monthId, userToken);
      setEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMonth = async (monthId, userToken) => {
    try {
      console.log(`tryna delete the month`);

      await MonthMethods.deleteMonthById(monthId, userToken);
      await MonthMethods.deleteExpensesPerMonth(monthId, userToken);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  console.log();
  return (
    <div className="flex ">
      <Sidebar />
      <div className="container  mx-auto  max-w-6xl text-center drop-shadow-lg text-gray-800">
        <div className="flex py-8 mb-10   text-Black ">
          <h1 className=" text-4xl mr-5 ">
            Expense for the Month of {capitalizeFirstLetter(`${month.month}`)}
          </h1>
          <FaEdit
            className="text-blue-700 text-lg mr-3 cursor-pointer"
            onClick={() => {
              openEditModal();
            }}
          />
          <MdDelete
            className="text-red-700 text-lg cursor-pointer"
            onClick={() => {
              deleteMonth(month._id, userToken);
            }}
          />
          {editModal && (
            <EditMonth
              editMonth={editMonth}
              setEditModal={setEditModal}
              setChoice={setChoice}
              month={month}
            />
          )}
        </div>

        {/* grid columns */}
        <div className="grid md:grid-cols-2">
          <TransactionForm
            monthId={monthId}
            getMonth={getMonth}
            setListOfExpenses={setListOfExpenses}
            listOfExpenses={listOfExpenses}
            expenseValues={expenseValues}
            setExpenseValues={setExpenseValues}
          />
          <Expenses
            listOfExpenses={listOfExpenses}
            setListOfExpenses={setListOfExpenses}
            monthId={monthId}
            // editExpense={editExpense}
          />
        </div>
      </div>
    </div>
  );
};

export default Months;
