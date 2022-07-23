import React from "react";
import { getLabelAmounts, getSaving } from "../../Helper/DoughnutHelp";
const TotalAmounts = ({ expenseValues }) => {
  console.log(expenseValues);

  const data = getLabelAmounts(expenseValues);

  const saving = getSaving(expenseValues);

  return (
    <div className="max-w-sm border ml-5 p-10 bg-teal-100 shadow-sm border-grey-500 rounded-3xl w-full">
      {" "}
      <h1 className="font-bold pb-4 text-2xl">Total Expense Amounts</h1>
      <div className="flex flex-col ">
        <div className="flex flex-col ">
          {data.map((item) => {
            return (
              <>
                <div className="flex justify-between  p-2 shadow-lg">
                  <div className="flex gap-2">
                    <div
                      className="w-2 h-2 rouded py-3"
                      style={{ background: item.color ?? "#f9c74f" }}
                    >
                      {" "}
                    </div>
                    <h1
                      className="text-md uppercase"
                      style={{ color: item.color ?? "#f9c74f" }}
                    >
                      {item.type}:
                    </h1>
                  </div>
                  <h1 className="font-bold">${item.totalAmount}</h1>
                </div>
              </>
            );
          })}

          <div className="mt-10 p-6">
            <h1 className="font-bold ">
              Total Saving: <br />
              <span
                className={`m-5 text-4xl ${
                  saving > 0 ? "text-green-600" : "text-rose-700"
                }`}
              >
                ${saving}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalAmounts;
