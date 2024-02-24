import React from "react";

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="alert alert-primary" role="alert">
      Account Balance: ${balance}
    </div>
  );
};

export default BalanceDisplay;
