import "../Footer/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faYoutube, faDiscord} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      
        <div className="footer-icons">
          <FontAwesomeIcon size="2xl" icon={faXTwitter} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon size="2xl" icon={faDiscord} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon size="2xl" icon={faFacebook} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon size="2xl" icon={faYoutube} style={{ color: "#ffffff" }} />
        </div>

        <div className="footer-text-div">
          <h2>Privacy</h2>
          <h2>Terms Of Use</h2>
        </div>
      
    </div>
  );
}
