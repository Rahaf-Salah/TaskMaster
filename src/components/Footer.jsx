import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer center flexCenter ">
      <div className="flex-column">
        <div className="flex-row mb-10">
          <Link
            to="https://www.linkedin.com/in/rahaf-salah-98b3011aa/"
            target="_blank"
          >
            <img src="/images/linkedin.svg" alt="Linkedin" />
          </Link>
          <Link to="https://github.com/rahaf-salah" target="_blank">
            <img src="/images/github.svg" alt="Github" className="github" />
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <img
              src="/images/twitter.svg"
              alt="Twitter"
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src="/images/facebook.svg" alt="Facebook" />
          </Link>
        </div>
        <div className="copyrights">
          &copy; 2023 TaskMaster. All Rights Reserved.{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
