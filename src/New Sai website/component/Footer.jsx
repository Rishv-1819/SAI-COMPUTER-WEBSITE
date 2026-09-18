import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
     
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="contact-info">
          <div>
            <p>
              Sai Dhaam, Victoria Park Meerut - 250001
              <br />
              Uttar Pradesh, India
            </p>
          </div>

          <div>
            <p>
              T:+91-9359611016
              <br />
              E:
              <a href="mailto:saicomp@thesaicomputers.com">
                saicomp@thesaicomputers.com
              </a>
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>
            RK 2025 Sai Computers Limited. All rights reserved.
          </p>

          <div className="policy-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;