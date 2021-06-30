import Image from "../../Assets/medical-report.png";
import {Link} from "react-router-dom";

const Appointments = () => {
  return (
      <Link className="clickable" to="/appointments">
          <div class="applet">
              <img class="image" src={Image}  alt={"Appointment icon"}/>
          </div>
      </Link>
  );
};

export default Appointments;
