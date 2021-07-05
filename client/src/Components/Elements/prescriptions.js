import Image from "../../Assets/pills.png";
import {Link} from "react-router-dom";

const Prescriptions = () => {
  return (
      <Link className="clickable" to="/prescriptions">
          <div class="applet">
              <img class="image" src={Image}  alt={"Prescriptions Icon"}/>
              <div className="overlay">
                  <div className="overlayText">Prescriptions</div>
              </div>
          </div>
      </Link>
  );
};

export default Prescriptions;
