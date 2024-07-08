import React from 'react';

function LandingHeader() {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-light shadow-sm topbar osahan-top-main">
              <a className="navbar-brand" href="index.html">
                <img className="img-fluid logo" src="assets/Landing/images/Landing/Topstore/logo/black.png" alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#"><i className="fas fa-home"></i></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Coupons</span>
                    </a>
                    <div className="dropdown-menu shadow-sm animated--grow-in border-0" aria-labelledby="navbarDropdown">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <a className="dropdown-item" href="coupons.html">Coupons</a>
                        <a className="dropdown-item" href="coupon-details.html">Coupon Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Offers</span>
                    </a>
                    <div className="dropdown-menu shadow-sm animated--grow-in border-0" aria-labelledby="navbarDropdown">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <a className="dropdown-item" href="offers.html">Offers</a>
                        <a className="dropdown-item" href="offer-details.html">Offer Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Stores</span>
                    </a>
                    <div className="dropdown-menu shadow-sm animated--grow-in border-0" aria-labelledby="navbarDropdown">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <a className="dropdown-item" href="stores.html">Stores</a>
                        <a className="dropdown-item" href="store-details.html">Store Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Restaurant</span>
                    </a>
                    <div className="dropdown-menu shadow-sm animated--grow-in border-0" aria-labelledby="navbarDropdown">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <a className="dropdown-item" href="restaurant.html">Restaurant</a>
                        <a className="dropdown-item" href="restaurant-details.html">Restaurant Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Account Pages</span>
                    </a>
                    <div className="dropdown-menu shadow-sm animated--grow-in border-0" aria-labelledby="navbarDropdown">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="dropdown-header">Login Screens</h6>
                        <a className="dropdown-item" href="profile.html">Profile</a>
                        <a className="dropdown-item" href="enter-otp.html">Enter OTP</a>
                        <a className="dropdown-item" href="sign-in.html">Sign In</a>
                        <a className="dropdown-item" href="sign-up.html">Sign up</a>
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Account</h6>
                        <a className="dropdown-item" href="earn.html">Earn</a>
                        <a className="dropdown-item" href="membership.html">Membership</a>
                        <a className="dropdown-item" href="rating.html">Rating</a>
                        <a className="dropdown-item" href="referral.html">Referral</a>
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Company</h6>
                        <a className="dropdown-item" href="not-found.html">404 Not Found</a>
                        <a className="dropdown-item" href="faq.html">FAQ</a>
                        <a className="dropdown-item" href="terms.html">Terms</a>
                        <a className="dropdown-item" href="privacy.html">Privacy</a>
                        <a className="dropdown-item" href="contact.html">Contact</a>
                        <a className="dropdown-item" href="pricing.html">Pricing</a>
                        <a className="dropdown-item" href="maintenance.html">Maintenance</a>
                        <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                        <a className="dropdown-item" href="components.html">Components</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav ml-auto flex-direction-row">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm border-0 animated--grow-in" aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3</span>
                  </a>
                  <div className="dropdown-list dropdown-menu dropdown-menu-right border-0 shadow-sm animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                      Alerts Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500-500" href="#">Show All Alerts</a>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                  <div className="dropdown-list dropdown-menu dropdown-menu-right border-0 shadow-sm animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                      Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="assets/Landing/images/user/4.png" alt="User" />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                        <div className="small text-gray-500-500">Emily Fowler · 58m</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="assets/Landing/images/user/3.png" alt="User" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                        <div className="small text-gray-500-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="assets/Landing/images/user/2.png" alt="User" />
                        <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                        <div className="small text-gray-500-500">Morgan Alvarez · 2d</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="assets/Landing/images/user/1.png" alt="User" />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                        <div className="small text-gray-500-500">Chicken the Dog · 2w</div>
                      </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500-500" href="#">Read More Messages</a>
                  </div>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle pr-0" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                    <img className="img-profile rounded-circle" src="assets/Landing/images/user-icon/user.png" alt="User" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow-sm border-0 animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="profile.html">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-500-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="settings.html">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-500-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-500-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-500-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingHeader;
