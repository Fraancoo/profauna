const opts = document.getElementById("opts"),
  data = document.getElementById("data");

function selectOpt(optId, dataId) {
  for (const o of opts.children) {
    if (optId === o.id) o.className = "active";
    else o.className = "";
  }

  for (const d of data.children) {
    const [opt, cont] = d.children;
    if (dataId === d.id) {
      cont.className = "shown";
    } else {
      cont.className = "hiden";
    }
  }
}
