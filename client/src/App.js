import "./css/App.css";
import "./css/applet.css";
import "./css/dashboard.css";

import Dashboard from "./Components/Pages/dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Appointments from "./Components/Elements/appointments";
import TestResults from "./Components/Elements/testResults";
import Prescriptions from "./Components/Elements/prescriptions";
import SymptomTracker from "./Components/Elements/symptomTracker";
import Messages from "./Components/Elements/messages";
import Payment from "./Components/Elements/payment";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <h1>Novus Chart</h1>
                <Dashboard />
            </header>
                <Switch>
                    <Route exact path="/appointments" component={Appointments}/>
                    <Route exact path="/test_results" component={TestResults}/>
                    <Route exact path="/prescriptions" component={Prescriptions}/>
                    <Route exact path="/symptom_tracker" component={SymptomTracker}/>
                    <Route exact path="/messages" component={Messages}/>
                    <Route exact path="/payment" component={Payment}/>
                </Switch>
            </div>
      </BrowserRouter>
  );
}

export default App;
