import React from "react";
import Squares from "./Squares";
import DotGrid from "./DotGrid";
import Aurora from "./Aurora";
import Beams from "./Beams";
import Orb from "./Orb";

export const Header = (props) => {
  // Switch between background types: 'squares', 'dots', 'aurora', 'beams', or 'orb'
  const backgroundType = 'orb';

  const renderBackground = () => {
    if (backgroundType === 'dots') {
      return (
        <DotGrid
          dotSize={8}
          gap={40}
          baseColor="rgba(255, 255, 255, 0.2)"
          activeColor="rgba(92, 169, 251, 0.8)"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={3}
          className="header-background"
        />
      );
    } else if (backgroundType === 'aurora') {
      return (
        <Aurora
          colorStops={["#1e3c72", "#5ca9fb", "#6372ff"]}
          amplitude={1.2}
          blend={0.7}
          speed={0.8}
        />
      );
    } else if (backgroundType === 'beams') {
      return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
      );
    } else if (backgroundType === 'orb') {
      return (
        <Orb
          hue={200}
          hoverIntensity={0.2}
          rotateOnHover={true}
          forceHoverState={false}
        />
      );
    } else {
      return (
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(92, 169, 251, 0.3)"
          squareSize={60}
          hoverFillColor="rgba(92, 169, 251, 0.1)"
          className="header-squares"
        />
      );
    }
  };

  return (
    <header id="header">
      <div className="intro">
        {renderBackground()}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
