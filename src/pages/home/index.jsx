import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './home.css';
import HeartListicle from '../images/HeartListicle.jpg';
import heart from '../images/heart.jpg';
import heartFead from '../images/heartFead.jpg'
const Home = () => {

  return (<>
    {/* <div style={{ paddingTop: "66px" }}>home</div>
    <img src={HeartListicle} alt="Heart Listicle" style={{ width: '70%', height: '50%' }} /> */}
    {/* <div id="featureBox"></div>
    <div style="position:relative; width:936px; height:0px; overflow:visible; z-index:20;" id="violator"><img src="//greensock.com/_img/HTML5_corner_banner.png" alt="HTML5" style="position:absolute; top:-5px; right:-5px;" /></div>
    <div class="feature" id="featureAnimation">
      <div id="featureBackground" style="pointer-events:none;"></div>
      <div class="featureTextWhite" id="whyGSAP">Why GSAP?</div>
      <div class="featureTextGreen" id="performance">Performance</div>
      <div class="featureTextWhite" id="compatibility">Compatibility</div>
      <div id="browserIcons">
        <img src="//greensock.com/_img/browser-chrome-big.png" width="82" height="80" />
        <img src="//greensock.com/_img/browser-safari-big.png" width="77" height="86" />
        <img src="//greensock.com/_img/browser-ie-big.png" width="82" height="74" />
        <img src="//greensock.com/_img/browser-firefox-big.png" width="82" height="83" />
        <img src="//greensock.com/_img/browser-opera-big.png" width="69" height="75" />
      </div>
      <div class="featureTextMinor" id="fallDown">Other tools fall down in older browsers, but GSAP is remarkably compatible.</div>
      <img id="anythingIcon" src="//greensock.com/_img/animate-anything.png" width="102" height="108" style="position:absolute; top:50px; left:143px; display:block;" />
      <div id="transformBox" style="background-color:#91e600; width:130px; height:130px; position:absolute; top:40px; left:100px;"></div>
      <div class="featureTextWhite" id="transform" style="font-size:34px; width:640px; text-align:left; left:270px; top:80px; line-height:36px;">Scale, rotate & move independently</div>
      <div class="featureTextWhite" id="transformSub" style="font-size:16px; width:420px; text-align:left; left:270px; top:122px; color:#CCCCCC;">(impossible with CSS animations/transitions)</div>
      <div class="featureTextWhite" id="anything" style="width:620px; text-align:left; left:302px; top:63px;">XNJYHQLJYQEW</div>
      <div class="featureTextWhite" id="anythingSub" style="font-size:16px; width:390px; text-align:left; left:300px; top:122px; color:#CCCCCC;">CSS, SVG, canvas libraries, colors, beziers, etc.</div>
      <div class="featureTextWhite" id="control" style="text-align: left; top:64px; left:130px;">Total control</div>
      <div class="featureTextWhite" id="controlSub" style="font-size:16px; text-align:left; left:130px; top:122px; color:#CCCCCC;">pause(), play(), reverse(), or timeScale() any tween or sequence.</div>

      <div class="featureTextWhite" id="GSAP" style="top:60px;">GSAP</div>
      <div class="featureTextMinor" id="newStandardText" style="top:125px; text-align: center; width: 936px;">The new standard for HTML5 animation</div>
      <div id="featureClick" style="position:absolute; width:936px; height:220px;"><img src="//greensock.com/_img/blank.gif" width="936" height="220" /></div>
      <div id="replay" style="text-align:right; position:absolute; left:825px; top:190px; cursor:pointer; color:#999999; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif; font-size:12px; width:100px; visibility:hidden;">replay <img id="replayIcon" src="//greensock.com/_img/codepen/allDevicesBanner/replay.png" width="19" height="19" style="margin-left:2px; vertical-align: middle;" /></div>
      <div id="ctrl_slider"></div> */}
    {/* </div> */}
    <div className="homepage">
      <h1>Welcome to Our Medical Center</h1>
      <div className="services">
        <div className="service">
          <img src={heart} alt="Service 1" />
          <h2>Service 1</h2>
          <p>ברוכים הבאים לאתר המרכז הרפואי שלנו!

אנחנו מזמינים אתכם לגלות את המרכז המקצועי שלנו שמתמחה בשירותי רפואה, הכוללים מאמרים, קורסים ואזור אישי המאפשר לכם לשאול שאלות ולקבל תשובות מקצועיות.

באתר שלנו תוכלו למצוא מגוון מאמרים מקצועיים בתחומים שונים שקשורים לרפואה ולבריאות . המאמרים מספקים מידע מעודכן ומוביל בתחומם ומתעדכנים באופן קבוע כדי לספק לכם את המידע הכי חדש ורלוונטי.

מעבר למאמרים, אנחנו מציעים קורסים בריאותיים במגוון נושאים, המיועדים לשדרג את הידע הרפואי והבריאותי שלכם. הקורסים מועברים על ידי חוקרים מוסמכים ומובילים בתחום, ומתמקדים בתחומים כמו תזונה, תרומת דם, שיטות טיפול חדשות ועוד.

לצד המאמרים והקורסים, תמצאו גם אזור אישי שבו תוכלו לשאול שאלות בנושאים שונים ולקבל תשובות מהמומחים שלנו. אנחנו משתדלים לספק תשובות מקצועיות ומותאמות אישית לכל שאלה שתשלחו.

</p>
        </div>
        <div className="service">
          <img src={HeartListicle} alt="Service 2" />
          <h2>Service 2</h2>
          <p>Description of service 2</p>
        </div>
        <div className="service">
          <img src={heartFead} alt="Service 3" />
          <h2>Service 3</h2>
          <p>Description of service 3</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
