import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <small>
          Coded by
          <a href="https://github.com/carolinedam" target="_blank">
            {" "}
            Caroline D'Ambro
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
