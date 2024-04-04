import { useState } from "react";
import Buttons from "./Buttons";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handelPrevious = () => {
    if (step >= 2) setStep(step - 1);
  };
  const handelNext = () => {
    if (step <= 2) setStep(step + 1);
  };

  const handelClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={handelClose} className="close">&times; </button>
      {
        isOpen ? <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : null}>1</div>
          <div className={step >= 2 ? "active" : null}>2</div>
          <div className={step >= 3 ? "active" : null}>3</div>
        </div>
        <p className="message">
          step: {step} {messages[step - 1]}
        </p>
        <div className="buttons">
          <Buttons onClick={handelPrevious}>previous</Buttons>
          <Buttons onClick={handelNext}>next</Buttons>
        </div>
      </div>
      :null}
    </div>
  );
}

export default App;
