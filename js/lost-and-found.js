const communicate = document.getElementById("communicate"),
  sectAnimals = document.getElementById("sect_animals");

sectAnimals.tabIndex = "-1";

communicate.addEventListener("click", () => {
  let navLandscape = document.getElementById("nav_landscape");
  console.log(navLandscape);
  navLandscape.className = "hide_nav_landscape";
  sectAnimals.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
});
