import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
  return (
    <div className="install">
      <div className="container">
        <div className="left">
          <Image src="/firefox.svg" className="image" fill alt="firefox-logo" />
        </div>
        <div className="right">
          <h2>HOW TO INSTALL THE <span>AD BLOCKER FIREFOX </span>FEATURE?</h2>
          <p>
            It is very simple, just go to your browser, download the{" "}
            <span>youtube adblock firefox </span>browser extension and then
            install the extension. It will automatically start running.
          </p>
          <button>
            {" "}
            <Image
              src="/ri_firefox-fill.svg"
              width={30}
              height={30}
              alt="firefox-logo"
            />
            Add to Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
