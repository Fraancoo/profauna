const header = document.getElementById("header");

window.onwheel = async (e) => {
  if (e.wheelDeltaY > 0) {
    header.className = "show_nav_anim";
    showNav = true;
  } else {
    header.className = "hide_nav_anim";
    showNav = false;
  }
};
