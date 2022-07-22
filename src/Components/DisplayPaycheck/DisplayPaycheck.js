import React from "react";
import { getTotalPaycheck } from "../../Helper/DoughnutHelp";
const DisplayPaycheck = ({ paychecks }) => {
  // console.log(paychecks[0].name);
  return (
    <div className="max-w-sm h-96 ml-5 w-96 border p-10 bg-teal-100 shadow-sm border-grey-500  rounded-3xl">
      <h1 className="font-bold pb-4 text-2xl">Income</h1>

      <div className="flex flex-col ">
        <div className="flex flex-col ">
          {paychecks.map((paycheck) => {
            return (
              <>
                <div className="flex justify-between  p-2 shadow-lg">
                  <h1 className="text-md uppercase text-green-500">
                    {paycheck.name}:
                  </h1>

                  <h1 className="font-bold">${paycheck.amount}</h1>
                </div>
              </>
            );
          })}

          <div className="mt-10">
            <h1 className="font-bold text-xl">
              Total Income: ${getTotalPaycheck(paychecks)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPaycheck;
