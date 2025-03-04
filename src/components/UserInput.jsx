import { useState } from "react";
export default function UserInput({ label, onInput }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 2500,
    annualInvestment: 125,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
              required
              value={userInput.initialInvestment}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
              required
              value={userInput.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
              required
              value={userInput.expectedReturn}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(event) => handleChange("duration", event.target.value)}
              required
              value={userInput.duration}
            />
          </p>
        </div>
      </section>
    </>
  );
}
