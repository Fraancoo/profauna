const opts = document.getElementById("opts"),
  data = document.getElementById("data");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

slide(true);

function selectOpt(optId, dataId) {
  for (const o of opts.children) {
    if (optId === o.id) o.className = "active";
    else o.className = "";
  }

  for (const d of data.children) {
    const [opt, cont] = d.children;
    if (dataId === d.id) {
      opt.classList.add("active");
      cont.classList.replace("hiden", "shown");
    } else {
      opt.classList.remove("active");
      cont.classList.replace("shown", "hiden");
    }
  }
}

async function slide(dir) {
  const slider = document.getElementById("slider");

  slider.style.transform = `translateX(-${slider.clientWidth * Number(dir)}px)`;

  // if (dir) slider.style.transform = `translateX(-${slider.clientWidth * 1}px)`;
  // else slider.style.transform = `translateX(-${slider.clientWidth * 0}px)`;

  await delay(5000);
  slide(!dir);
}
