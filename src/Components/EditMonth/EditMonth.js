import { useState } from "react";

const EditMonth = ({ setEditModal, setChoice, month, editMonth }) => {
  // usestate for the values
  const [values, setValues] = useState({
    month: month.month,
    year: month.year,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    editMonth(values);
  };

  const cancelHandler = () => {
    setChoice(false);
    setEditModal(false);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") cancelHandler();
  };

  // setting the values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        id="container"
        className=" absolute inset-0 z-50 bg-opacity-80 flex justify-center items-center "
        onClick={handleOnClose}
      >
        <form className="bg-teal-700  rounded-2xl p-5 " onSubmit={handleSubmit}>
          <div>
            <h1 className="block uppercase tracking-wide text-white text-lg font-bold mb-2">
              Edit
            </h1>
            <div className="flex justify-center">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="month"
                >
                  Month
                </label>
                <select
                  id="expenses"
                  name="month"
                  value={values.month}
                  onChange={onChange}
                  className="bg-gray-50 border overflow-y-auto  border-teal-500  text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500"
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
                className="group mr-5 py-2 px-4  border font-bold border-transparent text-lg leading-5 
              rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-400 
              focus:shadow-outline-green active:bg-green-400 active:outline-none transition duration-150 ease-in-out"
              >
                Save
              </button>
              <button
                type="submit"
                className="group  py-2 px-4  border font-bold border-transparent text-lg leading-5 
              rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:border-red-400 
              focus:shadow-outline-red active:bg-red-400 active:outline-none transition duration-150 ease-in-out"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMonth;
