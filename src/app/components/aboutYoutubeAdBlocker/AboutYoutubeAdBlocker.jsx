import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker">
       <Image src="/howToadd-bg.svg" width={2091.29} height={1195.05} className="bg" alt="how-to-add"/>
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>ABOUT YOUTUBE ADBLOCKER</h2>
            <p>
              Are you tired of seeing ads while watching videos on YouTube? Say
              goodbye to those interruptions with our special tool called
              Youtube Ad Blocker. It remove ads from youtube so that you can
              have a better experience and enjoy your favorite content without
              ads. So, no more ads at the beginning, in the middle, or as
              banners on the screen.
            </p>
            <p>
              This adblock free is easy to use. Just install it and turn it on,
              and you won&apos;t see any more ads while watching YouTube videos. This
              adblock 360 is such a helpful extension to block ads and enjoy no
              ads youtube by blocking youtube unwanted ads. Thus, this ad
              remover or ad killer is the best way to keep you focused on your
              favorite content.
            </p>
          </div>
          <div className="right">
            <Image src="/about.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <button>Install Extention</button>
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
