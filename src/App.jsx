import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BalanceDisplay from "./components/BalanceDisplay";
import SendMoneyForm from "./components/SendMoneyForm";
import RequestMoneyForm from "./components/RequestMoneyForm";
import MathPuzzleModal from "./components/MathPuzzleModal";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000); // Starting balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");

  const initiateSendMoney = (amount) => {
    if (amount <= balance) {
      setTransactionAmount(amount);
      setTransactionType("send");
      setIsModalOpen(true); // Open the math puzzle modal only if balance is sufficient
    } else {
      alert("Insufficient balance."); // Alert the user if the balance is insufficient
    }
  };

  const initiateRequestMoney = (amount) => {
    setTransactionAmount(amount);
    setTransactionType("request");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSolve = (isSolved) => {
    if (isSolved) {
      if (transactionType === "send" && transactionAmount <= balance) {
        setBalance((prevBalance) => prevBalance - transactionAmount);
      } else if (transactionType === "request") {
        setBalance((prevBalance) => prevBalance + transactionAmount);
      }
    }
    closeModal();
    setTransactionType(""); // Reset transaction type
    setTransactionAmount(0); // Reset transaction amount
  };

  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <header className="app-header">
        <nav>
          <ul>
            <li>
              <a href="../coursework.html">Back</a>
            </li>
            <li>
              <a href="#contact">My CV</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rahmat-m-05893b25"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://calendar.app.google/wehKkqZjGjnB9WqV7"
                target="_blank"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container mt-5">
        <h1 className="text-center mb-4 app-title">Mobile Money Wallet</h1>
        <BalanceDisplay balance={balance} />
        <SendMoneyForm onSend={initiateSendMoney} />
        <RequestMoneyForm onRequest={initiateRequestMoney} />
        <MathPuzzleModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSolve={handleSolve}
        />
      </div>
    </>
  );
}

export default App;
