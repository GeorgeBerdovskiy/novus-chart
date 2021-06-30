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
      <p>Dashboard</p>
      <div class="projects-container-div">
          <Appointments />
          <TestResults />
          <Payment />
          <Messages />
          <Prescriptions />
          <SymptomTracker />
      </div>
    </>
  );
};

export default Dashboard;
