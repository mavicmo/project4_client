export function getDataAmount(expenses) {
  const getTotalPaycheck = () => {
    let totalAmount = 0;
    expenses?.paycheck?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    return totalAmount;
  };
  const totalPaycheck = getTotalPaycheck();

  let dataAmount = [];
  const getAmountNeedData = () => {
    let totalAmount = 0;
    expenses?.need?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    totalAmount = (totalAmount / totalPaycheck) * 100;
    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountWantData = () => {
    let totalAmount = 0;
    expenses?.want?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    totalAmount = (totalAmount / totalPaycheck) * 100;
    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountSaveData = () => {
    let totalAmount = 0;
    expenses?.save?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    totalAmount = (totalAmount / totalPaycheck) * 100;
    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountInvestmentData = () => {
    let totalAmount = 0;
    expenses?.investment?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    totalAmount = (totalAmount / totalPaycheck) * 100;
    dataAmount.push(Math.floor(totalAmount));
  };

  getAmountNeedData();
  getAmountWantData();
  getAmountSaveData();
  getAmountInvestmentData();

  return dataAmount;
}

export function chartData(expenses) {
  const config = {
    data: {
      datasets: [
        {
          data: getDataAmount(expenses),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(0,128,0)",
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return config;
}

export function getLabels(expenses) {
  const dataAmount = getDataAmount(expenses);

  const obj = [
    {
      type: "Need",
      color: "rgb(255, 99, 132)",
      percent: dataAmount[0],
    },
    {
      type: "Want",
      color: "rgb(54, 162, 235)",
      percent: dataAmount[1],
    },
    {
      type: "Save",
      color: "#f9c74f",
      percent: dataAmount[2],
    },
    {
      type: "Investment",
      color: "rgb(0,128,0)",
      percent: dataAmount[3],
    },
  ];
  return obj;
}

export function getLabelAmounts(expenses) {
  const dataAmount = getTotalDataAmounts(expenses);

  const obj = [
    {
      type: "Need",
      color: "rgb(255, 99, 132)",
      totalAmount: dataAmount[0],
    },
    {
      type: "Want",
      color: "rgb(54, 162, 235)",
      totalAmount: dataAmount[1],
    },
    {
      type: "Save",
      color: "#f9c74f",
      totalAmount: dataAmount[2],
    },
    {
      type: "Investment",
      color: "rgb(0,128,0)",
      totalAmount: dataAmount[3],
    },
  ];
  return obj;
}

export function getTotalDataAmounts(expenses) {
  let dataAmount = [];
  const getAmountNeedData = () => {
    let totalAmount = 0;
    expenses?.need?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountWantData = () => {
    let totalAmount = 0;
    expenses?.want?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountSaveData = () => {
    let totalAmount = 0;
    expenses?.save?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountInvestmentData = () => {
    let totalAmount = 0;
    expenses?.investment?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  getAmountNeedData();
  getAmountWantData();
  getAmountSaveData();
  getAmountInvestmentData();

  return dataAmount;
}

export function getTotalPaycheck(paychecks) {
  let totalAmount = 0;
  paychecks.forEach((paycheck) => {
    totalAmount += +paycheck.amount;
  });
  return totalAmount;
}

export function getTotalExpenses(expenses) {
  const getTotalPaycheck = () => {
    let totalAmount = 0;
    expenses?.paycheck?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    return totalAmount;
  };
  const totalPaycheck = getTotalPaycheck();

  let dataAmount = [];
  const getAmountNeedData = () => {
    let totalAmount = 0;
    expenses?.need?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountWantData = () => {
    let totalAmount = 0;
    expenses?.want?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountSaveData = () => {
    let totalAmount = 0;
    expenses?.save?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };
  const getAmountInvestmentData = () => {
    let totalAmount = 0;
    expenses?.investment?.forEach((expense) => {
      totalAmount += +expense.amount;
    });

    dataAmount.push(Math.floor(totalAmount));
  };

  getAmountNeedData();
  getAmountWantData();
  getAmountSaveData();
  getAmountInvestmentData();

  dataAmount = dataAmount.reduce((acc, amount) => acc + amount, 0);

  return dataAmount;
}

export function getSaving(expenses) {
  const totalExpenses = getTotalExpenses(expenses);
  const getTotalPaycheck = () => {
    let totalAmount = 0;
    expenses?.paycheck?.forEach((expense) => {
      totalAmount += +expense.amount;
    });
    return totalAmount;
  };
  const totalPaycheck = getTotalPaycheck();

  const getSaving = totalPaycheck - totalExpenses;
  return getSaving;
}
