import React, { useState } from "react";

const RequestMoneyForm = ({ onRequest }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const moneyAmount = parseFloat(amount);
    if (moneyAmount && moneyAmount > 0) {
      onRequest(moneyAmount);
      setAmount(""); // Reset the amount input after requesting
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          placeholder="Amount to request"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <div className="input-group-append">
          <button className="btn request-money-button" type="submit">
            Request Money
          </button>
        </div>
      </div>
    </form>
  );
};

export default RequestMoneyForm;
