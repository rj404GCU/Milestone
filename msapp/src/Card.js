import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
	return (
        <div className="card" style={{width: '18rem'}}>
			<div className="card-body">
				<h5 className="card-title">{props.id}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{props.productName}</h6>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="card-link">Card link</a>
				<a href="#" className="card-link">Another link</a>
			</div>
		</div>
    )
};
export default Card;
