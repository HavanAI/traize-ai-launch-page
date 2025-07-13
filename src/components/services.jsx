import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="vision-section">
      <div className="vision-container">
        <div className="vision-content">
          <div className="vision-text">
            <div className="vision-badge">
              <i className="fa fa-eye"></i>
              <span>Our Vision</span>
            </div>
            <h2 className="vision-title">
              CONNECTING COLLECTIVE
              <span className="highlight"> INTELLIGENCE</span>
              <span className="highlight-secondary"> & POTENTIAL</span>
            </h2>
            <p className="vision-description">
              We envision a future where organizations effortlessly connect their collective intelligence – linking every talent, project, and skill – to become truly intelligent, adaptive, and limitless. Our platform transforms how knowledge flows, enabling unprecedented collaboration and innovation.
            </p>
          </div>

          <div className="vision-pillars-right">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="vision-pillar">
                    <div className="pillar-icon">
                      <i className={d.icon}></i>
                    </div>
                    <div className="pillar-content">
                      <h4>{d.name}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
