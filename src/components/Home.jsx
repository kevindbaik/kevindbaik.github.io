import React from "react";
import Typewriter from "typewriter-effect";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div id='homebg-color' className="hero-mask opacity-6 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax backgroundimage"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-2">Hello,</p>
                <h2 className="text-16 fw-600 text-white mb-2">
                  I'm Kevin Baik
                  {/* <Typewriter
                    options={{
                      strings: [
                        "I'm Kevin Baik.",
                        "I'm a Software Engineer.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100
                    }}
                  /> */}
                </h2>
                <h3 className="text-8 text-light"> A Full Stack Developer</h3>
                <p className="text-5 text-light mb-4">
                  based in Los Angeles, California.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
