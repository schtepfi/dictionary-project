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
        <footer className="text-center">
          Open-source code, by Stephanie Schlaepfer
      </footer>
      </div>
    </div>
  );
}

export default App;
