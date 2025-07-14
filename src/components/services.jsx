import React, { useState, useEffect } from "react";

export const Services = (props) => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  // Detailed content for each vision pillar
  const pillarDetails = {
    "Connected Intelligence": {
      title: "Connecting Intelligence",
      content: "We envision an enterprise where knowledge is no longer siloed or lost, but flows freely and intelligently. Imagine a living, dynamic map of your organization's entire brainpower – where every skill, every project, and every individual's contribution is instantly discoverable and meaningfully linked. This connected ecosystem fosters unprecedented clarity, allowing you to intuitively understand your collective capabilities and unlock insights that were previously hidden, creating a truly unified and informed organization."
    },
    "Adaptive Organizations": {
      title: "Adaptive Organizations",
      content: "Our vision is to empower organizations to be inherently resilient and agile in an ever-changing world. By having real-time, comprehensive understanding of their internal expertise and resources, companies can proactively respond to new challenges and seize emerging opportunities. This means the ability to rapidly reconfigure teams, strategically address skill gaps before they become critical, and pivot with confidence. It's about cultivating a culture where learning and evolution are continuous, ensuring your workforce doesn't just react to the future, but actively shapes it."
    },
    "Limitless Potential": {
      title: "Limitless Potential",
      content: "We believe in unlocking the full, untapped potential within every organization. When knowledge is seamlessly connected and talent can be precisely matched to any initiative, the environment becomes ripe for innovation. Barriers between departments dissolve, cross-functional collaboration becomes organic, and new ideas can flourish unhindered. This enables organizations to transcend traditional limitations, fostering a culture where every individual's unique strengths contribute to breakthroughs and drives unprecedented growth and success."
    }
  };

  const openModal = (pillarName) => {
    setSelectedPillar(pillarName);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedPillar(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedPillar) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedPillar]);

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
                  <div
                    key={`${d.name}-${i}`}
                    className="vision-pillar vision-pillar-clickable"
                    onClick={() => openModal(d.name)}
                  >
                    <div className="pillar-icon">
                      <i className={d.icon}></i>
                    </div>
                    <div className="pillar-content">
                      <h4>{d.name}</h4>
                      <p>{d.text}</p>
                    </div>
                    <div className="pillar-expand-hint">
                      <i className="fa fa-expand"></i>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPillar && (
        <div className="vision-modal-overlay" onClick={closeModal}>
          <div className="vision-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="vision-modal-close" onClick={closeModal}>
              <i className="fa fa-times"></i>
            </button>
            <div className="vision-modal-header">
              <h3>{pillarDetails[selectedPillar]?.title}</h3>
            </div>
            <div className="vision-modal-body">
              <p>{pillarDetails[selectedPillar]?.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
