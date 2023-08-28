const downArrow = document.getElementById("down_arrow");
const divUs = document.getElementById("div_us");

divUs.tabIndex = "-1";

downArrow.addEventListener("click", () => {
  divUs.focus();
});
