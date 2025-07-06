import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Founding Team</h2>
          <p>
            Our team combines expertise in systems thinking, product development,
            engineering, and applied AI research.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="team-card">
                    <div className="team-card-inner">
                      {/* Front of the card */}
                      <div className="team-card-front">
                        <img src={d.img} alt={d.name} className="team-img" />
                        <div className="team-info">
                          <h4>{d.name}</h4>
                          <p className="team-role">{d.job}</p>
                        </div>
                      </div>
                      {/* Back of the card */}
                      <div className="team-card-back">
                        <div className="team-description">
                          <h4>{d.name}</h4>
                          <p className="team-role-back">{d.job}</p>
                          <p className="team-bio">{d.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
