window.addEventListener("load", pagOnline);

function pagOnline() {
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario);
}

function buscar(evento) {
	evento.preventDefault();
	const form = new FormData(this);
	const busquedaRealizada = form.get("busquedaUsuario");
	const apiUrl = "https://www.omdbapi.com";
	API_KEY = "8dafff3c";
	let fetchPromise = fetch(
		`${apiUrl}/?apikey=${API_KEY}&t=${busquedaRealizada}`
	);
	console.log(`${apiUrl}/?apikey=${API_KEY}&t=${busquedaRealizada}`);
	fetchPromise
		.then((response) => response.json())
		.then(consultaApi)
		.catch((error) => console.warn(error.message));
}

function consultaApi(infoMovie) {
	const resultadoConsulta = document.getElementById("movieinfo");
	resultadoConsulta.innerHTML = `
    <div class="card">
        <div class="row no-gutters">
        <div class="col-sm-12 col-md-5">
            <img src="${infoMovie.Poster}" alt="Poster de la película" />
        </div>
        <div class="col-sm-12 col-md-7">
            <div class="card-body">
            <h2 class="card-title">${infoMovie.Title}</h2>
            <p class="card-text">${infoMovie.Plot}</p>
            <p class="card-text"><small class="text-muted">Valoración: ${infoMovie.imdbRating}</small></p>
            </div>
        </div>
        </div>
    </div>
    `;
}
