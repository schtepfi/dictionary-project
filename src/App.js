import logo from './logo.svg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/schtepfi/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >Open-source code</a>, by Stephanie Schlaepfer
      </footer>
      </div>
    </div>
  );
}

export default App;
