import React from "react";

import TestResults from "../Elements/testResults";
import Payment from "../Elements/payment";
import Messages from "../Elements/messages";
import Appointments from "../Elements/appointments";
import Prescriptions from "../Elements/prescriptions";
import SymptomTracker from "../Elements/symptomTracker";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div class="projects-container-div">
          <Appointments />
          <TestResults />
          <Payment />
      </div>
      <div class="projects-container-div">
          <Messages />
          <Prescriptions />
          <SymptomTracker />
      </div>
    </>
  );
};

export default Dashboard;
