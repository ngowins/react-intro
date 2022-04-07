import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first React App! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm sure React is amazing, but it sure is confusing! For now :)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
