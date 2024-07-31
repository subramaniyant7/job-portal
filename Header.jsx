import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <Link to={"/"}>
                    <img src="assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li>
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/job-listing"}>Find a Jobs </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>About </Link>
                        </li>

                        <li>
                          <Link to={"/contact"}>Contact </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    {localStorage.getItem("loggedIn") ? (
                      <Link
                        to={"/sign-up"}
                        onClick={handleLogout}
                        className="btn head-btn1"
                      >
                        Log-out
                      </Link>
                    ) : (
                      <>
                        <Link to={"/sign-up"} className="btn head-btn1">
                          Register{" "}
                        </Link>
                        <Link to={"/login"} className="btn head-btn2">
                          Login{" "}
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
