import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.initialInvestment >= 1 &&
    userInput.duration >= 1 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 1;

  const getErrorMessage = () => {
    if (userInput.initialInvestment < 1) {
      return "Please enter a valid initial investment greater than 0";
    }
    if (userInput.duration < 1) {
      return "Please enter a duration greater than 0";
    }
    if (userInput.annualInvestment < 1) {
      return "Please enter a valid annual investment greater than 0";
    }
    if (userInput.expectedReturn < 1) {
      return "Please enter a valid expected return greater than 0";
    }
    return "";
  };

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onInput={handleChange} />
      {!inputIsValid && <p className="center">{getErrorMessage()}</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
