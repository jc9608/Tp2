if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("../service-worker.js").then((reg) => {
		console.log("Service worker listo!");
	});
} else {
	console.log("Service worker no soportado.");
}

window.addEventListener("offline", (event) => {
	document.querySelector("body").classList.add("offline");
	document.querySelector("body").innerHTML =
		"Lo sentimos! No se puede obtener la información, la aplicacion esta offline!";
});

window.addEventListener("online", (event) => {
	document.querySelector("body").classList.remove("offline");
	consultaApi();
});

if (!navigator.onLine) {
	document.querySelector("body").classList.add("offline");
	main.innerHTML =
		"Lo sentimos! No se puede obtener la información, la aplicacion esta offline!";
}
