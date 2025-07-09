import React from "react";

export const AboutVision = (props) => {
  return (
    <div id="about-vision" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            {props.data ? props.data.paragraph : "At Traize, we are building the future of enterprise knowledge. Our platform empowers organizations to understand their internal capabilities, optimize resource allocation, and foster a culture of continuous learning and collaboration."}
          </p>
        </div>
        
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="about-vision-content">
              {/* Network visualization background */}
              <div className="about-network">
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
              
             
              {/* Core Capabilities and Technology Solutions - Integrated */}
              <div className="row about-services" style={{ marginTop: "40px" }}>
                <div className="col-md-6">
                  <div className="about-service-section">
                    <h4>Core Capabilities</h4>
                    <div className="service-items">
                      {props.data && props.data.Why
                        ? props.data.Why.map((item, i) => (
                            <div key={`why-${i}`} className="about-service-item-flat">
                              <div className="service-icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))
                        : [
                            "Talent Deployment Optimization",
                            "Strategic Skill Development",
                            "Workforce Agility & Resilience"
                          ].map((item, i) => (
                            <div key={`why-${i}`} className="about-service-item-flat">
                              <div className="service-icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-service-section">
                    <h4>Technology Solutions</h4>
                    <div className="service-items">
                      {props.data && props.data.Why2
                        ? props.data.Why2.map((item, i) => (
                            <div key={`why2-${i}`} className="about-service-item-flat">
                              <div className="service-icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))
                        : [
                            "AI-Powered Knowledge Discovery",
                            "Actionable Insights & Dashboards",
                            "Transparent & Trustworthy AI"
                          ].map((item, i) => (
                            <div key={`why2-${i}`} className="about-service-item-flat">
                              <div className="service-icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))
                      }
                    </div>
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
