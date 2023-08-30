const downArrow = document.getElementById("down_arrow");
const sectUs = document.getElementById("sect_us");

sectUs.tabIndex = "-1";

downArrow.addEventListener("click", () => {
  sectUs.focus();
});
