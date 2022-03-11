// Styles
import "./Footer.scss";

// Icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="grid">
            
          <div className="flow-content info">
            <p>&copy; 2022 Cozy Homes. All rights reserved.</p>
            <ul className="footer-nav">
              {["Privacy", "Terms", "Site Map"].map(item => (
                <li key={item} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className="icons">
            {[
              <FontAwesomeIcon icon={faTwitter} size="lg" />,
              <FontAwesomeIcon icon={faFacebookF} size="lg" />,
              <FontAwesomeIcon icon={faInstagram} size="lg" />,
            ].map((icon, index) => (
              <li className="icon" key={index}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
