import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "I love Github CI/CD pIPELINE"}{" "}
          - By DevOps Pro
        </p>
        <a
          className="App-link"
          href="https://youtube.com/@DevOpsPro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevO
        </a>
      </header>
    </div>
  );
}

export default App;
