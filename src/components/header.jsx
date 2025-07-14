import React, { useEffect } from "react";
import Squares from "./Squares";
import DotGrid from "./DotGrid";
import Aurora from "./Aurora";
import Beams from "./Beams";
import Orb from "./Orb";
import Waves from "./Waves";

export const Header = (props) => {
  // Switch between background types: 'squares', 'dots', 'aurora', 'beams', 'orb', or 'waves'
  const backgroundType = 'waves';

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('menu');
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderBackground = () => {
    if (backgroundType === 'dots') {
      return (
        <DotGrid
          dotSize={8}
          gap={40}
          baseColor="rgba(255, 255, 255, 0.9)"
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
          colorStops={["#f2f5ff", "#d9e8fc", "#b3d1f7"]}
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
    } else if (backgroundType === 'waves') {
      return (
        <Waves
          lineColor="rgba(211, 220, 230, 0.94)"
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={32}
          waveAmpY={16}
          xGap={10}
          yGap={32}
          friction={0.925}
          tension={0.005}
          maxCursorMove={100}
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
                <div className="top-title">Intelligent Solutions for Enterprise Knowledge</div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="button-container">
                  <a
                    href="#contact"
                    className="btn-contact page-scroll"
                  >
                    Get in touch
                  </a>
                  <a
                    href="#services"
                    className="btn-explore page-scroll"
                  >
                    Our Vision
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
