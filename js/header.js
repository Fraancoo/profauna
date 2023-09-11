const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const navLandscape = document.getElementById("nav_landscape");
const navPortrait = document.getElementById("nav_portrait");

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

window.onwheel = async (e) => {
  if (e.wheelDeltaY > 0) {
    navLandscape.className = "show_nav_landscape";
    hamburger.className = "show_hamburger";
    showNav = true;
  } else {
    navLandscape.className = "hide_nav_landscape";
    hamburger.className = "hide_hamburger";
    showNav = false;
  }
};

async function handleHam(status) {
  const [back, navList] = navPortrait.children;
  const [ham1, ham2, ham3] = hamburger.children;

  ham1.style = status ? "transform: translateY(11px) rotate(45deg)" : "";
  ham2.style = status ? "opacity: 0" : "";
  ham3.style = status ? "transform: translateY(-11px) rotate(-45deg)" : "";
  back.style = status ? "opacity: 1" : "opacity: 0";
  navList.className = status ? "show_nav" : "hide_nav";

  if (status) {
    navPortrait.style = "";
  } else {
    await timer(300);
    navPortrait.style = "display: none";
  }
}
