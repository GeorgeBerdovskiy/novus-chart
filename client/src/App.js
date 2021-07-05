import "./css/App.css";
import "./css/applet.css";
import "./css/dashboard.css";
import "./css/Appointments.css";

import Dashboard from "./Components/Pages/dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Appointments from "./Components/Pages/Appointments";
import TestResults from "./Components/Pages/TestResults";
import Prescriptions from "./Components/Pages/Prescriptions";
import SymptomTracker from "./Components/Pages/SymptomTracker";
import Messages from "./Components/Pages/Messages";
import Payment from "./Components/Pages/Payments";

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
