import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Sidebar from "../../Components/Sidebar/Sidebar";
import UserMethods from "../../Services/UserMethods";
import MonthMethods from "../../Services/MonthMethods";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import DisplayPaycheck from "../../Components/DisplayPaycheck/DisplayPaycheck";
import TotalAmounts from "../../Components/TotalAmounts/TotalAmounts";
import Expenses from "../../Components/Expenses/Expenses";
import EditMonth from "../../Components/EditMonth/EditMonth";
import Graph from "../../Components/Graph/Graph";
const Months = () => {
  const navigate = useNavigate();
  const monthId = useParams().id;
  const userToken = UserMethods.getCurrentUser().jwt;

  const [month, setMonth] = useState([]);

  const [listOfExpenses, setListOfExpenses] = useState([]);
  const [paychecks, setPaychecks] = useState([]);
  // use effect use state to render a new submit
  const [renderNewExpense, setRenderNewExpense] = useState(false);
  const [useEffectExpense, setUseEffectExpense] = useState(false);
  // expense useState
  const [expenseValues, setExpenseValues] = useState();
  // usestate for the edit modal
  const [editModal, setEditModal] = useState(false);
  const [choice, setChoice] = useState(false);

  useEffect(() => {
    getMonth();
    setChoice(false);
  }, [choice, monthId]);
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
      setChoice(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMonth = async (monthId, userToken) => {
    try {
      await MonthMethods.deleteMonthById(monthId, userToken);
      await MonthMethods.deleteExpensesPerMonth(monthId, userToken);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  ">
      <Sidebar month={month} choice={choice} />
      <div className="container mx-auto text-center drop-shadow-lg text-gray-800 ">
        <div className="flex py-8 mb-10 ml-10  ">
          <h1 className=" text-5xl mr-5 ">
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
        <div className="grid grid-rows-1 grid-flow-col gap-4  ">
          <div className="flex m-0">
            <TransactionForm
              monthId={monthId}
              getMonth={getMonth}
              setListOfExpenses={setListOfExpenses}
              listOfExpenses={listOfExpenses}
              setRenderNewExpense={setRenderNewExpense}
            />
            <DisplayPaycheck paychecks={paychecks} />
          </div>
          <div className="grid grid-flow-col auto-cols-max ">
            <Graph
              monthId={monthId}
              renderNewExpense={renderNewExpense}
              useEffectExpense={useEffectExpense}
            />
            <TotalAmounts expenseValues={expenseValues} />
          </div>
          <div className="row-span-2 col-span-10 ">
            <Expenses
              listOfExpenses={listOfExpenses}
              setListOfExpenses={setListOfExpenses}
              monthId={monthId}
              setPaychecks={setPaychecks}
              setExpenseValues={setExpenseValues}
              renderNewExpense={renderNewExpense}
              setRenderNewExpense={setRenderNewExpense}
              useEffectExpense={useEffectExpense}
              setUseEffectExpense={setUseEffectExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Months;
