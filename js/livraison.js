//Front End

function active1() {
	var element1 = document.getElementById("select1");
	var element2 = document.getElementById("select2");

	if (element1.classList.contains("active")) {
		element1.classList.remove("active");
		document.getElementById("lower-container-1").classList.add("hide");
		document.getElementById("lower-container-2").classList.add("hide");
		document.getElementById("lower-container-1").classList.remove("show");
		document.getElementById("lower-container-2").classList.remove("show");
	} else {
		element1.classList.add("active");
		element2.classList.remove("active");
		document.getElementById("lower-container-1").classList.remove("hide");
		document.getElementById("lower-container-2").classList.remove("hide");
		document.getElementById("lower-container-1").classList.remove("show");
		document.getElementById("lower-container-2").classList.remove("show");
		document.getElementById("lower-container-2").classList.add("hide");
		document.getElementById("lower-container-1").classList.add("show");
	}
}

function active2() {
	var element1 = document.getElementById("select1");
	var element2 = document.getElementById("select2");

	if (element2.classList.contains("active")) {
		element2.classList.remove("active");
		document.getElementById("lower-container-1").classList.add("hide");
		document.getElementById("lower-container-2").classList.add("hide");
		document.getElementById("lower-container-1").classList.remove("show");
		document.getElementById("lower-container-2").classList.remove("show");
	} else {
		element2.classList.add("active");
		element1.classList.remove("active");
		document.getElementById("lower-container-1").classList.remove("hide");
		document.getElementById("lower-container-2").classList.remove("hide");
		document.getElementById("lower-container-1").classList.remove("show");
		document.getElementById("lower-container-2").classList.remove("show");
		document.getElementById("lower-container-1").classList.add("hide");
		document.getElementById("lower-container-2").classList.add("show");
	}
}

function active3() {
	var element1 = document.getElementById("LowerSelect1");
	var element2 = document.getElementById("LowerSelect2");
	var element3 = document.getElementById("LowerSelect3");
	var element4 = document.getElementById("LowerSelect4");
	var element5 = document.getElementById("LowerSelect5");

	if (element1.classList.contains("active")) {
		element1.classList.remove("active");
	} else {
		element1.classList.add("active");
		element2.classList.remove("active");
		element3.classList.remove("active");
		element4.classList.remove("active");
		element5.classList.remove("active");
	}
}

function active4() {
	var element1 = document.getElementById("LowerSelect1");
	var element2 = document.getElementById("LowerSelect2");
	var element3 = document.getElementById("LowerSelect3");
	var element4 = document.getElementById("LowerSelect4");
	var element5 = document.getElementById("LowerSelect5");

	if (element2.classList.contains("active")) {
		element2.classList.remove("active");
	} else {
		element2.classList.add("active");
		element1.classList.remove("active");
		element3.classList.remove("active");
		element4.classList.remove("active");
		element5.classList.remove("active");
	}
}

function active5() {
	var element1 = document.getElementById("LowerSelect1");
	var element2 = document.getElementById("LowerSelect2");
	var element3 = document.getElementById("LowerSelect3");
	var element4 = document.getElementById("LowerSelect4");
	var element5 = document.getElementById("LowerSelect5");

	if (element3.classList.contains("active")) {
		element3.classList.remove("active");
	} else {
		element3.classList.add("active");
		element2.classList.remove("active");
		element1.classList.remove("active");
		element4.classList.remove("active");
		element5.classList.remove("active");
	}
}

function active6() {
	var element1 = document.getElementById("LowerSelect1");
	var element2 = document.getElementById("LowerSelect2");
	var element3 = document.getElementById("LowerSelect3");
	var element4 = document.getElementById("LowerSelect4");
	var element5 = document.getElementById("LowerSelect5");

	if (element4.classList.contains("active")) {
		element4.classList.remove("active");
	} else {
		element4.classList.add("active");
		element2.classList.remove("active");
		element3.classList.remove("active");
		element1.classList.remove("active");
		element5.classList.remove("active");
	}
}

function active7() {
	var element1 = document.getElementById("LowerSelect1");
	var element2 = document.getElementById("LowerSelect2");
	var element3 = document.getElementById("LowerSelect3");
	var element4 = document.getElementById("LowerSelect4");
	var element5 = document.getElementById("LowerSelect5");

	if (element5.classList.contains("active")) {
		element5.classList.remove("active");
	} else {
		element5.classList.add("active");
		element2.classList.remove("active");
		element3.classList.remove("active");
		element4.classList.remove("active");
		element1.classList.remove("active");
	}
}
