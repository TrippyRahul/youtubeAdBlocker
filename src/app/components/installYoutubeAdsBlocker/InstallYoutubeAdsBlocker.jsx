import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <Image src="/install-bg.svg" width={1817.37} height={1045.26} className="bg" alt="install-bg"/>
      <div className="container">
        <h2>
          INSTALL YOUTUBE ADS BLOCKER NOW ON YOUR BROWSER TO ENJOY SEAMLESS
          BROWSING EXPERIENCE
        </h2>

        <div className="content">
          <ul>
            <li>Videos load faster with free adblocker for chrome</li>
            <li>Stop malware and virus with Youtube adblock chrome</li>
            <li>Continuous playlists with Youtube adblock chrome</li>
            <li>Works like a child lock with adblock Youtube chrome</li>
          </ul>
          <ul>
            <li>Enjoy unskippable videos with Youtube chrome</li>
            <li>Protect your data with adblock Youtube chrome </li>
            <li> Have a safe browsing with adblock YouTube chrome</li>
            <li>Watch your favorite movie without disturbance in youtube. </li>
            <li> Remove virus with this extension</li>
          </ul>
        </div>
        <button>Install Extension</button>
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
