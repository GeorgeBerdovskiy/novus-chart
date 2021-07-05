import Image from "../../Assets/bill.png";
import {Link} from "react-router-dom";

const Payment = () => {
  return (
      <Link className="clickable" to="/payment">
          <div class="applet">
              <img class="image" src={Image}  alt={"Payment Icon"}/>
              <div className="overlay">
                  <div className="overlayText">Payments</div>
              </div>
          </div>
      </Link>
  );
};

export default Payment;
