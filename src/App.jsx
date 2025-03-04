import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
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
      <UserInput userInput={userInput} onInput={handleChange} />
      <Results input={userInput}/>
    </>
  );
}

export default App;
