import React from 'react'
import '../styles/Pages.css'
import { Link } from 'react-router-dom'
const DevBurnout = () => {
    return (
        <div>
                    <div className="pageMain">
            <div className="pageTop">
                <div className="ptLt"></div>
                <div className="ptCt"><h1 className="ctrHdr">Education for All</h1></div>
                <div className="ptRt"></div>
            </div>
            <div className="pageMid">
                <div className="pmLt">
                    <h3>FIRST CLASS STARTS 3/25/2020</h3>
                    <h3>Day and Evening Classes Avaliable</h3>
                    <p>Day Classes start at 8am CST and end at 5pm CST</p>
                    <p>Evening Classes Start at 5pm CST and end at 10pm CST and will be 5 weeks</p>
                    
                    <h4>Introductory Pricing for the first 50 students</h4>
                    <p>$100 to Reserve a Seat</p>
                    <p>$50 before the beginning of each instruction week</p>
                    <p>A percentage of your salary not to exceed 10% Based on what you believe we are worth.</p>
                    {/* <Link to='/apply'>Apply Today</Link>
                     */}
                     <h3>More Information?</h3><h3> Email: information@eduforall.tech</h3>
                    <h2>This program includes 80+ Hours of live instructor based training.</h2>
                    <h4 className='homep'>What you will learn in the 4 week Developer Burnout</h4>
                    <ul>
<li>Git</li>
<li>HTML</li>
<li>PHP</li>
<li>JavaScript</li>
<li>CSS, LESS, SASS</li>
<li>Node.JS</li>
<li>Apollo, GraphQL</li>
<li>SQL</li>
<li>React</li>
<li>Redux</li>
<li>AWS Deployments</li>
<li>AWS S3 Buckets</li>
<li>And More</li>
                    </ul>
                    <h4 className='homep'>Here is the bottom line and what a lot of coding bootcamps fail to mention. After you complete the course you will have 100+ hours of "hands on" coding experince, you will have a professional porfolio with several peices of your own work, you will be "fluent" in several different coding languages. Unfortunatly, this itself is still not enough to get a job as a professional developer. EFA is dedicated to helping finding you a job and the only way to do that is to get hours under your belt. Therefore, after you graduate from any of our courses* you will be invited to continue to work on any of our ongoing projects as an intern developer, some intern positions may be paid whereas others may not. Lastly, as with any of our courses you will have access to all course materials EFA has to offer*</h4>
                    <p>*Offer not valid on single courses and all monies owed must be paid in full</p>
                </div>
                <div className="pmRt"></div>
            </div>
            <div className="pageBot">
                <div className="pbLt"></div>
                <div className="pbCt">
                                            <h2>Regular Pricing $15000 or</h2>
                                            <ul><li>$400 Down</li>
                                            <li>$400 Per Week during the course</li>
                                            <li>10% of your income during your first 2 years as a developer not to exceed $15,000</li></ul></div>
                <div className="pbRt"></div>
            </div>
        </div>
        </div>
    )
}

export default DevBurnout
