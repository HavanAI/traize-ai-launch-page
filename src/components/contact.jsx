import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>
              Interested in collaborating, partnering, or learning more about our research?
              We'd love to hear from potential collaborators and partners.
            </p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="contact-form-container">
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-wrapper">
                          <i className="fa fa-user input-icon"></i>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control modern-input"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-wrapper">
                          <i className="fa fa-envelope input-icon"></i>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control modern-input"
                            placeholder="Your Email"
                            required
                            value={email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="textarea-wrapper">
                      <i className="fa fa-comment textarea-icon"></i>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control modern-textarea"
                        rows="6"
                        placeholder="Tell us about your project, collaboration ideas, or questions..."
                        required
                        value={message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-custom modern-submit">
                      <i className="fa fa-paper-plane"></i>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row contact-info-row">
            <div className="col-md-4">
              <div className="contact-info-card">
                <div className="contact-item">
                  <div className="contact-item-header">
                    <i className="fa fa-map-marker"></i>
                    <p className="contact-item-label">Address</p>
                  </div>
                  <p className="contact-item-value">
                    {props.data ? props.data.address : "Munich, Germany"}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info-card">
                <div className="contact-item">
                  <div className="contact-item-header">
                    <i className="fa fa-phone"></i>
                    <p className="contact-item-label">Phone</p>
                  </div>
                  <p className="contact-item-value">
                    {props.data ? props.data.phone : "Contact via email"}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info-card">
                <div className="contact-item">
                  <div className="contact-item-header">
                    <i className="fa fa-envelope-o"></i>
                    <p className="contact-item-label">Email</p>
                  </div>
                  <p className="contact-item-value">
                    {props.data ? props.data.email : "info@traize.com"}
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 TRAIZE.ai <br /> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
