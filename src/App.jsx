import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { AboutVision } from "./components/AboutVision";
import { Services } from "./components/services";

import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 70, // Account for fixed navbar height
  updateURL: false, // Don't update the URL hash
  easing: 'easeInOutCubic'
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="page-top">
      <Navigation />
      <Header data={landingPageData.Header} />
      {/*<Features data={landingPageData.Features} />*/}
      <AboutVision data={landingPageData.About} />
      {/*<Vision data={landingPageData.Vision} /> */}
      {/*<Approach data={landingPageData.Approach} />*/}
      {<Services data={landingPageData.Services} />}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
