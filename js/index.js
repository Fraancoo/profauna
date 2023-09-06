const downArrow = document.getElementById("down_arrow"),
  sectUs = document.getElementById("sect_us"),
  modal = document.getElementById("modal_register"),
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

sectUs.tabIndex = "-1";

downArrow.addEventListener("click", () => {
  let nav = document.getElementById("header");
  nav.className = "hide_nav_anim";
  sectUs.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
});

function goTo(path) {
  window.location.assign(path);
}

function openModal() {
  modal.style = "";
}

async function closeModal() {
  modal.children[0].style = "opacity: 0";
  modal.classList.toggle("close_modal_anim");
  await delay(300);
  modal.style = "display: none";
  modal.classList.toggle("close_modal_anim");
  modal.children[0].style = "opacity: 1";
}

function register() {
  console.log("hola");
}
