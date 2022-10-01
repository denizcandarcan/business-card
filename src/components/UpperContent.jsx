
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function UpperContent() {

  return (
    <div className="upper-section">
      <img
        className="profile-photo"
        src={process.env.PUBLIC_URL + "/pp.png"}
        alt="Profile Img"
      />
      <h2 className="name">Denizcan Darcan</h2>
      <h3 className="title">Software Developer</h3>
      <h4 className="email">www.denizcandarcan.com</h4>
      <div className="buttons">
        <a className="button-email" href="mailto:denizcandarcan@outlook.com">
        <FontAwesomeIcon icon={faEnvelope}/> Email
        </a>
        <a className="button-linkedin" href="https://www.linkedin.com/in/denizcandarcan"> 
        <FontAwesomeIcon icon={faLinkedin}/> LinkedIn
        </a>
      </div>
      <div className="description">
        <div className="about">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interest">
            <h2>Interest</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </div>
  );
}
