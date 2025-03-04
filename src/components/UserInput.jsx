export default function UserInput({ userInput, onInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(event) =>
                onInput("initialInvestment", event.target.value)
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
                onInput("annualInvestment", event.target.value)
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
                onInput("expectedReturn", event.target.value)
              }
              required
              value={userInput.expectedReturn}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(event) => onInput("duration", event.target.value)}
              required
              value={userInput.duration}
            />
          </p>
        </div>
      </section>
    </>
  );
}
