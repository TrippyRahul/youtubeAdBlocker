import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
  return (
    <div className="install">
      <div className="container">
        <div className="left">
          <Image src="/firefox.svg" className="image" layout="fill" />
        </div>
        <div className="right">
          <h2>HOW TO INSTALL THE AD BLOCKER FIREFOX FEATURE?</h2>
          <p>
            It is very simple, just go to your browser, download the youtube
            adblock firefox browser extension and then install youtube adblock
            firefox. It will automatically start running.
          </p>
          <button>
            {" "}
            <Image src="/ri_firefox-fill.svg" width={30} height={30} />
            Add to Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
