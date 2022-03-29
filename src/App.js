import "./App.css";

function App() {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" name="email" placeholder="Write your email" />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Write your password"
        />
        <br />
        <br />
        <input type="submit" value="Register" id="register-btn" />
      </form>
    </div>
  );
}

export default App;
