import React from 'react';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<>
			<div className="container my-5 text-center">
				<h2 className="mb-4 text-primary">Movies App</h2>
				<div className="row">
					<MovieCard />
				</div>
			</div>
		</>
	);
};

export default App;
