var menuContainer = document.getElementById("menuContainer");
var hamburgerButton = document.getElementById("hamburgerButton");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");

function openCloseMenu() {

	if(menuContainer.style.right === "0px"){
		menuContainer.style.right = "";
		closeIcon.style.display = "";
		menuIcon.style.display = "";
	}
	else {
		menuContainer.style.right = "0px";
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}


hamburgerButton.addEventListener('click', openCloseMenu);