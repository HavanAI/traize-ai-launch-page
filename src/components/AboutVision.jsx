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
              {props.data ? props.data.paragraph : "At Traize, we're building the future of enterprise knowledge. Our intelligent platform empowers organizations to understand their internal capabilities, optimize resource allocation, and foster a culture of continuous learning and collaboration."}
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster Insights</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
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
            <p>Discover the core capabilities and cutting-edge technology that power intelligent organizations</p>
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
                  const icons = ["fa-users-cog", "fa-graduation-cap", "fa-shield-alt"];
                  const descriptions = [
                    "Intelligently match talent to projects with AI-powered optimization",
                    "Build future-ready skills through personalized development pathways",
                    "Create adaptive teams that thrive in changing environments"
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
                  <i className="fa fa-microchip"></i>
                </div>
                <h4>Technology Solutions</h4>
              </div>
              <div className="cards-grid">
                {(props.data && props.data.Why2 ? props.data.Why2 : [
                  "AI-Powered Knowledge Discovery",
                  "Actionable Insights & Dashboards",
                  "Transparent & Trustworthy AI"
                ]).map((item, i) => {
                  const icons = ["fa-brain", "fa-chart-pie", "fa-eye"];
                  const descriptions = [
                    "Uncover hidden patterns and insights from your organizational data",
                    "Transform complex data into clear, actionable business intelligence",
                    "Build trust with explainable AI and transparent decision-making"
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
