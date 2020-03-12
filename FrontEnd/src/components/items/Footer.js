import React, { Component } from "react";
import {
  FaHeart,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small unique-color-dark footer-body">
        {/* style="background-color: #6351ce;" */}
        <div>
          <div className="container footer footer-connect">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-12 col-lg-12 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">
                  Looking to travel around the world with benefits? Log in or
                  Register to enjoy
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                My<b>Tick</b>
              </h6>
              {/* style="width: 60px;" */}
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 white">
              <h6 className="text-uppercase font-weight-bold">
                About My<b>Tick</b>
              </h6>
              {/* style="width: 60px;" */}
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="/page/how-to-book" className="text-white">
                  How To Book
                </a>
              </p>
              <p>
                <a href="/page/contact-us" className="text-white">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="/page/about-us" className="text-white">
                  About Us
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              {/* style="width: 60px;" */}
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="/product/train" className="text-white">
                  Train
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              {/* style="width: 60px;" */}
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <FaHome /> New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope /> info@example.com
              </p>
              <p>
                <FaPhone /> + 01 234 567 88
              </p>
              <p>
                <FaPrint /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 footer-bottom">
          <b>MyTick</b> © 2020 Copyright -{"  "}Make with <FaHeart /> by
          <a href="https://gilang.dev/" className="text-white">
            <b> Gilang Adi S </b>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
