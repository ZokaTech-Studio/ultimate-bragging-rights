import React from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import green from "../../assets/bglow.png"

const HomePage = () => {
  
  return (
    <div>
      {/* HOME */}
      <div id="home" className="homepage-content-section homepage-home-content relative">
  <div className="homepage-container">
    <div className="row">
      <div className="col-xs-12 ">
        {/* <iframe
          className="video-page"
          src="https://videosuite-player-wrapper.vercel.app/assets"
          title="Embedded Video"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  </div>
</div>

{/* Green */}
<div id="intro" className="homepage-content-section homepage-green relative">
  <div className="homepage-container">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">
  <h1 className="text-3xl font-bold text-center mb-8 golden-text italic">
      T<span className="mr-2"></span>H<span className="mr-2"></span>I<span className="mr-2"></span>S
      <span className="mr-2"></span> S<span className="mr-2"></span>I<span className="mr-2"></span>T<span className="mr-2"></span>E
      <span className="mr-2"></span> I<span className="mr-2"></span>S<span className="mr-2"></span> B<span className="mr-2"></span>U<span className="mr-2"></span>I<span className="mr-2"></span>L<span className="mr-2"></span>T
      <span className="mr-2"></span> F<span className="mr-2"></span>O<span className="mr-2"></span>R<span className="mr-2"></span> S<span className="mr-2"></span>P<span className="mr-2"></span>O<span className="mr-2"></span>R<span className="mr-2"></span>T<span className="mr-2"></span>S
      <span className="mr-2"></span> F<span className="mr-2"></span>A<span className="mr-2"></span>N<span className="mr-2"></span>S<span className="mr-2"></span> W<span className="mr-2"></span>H<span className="mr-2"></span>O<span className="mr-2"></span> L<span className="mr-2"></span>O<span className="mr-2"></span>V<span className="mr-2"></span>E
    </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
    <div className="space-y-4">
      <p>
        <i className="fa fa-futbol-o mr-2 text-blue-500"></i> Watching Pre-Game shows
      </p>
    <p>
        <i className="fa fa-tv mr-2 text-blue-500"></i> Watching Post-Game shows
      </p>
      <p>
        <i className="fa fa-tv mr-2 text-blue-500"></i> and can't forget the actual games
      </p>
    </div>
    <div className="space-y-4">
   
    <p>
        <i className="fa fa-bar-chart mr-2 text-blue-500"></i> Looking Up Stats
      </p>
      <p>
        <i className="fa fa-share-alt mr-2 text-blue-500"></i> Sharing Stats
      </p>
      <p>
        <i className="fa fa-tv mr-2 text-blue-500"></i> Predicting Stats
      </p>
    </div>
    <div className="space-y-4">
      <p>
        <i className="fa fa-trophy mr-2 text-blue-500"></i> Predicting who is going to win
      </p>
      <p>
        <i className="fa fa-headphones mr-2 text-blue-500"></i> Listening to others' predictions
      </p>
      <p>
        <i className="fa fa-tv mr-2 text-blue-500"></i> Telling Others who is going to win
      </p>
    </div>
    <div className="space-y-4">
      <p>
        <i className="fa fa-microphone mr-2 text-blue-500"></i> Saying 'I Told You So!!'
      </p>
      <p>
        <i className="fa fa-heart mr-2 text-blue-500"></i> and they Love Having
      </p>
      <p>
        <i className="fa fa-tv mr-2 text-blue-500"></i> Ultimate Bragging Rights
      </p>
    </div>
  </div>
</div>
</div>
</div>
{/* About */}
<div id="about" className="homepage-content-section homepage-about relative">
  <div className="homepage-container">
    <div className="row">
      <p className="text-center text-lg-copyright  text-golden-copyright">
        ©2023 Sports Fans Challenges - A Global Sports Network
        <br />
        All Rights Reserved. <span className="text-golden-copyright">Terms of Use</span> / New{" "}
        <span className="text-golden">Privacy Policy</span>
      </p>
      <p className="text-center text-lg-copyright text-golden-copyright">
        We do not sell your personal information
      </p>
    </div>
  </div>
</div>
{/* Info */}
<div id="info" className="homepage-content-section homepage-info relative">
  <div className="homepage-container">
    <div className="row">
      <p>
        Disclaimer: This site is 100% for entertainment purposes only and does not involve real money betting. - Play responsibly.
      </p>
      <p>
        If you or someone you know has a gambling problem, seek confidential support. USA 1-800 Gambler (426-2537) Canada 1-800-463-1554
      </p>
    </div>
</div>

</div>



      
            </div>
  );
};

export default HomePage;
