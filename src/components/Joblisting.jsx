import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jobList } from "../data";

export default function Joblisting() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/login");
    }
  }, []);
  return (
    <main>
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
                  <h2>Get your job</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion">
                      {" "}
                      <svg width="20px" height="12px">
                        <path
                          fill-rule="evenodd"
                          fill="rgb(27, 207, 107)"
                          d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                        />
                      </svg>
                    </div>
                    <h4>Filter Jobs</h4>
                  </div>
                </div>
              </div>
              <div className="job-category-listing mb-50">
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Category</h4>
                  </div>
                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">All Category</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>

                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Job Type</h4>
                    </div>
                    <label className="container">
                      Full Time
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Part Time
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Remote
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Freelance
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Location</h4>
                  </div>

                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">Anywhere</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>

                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      1-2 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2-3 Years
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3-6 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      6-more..
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="single-listing">
                  <div className="select-Categories pb-50">
                    <div className="small-section-tittle2">
                      <h4>Posted Within</h4>
                    </div>
                    <label className="container">
                      Any
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Today
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 2 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 3 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 5 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 10 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="single-listing">
                  <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                    <div className="small-section-tittle2">
                      <h4>Filter Jobs</h4>
                    </div>
                    <div className="widgets_inner">
                      <div className="range_item">
                        <input
                          type="text"
                          className="js-range-slider"
                          value=""
                        />
                        <div className="d-flex align-items-center">
                          <div className="price_text">
                            <p>Price :</p>
                          </div>
                          <div className="price_value d-flex justify-content-center">
                            <input
                              type="text"
                              className="js-input-from"
                              id="amount"
                              readonly
                            />
                            <span>to</span>
                            <input
                              type="text"
                              className="js-input-to"
                              id="amount"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9 col-md-8">
              <section className="featured-job-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>39, 782 Jobs found</span>

                        <div className="select-job-items">
                          <span>Sort by</span>
                          <select name="select">
                            <option value="">None</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {jobList.map((job, index) => (
                    <div className="single-job-items mb-30" key={index}>
                      <div className="job-items">
                        <div className="company-img">
                          <Link to={"/job-details/"+job.id}>
                            <img src={job.logo} alt="" />
                          </Link>
                        </div>
                        <div className="job-tittle job-tittle2">
                          <Link to={"/job-details/"+job.id}>
                            <h4>{job.name}</h4>
                          </Link>
                          <ul>
                            <li>{job.agency}</li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>
                              {job.location}
                            </li>
                            <li>{job.salaryRange}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="items-link items-link2 f-right">
                        <Link to={"/job-details/"+job.id}>Full Time</Link>
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination-area pb-115 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
