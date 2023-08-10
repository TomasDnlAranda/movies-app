import React from 'react';

const MovieCard = () => {
	return (
		<div className="col-md-4 ">
			<div className="card mb-4 shadow-sm movie-card">
				<img src="#" className="card-img-top" alt="Img de la pelicula" />
				<div className="card-body">
					<h5 className="card-title fs-3">Nombre de la pelicula</h5>
					<p className="card-text text-secondary">Descripcion de la pelicula</p>
					<div className="additional-info">
						<p>
							<span className="fw-bold">Calificacion</span>
							10/10
						</p>
						<p>
							<span className="fw-bold">Actores: </span>
						</p>
						<p>
							<span className="fw-bold">Directores: </span>
						</p>
						<p>
							<span className="fw-bold">Géneros: </span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
