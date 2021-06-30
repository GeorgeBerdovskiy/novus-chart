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
        <div class="project-item-div">
          <TestResults />
        </div>
        <div class="project-item-div">
          <Payment />
        </div>
        <div class="project-item-div">
          <Messages />
        </div>
        <div class="project-item-div">
          <Appointments />
        </div>
        <div class="project-item-div">
          <Prescriptions />
        </div>
        <div class="project-item-div">
          <SymptomTracker />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
