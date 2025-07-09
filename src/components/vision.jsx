import React from "react";

export const Vision = (props) => {
  return (
    <div id="vision" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Vision</h2>
        </div>
        
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="vision-content">
              {/* Network visualization background */}
              <div className="vision-network">
                <div className="network-node node-1"></div>
                <div className="network-node node-2"></div>
                <div className="network-node node-3"></div>
                <div className="network-node node-4"></div>
                <div className="network-node node-5"></div>
                <div className="network-node node-6"></div>
                <div className="network-connection connection-1"></div>
                <div className="network-connection connection-2"></div>
                <div className="network-connection connection-3"></div>
                <div className="network-connection connection-4"></div>
                <div className="network-connection connection-5"></div>
              </div>
              
              {/* Main vision statement */}
              <div className="vision-statement">
                <div className="vision-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                <h3 className="vision-text">
                  {props.data ? props.data.statement : "We envision a future where organizations effortlessly connect their collective intelligence – linking every talent, project, and skill – to become truly intelligent, adaptive, and limitless."}
                </h3>
              </div>
              
              {/* Supporting elements */}
              <div className="row vision-pillars" style={{ marginTop: "60px" }}>
                <div className="col-md-4">
                  <div className="vision-pillar">
                    <div className="pillar-icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                    <h4>Connected Intelligence</h4>
                    <p>Every piece of knowledge, every skill, and every insight seamlessly linked across your organization.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vision-pillar">
                    <div className="pillar-icon">
                      <i className="fa fa-refresh"></i>
                    </div>
                    <h4>Adaptive Organizations</h4>
                    <p>Companies that learn, evolve, and respond to change with the agility of their collective expertise.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vision-pillar">
                    <div className="pillar-icon">
                      <i className="fa fa-rocket"></i>
                    </div>
                    <h4>Limitless Potential</h4>
                    <p>Organizations that transcend traditional boundaries to achieve unprecedented innovation and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
