import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("loggedIn", true);
    navigate("/job-listing");
  };
  return (
    <div>
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
          style={{ backgroundImage: `url("/assets/img/hero/about.jpg")` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Login</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Login</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                id="contactForm"
                novalidate="novalidate"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="password"
                        id="password"
                        type="password"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your password'"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="button button-contactForm boxed-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
