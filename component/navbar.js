let navbar=()=>{
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title><link rel="stylesheet" href="../styles/navbar.css">
      <script src="../script/navbar.js" type="text/javascript"></script>
  </head>
  <body>
      <div id="navbar">
      <div class="navbar-left" id="navbar div">
          <div>
      <img src="https://wassets.hscicdn.com/static/images/logo.png"/>
      </div>
      <div>
      <div class="dropdown">
      <button class="dropbtn"><a href="../fp04_437/LiveScorcesHome.html" style="color:white;text-decoration:none;">Live Scores</a> 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Live Scores Home</a>
        <a href="#">Week view</a>
        <a href="#">Month view</a>
        <a href="#">Season view</a>
        <a href="#">International calendar</a>
        <a href="#">Desktop Scoreboard</a>
      </div>
    </div> 
    <div class="dropdown">
      <button class="dropbtn2">Series
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content2">
        <div>
        <a href="../fp04_437/series.html">West Indies v India</a>
        <a href="#">England v South Africa</a>
        <a href="#">Ireland v New Zealand</a>
        <a href="#">Scotland v New Zealand</a>
        <a href="#">SA-W in England</a>
        <a href="#">County Div1</a>
        <a href="#">Test Championship</a>
        <a href="#">CWC Super League</a>
        <a href="#">-Archives-</a>
    </div>
    <div>
         <a href="#">TNPL 2022</a>
        <a href="#">Sri Lanka v Pakistan</a>
        <a href="#">Zimbabwe v Bangladesh</a>
        <a href="#">IRE Tri-Series(Women)</a>
        <a href="#">CWG Games(Cricket)</a>
        <a href="#">County Div2 </a>
        <a href="#">Women's Championship</a>
        <a href="#">-Future series-</a>
        
    </div>
  
      </div>
    </div>
    <div class="dropdown" id="teamshref">
        <button class="dropbtn1" ><a href="../fw19_0976/component/teamdin.html" style="color:white;text-decoration:none;">Teams</a>
          <i class="fa fa-caret-down"></i></a>
        </button>
        <div class="dropdown-content2">
            <div>
          <a href="#">Australia</a>
          <a href="#">Bangladesh</a>
          <a href="#">England</a>
          <a hreF="#">India</a>
          <a href="#">New Zealand</a>
          <a href="#">Pakistan</a>
          <a href="#">South Africa</a>
          <a href="#">Sri Lanka</a>
          <a href="#">West Indies</a>
          <a href="#">Zimbabwe</a>
        </div>
        <div>
            <a href="#">Afganistan</a>
            <a href="#">Ireland</a>
            <a href="#">Namibia</a>
            <a href="#">Nepal</a>
            <a href="#">Netherlands</a>
            <a href="#">Oman</a>
            <a href="#">PNG</a>
            <a href="#">Scotland</a>
            <a href="#">UAE</a>
            <a href="#">USA</a>
        </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn1"><a href="../newsnew.html" style="color:white;text-decoration:none;">News</a>
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content1">
          <a href="#">News Home</a>
          <a href="#">Covid-19</a>
          <a href="#">Ball-tampering</a>
          <a href="#">Technology in cricket</a>
          <a href="#">Racism</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn1"><a href="../fw18_0494/Featurs/index.html" style="color:white;text-decoration:none;">Features</a> 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content1">
          <a href="#">Feature Home</a>
          <a href="#">Writers</a>
          <a href="#">Photo galleries</a>
          <a href="#">The Cricket Monthly</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn2"><a href="../fw18_0494/Video/video.html" style="color:white;text-decoration:none;">Videos</a> 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content2">
            <div>
          <a href="../fw18_0494/news_detail/detail.html">Videos Home</a>
          <a href="#">T20 Time Out Hindi</a>
          <a href="#">Math Day</a>
          <a href="#">Fantasy pick</a>
          <a href="#">Run Order</a>
          <a href="#">25 Question</a>
          <a href="#">Interviews</a>
          <a href="#">Press Conference</a>
        </div>
        <div>
            <a href="#">T20 Time Out</a>
            <a href="#">Hindi Videos</a>
            <a href="#">Haan Ya Naa</a>
            <a href="#">Polite Enquiries</a>
            <a href="#">Newsroom</a>
            <a href="#">News and Analysis</a>
            <a href="#">Features</a>
            <a href="#">YouTube</a>
        </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn2"><a href="../fw18_1217/index.html" style="color:white;text-decoration:none;">Stats</a>
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content2">
            <div>
          <a href="#">Stats home</a>
          <a href="#">IPL 2022</a>
          <a href="#">SuperStats</a>
          <a href="#">All records</a>
          <a href="#">Grounds</a>
        </div>
        <div>
            <a href="#">AskCrickinfo</a>
            <a href="#">Statsguru</a>
            <a href="#">2022 records</a>
            <a href="#">Players</a>
            <a href="#">Rankings</a>
        </div>
      </div>
  </div>
</div>
<div class="navbar-right">
   <div class="fantasy" ><a href="../day 3/index.html"  style="color:white;text-decoration:none;"><img  src="https://wassets.hscicdn.com/static/images/fantasy-home.png"/><p>Fantasy</p></a></div>
            <div class="dropdown">
          <button class="dropbtn3">Edition IN
          </button>
          <div class="dropdown-content3">
              <div>
            <a href="#">Africa</a>
            <a href="#">Bangladesh</a>
            <a href="#">India-Hindi</a>
            <a href="#">Pakistan</a>
            <a href="#">United Kingdom</a>
            <a href="#">Global</a>
          </div>
          <div>
              <a href="#">Australia</a>
              <a href="#">India</a>
              <a href="#">New Zealand</a>
              <a href="#">Sri Lanka</a>
              <a href="#">United States</a>
          </div>
          </div>

        </div>
         <div id="night"><a><img src="../../images/moon.JPG" />
          </a></div>
         <div><a><p>कA</p></a></div>
         <div><a><img src="../../images/grid.JPG" />
          </a></div>
         <div ><a><img src="../../images/magnifying.JPG" /></a></div>
      </div>
  </div>
  </div>
  </body>
  </html>
 `
}
export default navbar;