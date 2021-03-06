import { useState } from "react";
import MonthMethods from "../../Services/MonthMethods";
import UserMethods from "../../Services/UserMethods";
const AddMonth = ({ model, onClose }) => {
  const currentUserToken = UserMethods.getCurrentUser().jwt;

  const [values, setValues] = useState({
    month: "",
    year: "",
  });
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addMonthHandler();
  };

  const addMonthHandler = async () => {
    try {
      await MonthMethods.addMonths(values, currentUserToken);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // setting the values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div
        id="container"
        className=" absolute inset-0 flex justify-center items-center"
        onClick={handleOnClose}
      >
        <form className="bg-teal-700 rounded p-5" onSubmit={handleSubmit}>
          <div>
            <div className="flex justify-center">
              <div className="w-full">
                <select
                  id="expenses"
                  name="month"
                  value={values.month}
                  onChange={onChange}
                  className="bg-gray-50 border border-black   text-sm rounded-lg focus:ring-teal-700 focus:border-teal-700 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-700 dark:focus:border-teal-700"
                >
                  <option selected>Months</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="Apirl">Apirl</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="year"
                >
                  Year
                </label>
                <input
                  type="year"
                  name="year"
                  id="year"
                  onChange={onChange}
                  value={values.year}
                  className="bg-white appearance-none border-2 border-teal-200 rounded w-full 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  required
                />
              </div>
            </div>
            {/** submit button */}

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="group  py-2 px-4  border font-bold border-transparent text-lg leading-5 
              rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-400 
              focus:shadow-outline-green active:bg-green-400 active:outline-none transition duration-150 ease-in-out"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMonth;
