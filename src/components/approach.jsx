import React from "react";
import CircularGallery from "./CircularGallery";

export const Approach = (props) => {
  const approachItems = [
    { 
      image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center`, 
      text: "Data Analytics" 
    },
    { 
      image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center`, 
      text: "Business Intelligence" 
    },
    { 
      image: `https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=center`, 
      text: "Team Collaboration" 
    },
    { 
      image: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center`, 
      text: "Skill Mapping" 
    },
    { 
      image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center`, 
      text: "Knowledge Graph" 
    },
    { 
      image: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center`, 
      text: "AI-Powered Insights" 
    },
    { 
      image: `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center`, 
      text: "Enterprise Solutions" 
    },
    { 
      image: `https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center`, 
      text: "Performance Analytics" 
    },
    { 
      image: `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center`, 
      text: "Strategic Planning" 
    },
    { 
      image: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&crop=center`, 
      text: "Innovation Hub" 
    },
    { 
      image: `https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=center`, 
      text: "Digital Transformation" 
    },
    { 
      image: `https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=center`, 
      text: "Future of Work" 
    },
  ];

  return (
    <div id="approach" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Approach</h2>
          <p>
            {props.data
              ? props.data.paragraph
              : "Discover how Traize transforms enterprise knowledge through intelligent systems and data-driven insights."}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CircularGallery
              items={approachItems}
              bend={2}
              textColor="#333333"
              borderRadius={0.08}
              font="bold 24px 'Raleway', sans-serif"
              scrollSpeed={1.5}
              scrollEase={0.08}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="approach-item">
              <i className="fa fa-sitemap"></i>
              <h4>Knowledge Architecture</h4>
              <p>Graph-based systems that map organizational knowledge and expertise relationships at scale</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="approach-item">
              <i className="fa fa-users"></i>
              <h4>Team Intelligence</h4>
              <p>Dynamic algorithms for optimal team formation based on contextual expertise and collaboration patterns</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="approach-item">
              <i className="fa fa-rocket"></i>
              <h4>Strategic Optimization</h4>
              <p>Data-driven recommendations for team formation and resource allocation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
