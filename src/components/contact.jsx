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
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    // Clear any previous submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // EmailJS configuration - replace these with your actual values
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Check if EmailJS is properly configured
    if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
      console.warn("EmailJS not configured. Please set up your EmailJS credentials.");
      setSubmitStatus('error');
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
      console.log("Email sent successfully:", result.text);
      setSubmitStatus('success');
      clearState();
    } catch (error) {
      console.error("Failed to send email:", error.text || error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
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
                    <button
                      type="submit"
                      className="btn btn-custom modern-submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-paper-plane"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="alert alert-success text-center" style={{ marginTop: '20px' }}>
                      <i className="fa fa-check-circle"></i>
                      <strong> Success!</strong> Your message has been sent successfully. We'll get back to you soon!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="alert alert-danger text-center" style={{ marginTop: '20px' }}>
                      <i className="fa fa-exclamation-circle"></i>
                      <strong> Error!</strong> There was a problem sending your message. Please try again or contact us directly.
                    </div>
                  )}
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
            &copy; 2025 TRAIZE.ai <br /> All rights reserved.<br />
            <a href="/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
          </p>
        </div>
      </div>
    </div>
  );
};
