const communicate = document.getElementById("communicate"),
  sectCall = document.getElementById("sect_call");

sectCall.tabIndex = "-1";

communicate.addEventListener("click", () => {
  let navLandscape = document.getElementById("nav_landscape");
  console.log(navLandscape);
  navLandscape.className = "hide_nav_landscape";
  sectCall.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
});
