import React from "react";
import { Link as L } from "react-router-dom";
import "../styles/Pages.css";
import comcal from "../sources/images/comcal.png";
import eduforall from "../sources/images/eduforall.png";
import eduBanner from "../sources/images/eduBanner.png";
import Popup from "reactjs-popup";
const Home = () => {
  return (
    <div className="mnPg">
      <div className="mnPgHdD">
        <h1 className='mnPgHdH1 HH1'>Need a Website? I can help!</h1>
        <h3 className="mnPgSHdh3 SH3">Technology has the shelf life of a banana.</h3>
        <h5 className="mnPgSSHdh3 SSH3">--Scott McNealy</h5>
      </div>
      <div className="mnBd">
        <div className="mnBdRt">
          <div className="mnBdRtHdrDiv">
            <h2 className="mnBdRtHdr">
              <L to="/portfolio">Check out my work</L>
            </h2>
            <Popup
              trigger={
                <img
                  src={eduforall}
                  alt="education for all "
                  className="ul"
                  className="comCal portfolioPhoto"
                />
              }
              modal
              closeOnDocumentClick
            >
              <div className="content">
                <img
                  src={eduforall}
                  alt="edu for all large"
                  className="modalImg"
                />
              </div>
            </Popup>
            <h3>
              <a
                href="https://www.eduforall.tech/"
                target="_blank"
                className="ul"
              >
                Education For All
              </a>
            </h3>
            <Popup
              trigger={
                <img
                  src={comcal}
                  alt="community calendar"
                  className="comCal portfolioPhoto"
                />
              }
              modal
              closeOnDocumentClick
            >
              <div className="content">
                <img src={comcal} alt="comcalLarge" className="modalImg" />
              </div>
            </Popup>
            <h3>
              <a href="https://www.ourcommunitycal.com/" target="_blank">
                Our Community Calendar
              </a>
            </h3>
          </div>
          <div className="mnBdRtDiv"></div>
        </div>
        <div className="mnBdLt">
          <div className="mnBdLtHdrDiv">
            <h2 className="mnBdLtHdr">
              <L>My Services</L>
            </h2>
            <h3 className="servicesMenu ul">
              <L to="/website">Website Only</L>
            </h3>
            <h3 className="servicesMenu ul">
              <L to="/managed">Managed Website</L>
            </h3>
            <h3 className="servicesMenu ul">
              <L to="/update">Update Website</L>
            </h3>
            <h3 className="servicesMenu ul">
              <L to="/upgrade">Upgrade Website</L>
            </h3>
            <h3 className="servicesMenu ul">
              <a href="https://www.eduforall.tech">
                Classes on Managing your Own Site
              </a>
            </h3>
            <h3>More Services Coming Soon</h3>
            <p>More Information?</p>
            Email:{" "}
            <a href="mailto:info@skylerwebdev.tech" className="ul">
              info@skylerwebdev.tech
            </a>
          </div>
          <div className="mnBdLtDiv"></div>
        </div>
      </div>
      <div className="mnFtr">
        <h1 className="mnFtrHdr">
          Interested in becoming a web developer? Check out{" "}
          <a href="https://eduforall.tech">Education for All</a>
        </h1>
        <a href="https://eduforall.tech" target="_blank">
          <img
            src={eduBanner}
            alt="Education for All Banner"
            className="eduBanner"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
