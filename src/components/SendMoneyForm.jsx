import React, { useState } from "react";

const SendMoneyForm = ({ onSend }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const moneyAmount = parseFloat(amount);
    if (moneyAmount && moneyAmount > 0) {
      onSend(moneyAmount);
      setAmount(""); // Reset amount input after sending
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          placeholder="Amount to send"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <div className="input-group-append">
          <button className="btn send-money-button" type="submit">
            Send Money
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendMoneyForm;
