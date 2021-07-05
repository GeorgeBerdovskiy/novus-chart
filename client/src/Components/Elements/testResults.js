import Image from "../../Assets/x-ray.png";
import {Link} from "react-router-dom";

const TestResults = () => {
  return (
      <Link className="clickable" to="/test_results">
          <div class="applet">
              <img class="image" src={Image}  alt={"Test Result Icon"}/>
              <div className="overlay">
                  <div className="overlayText">Test Results</div>
              </div>
          </div>
      </Link>
  );
};

export default TestResults;
