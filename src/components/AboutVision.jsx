import React from "react";

export const AboutVision = (props) => {
  return (
    <div id="about-vision" className="about-vision-modern">
      <div className="container">
        {/* Hero Introduction */}
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="hero-badge">
              <i className="fa fa-lightbulb-o"></i>
              <span>Innovation in Enterprise Knowledge</span>
            </div>
            <h2 className="hero-title">
              Transforming How Organizations
              <span className="gradient-text"> Think & Learn</span>
            </h2>
            <p className="hero-description">
              {props.data ? props.data.paragraph : "Traize is crafting the future of enterprise knowledge. Our platform provides organizations with the intelligence to understand internal capabilities, optimize resources, and cultivate continuous learning. We turn complex data into actionable expertise, making your hidden strengths visible and accessible."}
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">360°</div>
                <div className="stat-label">Solution</div>
              </div>
               <div className="stat-item">
    <div className="stat-number">100%</div>
    <div className="stat-label">Knowledge Visibility</div>
  </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">AI Monitoring</div>
              </div>
            </div>
          </div>
          <div className="about-hero-visual">
            <div className="floating-elements">
              <div className="float-element element-1">
                <i className="fa fa-lightbulb-o"></i>
              </div>
              <div className="float-element element-2">
                <i className="fa fa-sitemap"></i>
              </div>
              <div className="float-element element-3">
                <i className="fa fa-line-chart"></i>
              </div>
              <div className="float-element element-4">
                <i className="fa fa-users"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities & Solutions Cards */}
        <div className="capabilities-section">
          <div className="section-header">
            <h3>What Makes Us Different</h3>
            <p>Core capabilities and technology solutions for intelligent organizations</p>
          </div>

          {/* Core Capabilities */}
          <div className="capabilities-grid">
            <div className="capability-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className="fa fa-cogs"></i>
                </div>
                <h4>Core Capabilities</h4>
              </div>
              <div className="cards-grid">
                {(props.data && props.data.Why ? props.data.Why : [
                  "Talent Deployment Optimization",
                  "Strategic Skill Development",
                  "Workforce Agility & Resilience"
                ]).map((item, i) => {
                  const icons = ["fa-users", "fa-graduation-cap", "fa-shield"];
                  const descriptions = [
                    "AI-powered talent matching and project optimization",
                    "Personalized skill development pathways",
                    "Adaptive teams for changing environments"
                  ];
                  return (
                    <div key={`capability-${i}`} className="capability-card">
                      <div className="card-icon">
                        <i className={`fa ${icons[i]}`}></i>
                      </div>
                      <div className="card-content">
                        <h5>{item}</h5>
                        <p>{descriptions[i]}</p>
                      </div>
                      <div className="card-arrow">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technology Solutions */}
            <div className="capability-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className="fa fa-laptop"></i>
                </div>
                <h4>Technology Solutions</h4>
              </div>
              <div className="cards-grid">
                {(props.data && props.data.Why2 ? props.data.Why2 : [
                  "AI-Powered Knowledge Discovery",
                  "Actionable Insights & Dashboards",
                  "Transparent & Trustworthy AI"
                ]).map((item, i) => {
                  const icons = ["fa-search", "fa-line-chart", "fa-eye"];
                  const descriptions = [
                    "Discover hidden patterns in organizational data",
                    "Clear, actionable business intelligence",
                    "Explainable AI and transparent decisions"
                  ];
                  return (
                    <div key={`solution-${i}`} className="capability-card">
                      <div className="card-icon">
                        <i className={`fa ${icons[i]}`}></i>
                      </div>
                      <div className="card-content">
                        <h5>{item}</h5>
                        <p>{descriptions[i]}</p>
                      </div>
                      <div className="card-arrow">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
