import React from "react";

const BalanceDisplay = ({ balance }) => {
  const formattedBalance = balance.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="alert alert-primary" role="alert">
      Account Balance: {formattedBalance}
    </div>
  );
};

export default BalanceDisplay;
