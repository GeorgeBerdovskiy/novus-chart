import "./css/App.css";

import Dashboard from "./Components/Pages/dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Appointments from "./Components/Pages/Appointments";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <h1>Novus Chart</h1>
            </header>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/appointments" component={Appointments}/>
                </Switch>
            </div>
      </BrowserRouter>
  );
}

// TODO implement later
//<Route exact path="/test_results" component={TestResults}/>
//<Route exact path="/prescriptions" component={Prescriptions}/>
//<Route exact path="/symptom_tracker" component={SymptomTracker}/>
//<Route exact path="/messages" component={Messages}/>
//<Route exact path="/payment" component={Payment}/>

export default App;
