const divCv = document.getElementById("div_cv");
const inputFile = document.getElementById("cv_input_file");
const fileName = document.getElementById("file_name");

function selectFile() {
  inputFile.click();
}

function uploadFile() {
  const file = inputFile.files[0];
  if (
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const [p, div] = divCv.children;
    p.style = "display: none";
    div.style = "";
    fileName.innerText = file.name;
  }
}
