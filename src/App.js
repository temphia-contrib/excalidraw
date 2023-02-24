import { Excalidraw } from "@excalidraw/excalidraw";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/temphia-contrib/excalidraw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Excalidraw Example
        </a>
      </header>

      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </div>
  );
}

export default App;
