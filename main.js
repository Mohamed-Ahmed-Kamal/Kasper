let open = document.getElementById("open");
let close = document.getElementById("close");
let sidbar = document.querySelector(" header nav ul");

open.onclick = function () {
  sidbar.style.top = "100%";
  open.style.display = "none";
  close.style.display = "block";
};
close.onclick = function () {
  sidbar.style.top = "-1000%";
  open.style.display = "block";
  close.style.display = "none";
};
