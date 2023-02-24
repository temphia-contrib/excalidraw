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

      <div style={{ height: "calc(100vh - 2rem)" }}>
        <Excalidraw onChange={(elements, appState, files) => {
          console.log("@elements", elements)
          console.log("@app_state", appState)
          console.log("@files", files)
        }} initialData={null} />
      </div>
    </div>
  );
}

export default App;
