import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

//The code used for this 404 page is from https://colorlib.com/wp/free-404-error-page-templates/

const NotFound = () => (
  <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h3>Oops! Pagina niet gevonden</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>Het lijkt erop dat deze pagina niet bestaat... Geniet gerust van de 404 of <Link to="/"> ga terug </Link> </h2>
		</div>
	</div>
);

export default NotFound;