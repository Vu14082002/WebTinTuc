function header() {
    document.getElementById("header_js").innerHTML=`<section class="gif">
    <img
      src="./Image/anhsilde.gif"
      width="970"
      height="250"
      alt=""
      class="img_ad"
    />
  </section>
  <header style="position: sticky; top: 0">
    <section>
      <nav class="menu">
        <ul>
          <li><a href="./index.html">Time</a></li>
          <li><a href="#">World</a></li>
          <li><a href="#">US Politics</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Health</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Style</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Videos</a></li>
        </ul>
        <ul>
          <li>
            <a href="#footer"><i class="fas fa-bars" id="daux" onclick="doiDau"></i></a>
          </li> 
          <li>
            <a href="#"><i class="far fa-user"></i></a>
          </li>
          <li>
            <a href="#"><i class="far fa-search"></i></a>
          </li>
        </ul>
      </nav>
    </section>
  </header>`  
}
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
header();