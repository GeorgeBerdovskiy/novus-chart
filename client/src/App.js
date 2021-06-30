import "./css/App.css";
import "./css/applet.css";
import Dashboard from "./Components/Pages/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Novus Chart</h1>
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
