import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiNavigation, FiPhone, FiTwitter, FiYoutube } from "react-icons/fi";
import "./footer.css";
import img1 from "../../images/news-1.jpg";
import img2 from "../../images/news-2.png";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid footer font-small pt-4">
        <div className="top-footer container">
          <div className="row">
            <div className="address col-md-4 d-flex">
              <FiMapPin className="footer-icon mx-4" />
              <p>
                Corporate HQ, <br />
                33rd Floor, Aspect Towers
                <br />
                Business Bay, Dubai,UAE
              </p>
            </div>
            <div className="address col-md-4 d-flex">
              <FiPhone className="footer-icon mx-4" />
              <p>+971 4 4546001 /4546002 </p>
            </div>
            <div className="address col-md-4 d-flex">
              <FiMail className="footer-icon mx-4" />
              <p>ch1@asterdmhealthcare.com</p>
            </div>
          </div>
        </div>
        <div className="text-center container text-md-left my-4">
          <div className="row">
            <div className="col-md-2 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Our Journey</a>
                </li>
                <li>
                  <a href="#!">Our Services</a>
                </li>
                <li>
                  <a href="#!">Gorporate Governance</a>
                </li>
                <li>
                  <a href="#!">Leadership</a>
                </li>
                <li>
                  <a href="#!">Board of Directors</a>
                </li>
                <li>
                  <a href="#!">Quality Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Global Network</a>
                </li>
                <li>
                  <a href="#!">Investors</a>
                </li>
                <li>
                  <a href="#!">Aster Volunteers</a>
                </li>
                <li>
                  <a href="#!">Newsroom</a>
                </li>
                <li>
                  <a href="#!">Health Library</a>
                </li>
                <li>
                  <a href="#!">Resources</a>
                </li>
                <li>
                  <a href="#!">Videos</a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 mt-md-0 mt-3">
              <p className="text-capitalize">Recent News</p>
              <div className="recent-news">
                <div className="news d-flex">
                  <img
                    src={img1}
                    alt="news1"
                    style={{ width: "100px", height: "60px" }}
                  />
                  <div className="news-detail mx-2">
                    <p>Mar 12,2022<br />
                      Dr.Anand Manopam hanaounced with a Doctarate for
                      Philanthopy by Amity University, Dubai.<br />
                      <span>Read more</span></p>
                  </div>
                </div>
                <div className="news my-2 d-flex">
                  <img
                    src={img2}
                    alt="news2"
                    style={{ width: "100px", height: "60px" }}
                  />
                  <div className="news-detail mx-2">
                    <p>Mar 12,2022 <br />
                      Dr.Anand Manopam hanaounced with a Doctarate for
                      Philanthopy by Amity University, Dubai.<br />
                      <span>Read more</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-md-0 mt-3">
              <p className="text-capitalize text-left">Subscribe to Our Newsletter</p>
              <Form className="mx-auto">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control type="email" style={{fontSize:'12px'}} placeholder="Enter your email here"  />
                  </Col>
                </Form.Group>
                <div className="subscribe-icon">
                  <FiNavigation/>
                   </div>
              </Form>
              <span>Stay Informed</span>
              <div className="social-icons d-flex">
                <FiFacebook className="social-link"/>
                <FiTwitter className="social-link"/>
                <FiInstagram className="social-link"/>
                <FiLinkedin className="social-link"/>
                <FiYoutube className="social-link"/>
              </div>
              <div className="footer-copyright">
          © 2021
          <a href="https://bluelogic.ai/">
            {" "}
            Aster DM HealthCare.All rights reserved. Designed and Developed by
            blue/ogic
          </a>
        </div>
            </div>
          </div>
        </div>

       
      </footer>
    </div>
  );
};

export default Footer;
