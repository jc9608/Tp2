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
            <p class="card-text masInfo">Valoración: <strong>${infoMovie.imdbRating}</strong></p>
            <p class="card-text masInfo">Director: <strong>${infoMovie.Director}</strong></p>
            <p class="card-text masInfo">Duración: <strong>${infoMovie.Runtime}</strong></p>
            <p class="card-text masInfo">Año: <strong>${infoMovie.Year}</strong></p>
            <p class="card-text masInfo">Productora: <strong>${infoMovie.Production}</strong></p>
            <p class="card-text masInfo">Género: <strong>${infoMovie.Genre}</strong></p>
            <p class="card-text masInfo">Actores: <strong>${infoMovie.Actors}</strong></p>
            <p class="card-text masInfo">Total recaudado: <strong>${infoMovie.BoxOffice}</strong></p>
            <p class="card-text masInfo">Idioma original: <strong>${infoMovie.Language}</strong></p>
            
            </div>
        </div>
        </div>
    </div>
    `;
}
