var button = document.querySelector(".btn");
var popup = document.querySelector(".modal");


button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle(".modal");
	popup.classList.toggle("modal-show");

});


window.addEventListener("keydown", function (evt) {

	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});
