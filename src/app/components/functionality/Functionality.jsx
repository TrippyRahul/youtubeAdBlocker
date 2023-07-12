import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "IT BLOCKS ADS FOR FREE",
    desc: "Most adblocker Chrome browser extensions handles only pop-ups, banners, and display ads on youtube, but with the help of updated version called the adblocker for youtube, you can block all types of ads.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "BLOCKS TRACKERS WITH THIS EXTENSION",
    desc: "Browse the internet without being tracked by using adblock which prevents trackers from following you and collecting information about your browsing habits. In adblock extension you can also protect your data and safety download your content.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "STAY SAFE FROM MALWARE RISKS BY USING THE EXTENTION",
    desc: "Browse the internet without being tracked by using adblock which prevents trackers from following you and collecting information about your browsing habits. In adblock extension you can also protect your data and safety download your content.",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      <Image src="/func-bg.svg" width={2300} height={1045.26} className="bg"/>
      <div className="container">
        <h2>AD BLOCK CHROME HAS SO MANY FUNCTIONALITY</h2>

        <div className="cards">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Functionality;
