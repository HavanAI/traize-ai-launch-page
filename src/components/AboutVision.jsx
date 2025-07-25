import React, { useState, useEffect } from "react";

export const AboutVision = (props) => {
  const [selectedElement, setSelectedElement] = useState(null);

  // Detailed content for each floating element
  const elementDetails = {
    "Innovation": {
      title: "Innovation at the Core",
      content: "We believe innovation thrives when knowledge flows freely. Our platform transforms how organizations discover and leverage their internal expertise, creating an environment where breakthrough ideas emerge naturally from connected intelligence and collaborative insights."
    },
    "Architecture": {
      title: "Intelligent Architecture",
      content: "Our semantic intelligence engine builds a living map of your organization's knowledge architecture. By understanding the deep relationships between people, projects, and skills, we create a foundation for intelligent decision-making and strategic resource allocation."
    },
    "Analytics": {
      title: "Actionable Analytics",
      content: "Beyond traditional reporting, our analytics provide explainable insights that drive real action. We transform complex organizational data into clear, trustworthy intelligence that empowers leaders to make confident, data-driven decisions about talent and strategy."
    },
    "Collaboration": {
      title: "Enhanced Collaboration",
      content: "True collaboration happens when the right people connect at the right time. Our platform breaks down silos by intelligently matching expertise with opportunities, fostering cross-functional partnerships that drive innovation and organizational growth."
    }
  };

  const openModal = (elementName) => {
    setSelectedElement(elementName);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedElement(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedElement) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedElement]);
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
              <div
                className="float-element element-1 float-element-clickable"
                onClick={() => openModal("Innovation")}
              >
                <i className="fa fa-lightbulb-o"></i>
                <p>Innovation</p>
                <div className="float-expand-hint">
                  <i className="fa fa-expand"></i>
                </div>
              </div>
              <div
                className="float-element element-2 float-element-clickable"
                onClick={() => openModal("Architecture")}
              >
                <i className="fa fa-sitemap"></i>
                <p>Architecture</p>
                <div className="float-expand-hint">
                  <i className="fa fa-expand"></i>
                </div>
              </div>
              <div
                className="float-element element-3 float-element-clickable"
                onClick={() => openModal("Analytics")}
              >
                <i className="fa fa-line-chart"></i>
                <p>Analytics</p>
                <div className="float-expand-hint">
                  <i className="fa fa-expand"></i>
                </div>
              </div>
              <div
                className="float-element element-4 float-element-clickable"
                onClick={() => openModal("Collaboration")}
              >
                <i className="fa fa-users"></i>
                <p>Collaboration</p>
                <div className="float-expand-hint">
                  <i className="fa fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section 
        <div className="differentiators-section">
          <div className="differentiators-container">
            <div className="differentiators-content">
              <div className="differentiators-text">
                <div className="differentiators-badge">
                  <i className="fa fa-star"></i>
                  <span>What Makes Us Different</span>
                </div>
                <h2 className="differentiators-title">
                  BEYOND TRADITIONAL DATA
                  <span className="highlight"> WE BUILD</span>
                  <span className="highlight-secondary"> INTELLIGENT CONNECTIONS</span>
                </h2>
                <p className="differentiators-description">
                  Beyond traditional data, we build intelligent connections that empower your enterprise.
                </p>
              </div>

              <div className="differentiators-pillars-right">
                <div className="differentiator-pillar">
                  <div className="pillar-icon">
                    <i className="fa fa-sitemap"></i>
                  </div>
                  <div className="pillar-content">
                    <h4>Semantic Intelligence Engine</h4>
                    <p>Our unique AI-powered graph technology maps your organization's talent, projects, and skills with unprecedented precision, uncovering hidden relationships and expertise at scale.</p>
                  </div>
                </div>

                <div className="differentiator-pillar">
                  <div className="pillar-icon">
                    <i className="fa fa-lightbulb-o"></i>
                  </div>
                  <div className="pillar-content">
                    <h4>Actionable & Explainable Insights</h4>
                    <p>Move beyond raw data. Our intuitive dashboards deliver clear, actionable intelligence, coupled with transparent AI explanations for truly trustworthy, data-driven decisions.</p>
                  </div>
                </div>

                <div className="differentiator-pillar">
                  <div className="pillar-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <div className="pillar-content">
                    <h4>Holistic Talent & Strategic Optimization</h4>
                    <p>Gain a 360° view to instantly match talent to projects, identify strategic skill gaps, and cultivate an adaptive workforce, driving unparalleled efficiency and future readiness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Modal */}
      {selectedElement && (
        <div className="vision-modal-overlay" onClick={closeModal}>
          <div className="vision-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="vision-modal-close" onClick={closeModal}>
              <i className="fa fa-times"></i>
            </button>
            <div className="vision-modal-header">
              <h3>{elementDetails[selectedElement]?.title}</h3>
            </div>
            <div className="vision-modal-body">
              <p>{elementDetails[selectedElement]?.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
