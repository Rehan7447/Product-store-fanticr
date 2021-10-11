//Front End

function active() {
  var element1 = document.getElementById("box1");
  var element2 = document.getElementById("box2");

  if (element1.classList.contains("active")) {
    element1.classList.remove("active");
  } else {
    element1.classList.add("active");
    element2.classList.remove("active");
  }
}

function active2() {
  var element1 = document.getElementById("box1");
  var element2 = document.getElementById("box2");

  if (element2.classList.contains("active")) {
    element2.classList.remove("active");
  } else {
    element2.classList.add("active");
    element1.classList.remove("active");
  }
}

function active3() {
  var element1 = document.getElementById("logo1");
  var element2 = document.getElementById("logo2");
  var element3 = document.getElementById("logo3");

  if (element1.classList.contains("active")) {
    element1.classList.remove("active");
  } else {
    element1.classList.add("active");
    element2.classList.remove("active");
    element3.classList.remove("active");
  }
}

function active4() {
  var element1 = document.getElementById("logo1");
  var element2 = document.getElementById("logo2");
  var element3 = document.getElementById("logo3");

  if (element2.classList.contains("active")) {
    element2.classList.remove("active");
  } else {
    element2.classList.add("active");
    element1.classList.remove("active");
    element3.classList.remove("active");
  }
}

function active5() {
  var element1 = document.getElementById("logo1");
  var element2 = document.getElementById("logo2");
  var element3 = document.getElementById("logo3");

  if (element3.classList.contains("active")) {
    element3.classList.remove("active");
  } else {
    element3.classList.add("active");
    element1.classList.remove("active");
    element2.classList.remove("active");
  }
}

let dateDropdown = document.getElementById("date-dropdown");

let currentYear = new Date().getFullYear();
let earliestYear = 1970;

while (currentYear >= earliestYear) {
  let dateOption = document.createElement("option");
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;
}
