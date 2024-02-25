import React, { useState, useEffect } from "react";

const MathPuzzleModal = ({ isOpen, onClose, onSolve }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  // Function to generate a new math puzzle
  const generatePuzzle = () => {
    const num1 = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10); // Generate a second random number
    setQuestion(`${num1} + ${num2}`); // Set the question as an addition problem
    setAnswer(num1 + num2); // Calculate the correct answer
    setUserAnswer(""); // Reset user's answer
  };

  useEffect(() => {
    if (isOpen) {
      generatePuzzle(); // Generate a new puzzle each time the modal opens
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer, 10) === answer) {
      onSolve(true); // If the user's answer is correct, call the onSolve prop with true
      onClose(); // Close the modal
    } else {
      alert("Incorrect answer. Please try again."); // Notify the user of incorrect answer
    }
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Solve the Puzzle to Proceed</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{question}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathPuzzleModal;
