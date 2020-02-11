import React from "react";
import "../styles/Pages.css";
import { Lingk } from "react-router-dom";
const Freelance = () => {
  return (
    <div className="mnPg">
      <h1>Freelance Services</h1>
      <div className="mnBdFl">
        <div className="mnBdTp">
          <div className="mnBdTpCt">
            <h3 className="HH3">MOBILE FRIENDLY</h3>
            <h3 className="HH3 up10">Websites/Single Page Applications</h3>
            <h5 className="HH5 up10">Non Managed</h5>
            <h4 className="HH4">Starting at $15/hr*</h4>
            <ul>
              <li>Your own domain name (www.YOURNAMEHERE.com)</li>
              <li>Free Hosting on Small Sites</li>
              <li>
                Free webmail for up to 5 users (YOURNAME@YOURNAMEHERE.COM)
              </li>
            </ul>
          </div>
          <div className="mdBdTpCt"></div>
          <div className="mnBdTpRt"></div>
        </div>
        <div className="mnBdCt">
          <div className="mnBdCtLt">
            <h3 className="HH3">MOBILE FRIENDLY</h3>
            <h3 className="HH3 up10">Websites/Single Page Applications</h3>
            <h5 className="HH5 up10">Managed</h5>
            <h4 className="HH4">Starting at $15/hr*</h4>
            <ul>
              <li>Your own domain name (www.YOURNAMEHERE.com)</li>
              <li>Free Hosting on Small Sites</li>
              <li>
                Free webmail for up to 5 users (YOURNAME@YOURNAMEHERE.COM)
              </li>
            </ul>
          </div>
          <div className="mnBdCtCt">
              <h3 className="HH3">Website Updates / Upgrades</h3>
              <h4 className="HH4">Starting at $20/hr</h4>
              <ul>
                  <li>Freshen up an old website</li>
                  <li>
                      Mobile Friendly Website Design
                  </li>
              </ul>
          </div>
          <div className="mnBdCtRt">
              <h3 className="HH3">Mobile Applications</h3>
              <h4 className="HH4">Starting at $35/hr</h4>
              <ul>
                  <li>React Native Application</li>
                  <li>App/Play Store Deployment</li>
              </ul>
          </div>
          
        </div>
    <h1 className="HH1"><a href="mailto:skylerwebdev@skylerwebdev.tech">More Info? Contact: skylerwebdev@skylerwebdev.tech</a></h1>
      </div>
    </div>
  );
};

export default Freelance;
