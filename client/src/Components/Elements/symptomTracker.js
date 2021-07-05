import Image from "../../Assets/thermometer.png";
import {Link} from "react-router-dom";

const SymptomTracker = () => {
  return (
      <Link className="clickable" to="/symptom_tracker">
          <div class="applet">
              <img class="image" src={Image}  alt={"Symptom Tracker Icon"}/>
              <div className="overlay">
                  <div className="overlayText">Symptom Tracker</div>
              </div>
          </div>
      </Link>
  );
};

export default SymptomTracker;
