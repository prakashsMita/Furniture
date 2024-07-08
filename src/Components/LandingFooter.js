import React from "react";

function LandingFooter() {
  return (
    <>
      <section className="footer section-padding">
        <div className="container">
          <div className="row py-lg-4">
            <div className="col-xl-2 col-sm-6">
              <div className="footer-brand">
                <img
                  className="img-fluid logo w-100"
                  src="assets/Landing/images/Landing/Topstore/logo/black.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-xl-2 col-sm-6">
              <h6 className="text-gray-900">PRODUCTS</h6>
              <ul>
                <li><a href="#">Page Builder</a></li>
                <li><a href="#">UI Kit</a></li>
                <li><a href="#">Styleguide</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-6">
              <h6 className="text-gray-900">SERVICES</h6>
              <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Pagebuilder</a></li>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-6">
              <h6 className="text-gray-900">CONNECT</h6>
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Page Builder</a></li>
                <li><a href="#">UI Kit</a></li>
                <li><a href="#">Styleguide</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="col-xl-4 col-sm-6">
              <h6 className="text-gray-900">Subscribe to our Newsletter</h6>
              <form className="form-inline newsletter-form mb-1">
                <input
                  type="text"
                  className="form-control mr-sm-2"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
              <small>
                <a href="#">
                  Register now to get updates on{" "}
                  <span className="text-info">Offers and Coupons</span>
                </a>
              </small>
              <div className="app mt-4 pt-2">
                <h6 className="text-gray-900">DOWNLOAD APP</h6>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/Landing/images/google.png"
                    alt="Google Play"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/Landing/images/apple.png"
                    alt="Apple Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 bg-white osahan-copyright">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-between">
                <p className="m-0 text-secondary">
                  Copyright © Your Website 2020
                </p>
                <p className="m-0">
                  <a href="#" className="text-secondary">
                    About Us
                  </a>
                  &nbsp; · &nbsp;
                  <a href="#" className="text-secondary">
                    Privacy Policy
                  </a>
                  &nbsp; · &nbsp;
                  <a href="#" className="text-secondary">
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingFooter;
