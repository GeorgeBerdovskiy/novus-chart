import Image from "../../Assets/message.png";
import {Link} from "react-router-dom";

const Messages = () => {
  return (
      <Link className="clickable" to="/messages">
          <div class="applet">
              <img class="image" src={Image}  alt={"Messages Icon"}/>
              <div className="overlay">
                  <div className="overlayText">Messages</div>
              </div>
          </div>
      </Link>
  );
};

export default Messages;
