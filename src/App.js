import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Dictionary defaultKeyword="library" />
      </div>
    </div>
  );
}

export default App;
