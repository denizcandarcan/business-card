import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/denizcandarcan">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href=".#">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/denizcandarcan/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://github.com/denizcandarcan">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
