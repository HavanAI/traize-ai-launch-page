import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{"background": "none"}}>
        <div className="section-title">
          <h2>Our Vision</h2>
          <p>
            We envision a future where organizations effortlessly connect their collective intelligence – linking every talent, project, and skill – to become truly intelligent, adaptive, and limitless
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 className="service-title">{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
