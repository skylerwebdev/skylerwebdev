import React from "react";
import Popup from "reactjs-popup";
import comcal from "../sources/images/comcal.png";
import eduforall from "../sources/images/eduforall.png";
const Portfolio = () => {
  return (
    <div className="mnPg">
      <div className="mnPgHdDPf">
        <h1 className="mnPgHdH1 HH1">Skyler Dowdy</h1>
        <h3 className="mnPgSHdh3 SH3">Personal Portfolio</h3>
      </div>
      <div className="mnBdPf">
        <div className="techBox">
            <div className="techBoxHdr">
            <h4 className='alignLeft'>I am comfortable programming in various environments and languages. I believe designing "mobile first," using astheticly pleasing designs, testing applications are key factors in todays websites.</h4>
            </div>
            <div className="techBoxBody">
          <div className="techBoxLt">
            <ul>
                <li>HTML</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              <li>CSS/SCSS/LESS</li>
            </ul>
          </div>
          <div className="techBoxCt">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Apollo</li>
              <li>GraphQL</li>
              <li>Java Spring</li>
            </ul>
          </div>
          <div className="techBoxRt">
            <ul>
                <li>SQL/NOSQL</li>
                <li>Various Adobe Products/GIMP</li>
                <li>Windows, Mac, and Linux Environments</li>
                <li>AWS, Heroku, and Netlify Deployments</li>
                <li>AWS S3 Buckets and Various Other AWS Services</li>
                <li></li>
            </ul>
            </div>
          </div>
        </div>
          <h4></h4>
        <div className="projBox">
          <div className="projBoxLt">
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
          </div>
          <div className="projBoxRt">
            <h3>
              <a
                href="https://www.eduforall.tech/"
                target="_blank"
                className="ul"
              >
                Education For All
              </a>{" "}
              deployed on netlify
            </h3>
            <h5>
              This is a personal project that I started on Feb 2, 2020. My goal
              is to offer affordable education services to all age ranges in a
              variety of subjects.
            </h5>
            <h3>Technologies / Frameworks Used</h3>
            <ul>
              <li className="SL">React</li>
              <li className="SL">CSS</li>
            </ul>
            <h3>Future Implementation</h3>
            <ul>
              <li className="SL">Major Style Updates</li>
              <li className="SL">Java Spring REST Api</li>
              <li className="SL">User Authentication</li>
              <li className="SL">AWS Deployment</li>
            </ul>
            <h3>
              <a href="mailto:info@eduforall.tech">
                Email: info@eduforall.tech for more information
              </a>
            </h3>
          </div>
        </div>
        <div className="projBox">
          <div className="projBoxLt">
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
          </div>
          <div className="projBoxRt">
            {" "}
            <h3>
              <a href="https://www.ourcommunitycal.com/" target="_blank">
                Our Community Calendar
              </a>{" "}
              deployed on netlify and heroku
            </h3>
            <h5>
              My role in this project was to oversee the development team which
              consisted of 1 UX Developer, 1 iOS developer, 3 Android
              Developers, and 6 Full Stack Web Developers. Our Community
              Calendar was started on Dec 2, 2020.{" "}
            </h5>
            <h3>Main Technologies / Frameworks Used</h3>
            <ul>
              <li className="SL">React</li>
              <li className="SL">Kotlin</li>
              <li className="SL">Swift</li>
              <li className="SL">Postgres</li>
              <li className="SL">GraphQL</li>
            </ul>
            <h3>GitHub Links</h3>
            <ul>
              <li className="SL">
                <a href="https://github.com/Lambda-School-Labs/community-calendar-fe">
                  Front End
                </a>
              </li>
              <li className="SL">
                <a href="https://github.com/Lambda-School-Labs/community-calendar-be">
                  Back End
                </a>
              </li>
              <li className="SL">
                <a href="https://github.com/Lambda-School-Labs/community-calendar-android">
                  Android
                </a>
              </li>
              <li className="SL">
                <a href="https://github.com/Lambda-School-Labs/community-calendar-ios">
                  iOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="projBox">
          <div className="projBoxLt"></div>
          <div className="projBoxRt"></div>
        </div>
        <div className="projBox">
          <div className="projBoxLt"></div>
          <div className="projBoxRt"></div>
        </div>
        <div className="projBox">
          <div className="projBoxLt"></div>
          <div className="projBoxRt"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
