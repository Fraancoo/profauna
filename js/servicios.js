const opts = document.getElementById("opts"),
  data = document.getElementById("data");

function selectOpt(optId, dataId) {
  for (const o of opts.children) {
    if (optId === o.id) o.className = "active";
    else o.className = "";
  }

  for (const d of data.children) {
    if (dataId === d.id) d.className = "shown";
    else d.className = "hiden";
  }
}
