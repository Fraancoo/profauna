const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const navPortrait = document.getElementById("nav_portrait");

window.onwheel = async (e) => {
  if (e.wheelDeltaY > 0) {
    header.className = "show_nav_anim";
    showNav = true;
  } else {
    header.className = "hide_nav_anim";
    showNav = false;
  }
};

function handleHam(status) {
  const [back, navList] = navPortrait.children;
  const [ham1, ham2, ham3] = hamburger.children;

  ham1.style = status ? "transform: translateY(12px) rotate(45deg);" : "";
  ham2.style = status ? "opacity: 0;" : "";
  ham3.style = status ? "transform: translateY(-12px) rotate(-45deg);" : "";
  back.style = status ? "opacity: 1;" : "opacity: 0;";

  // if (status) {
  //   navList
  // }
}
