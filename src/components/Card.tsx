import "../style/Card.css";

interface Movie {
	title: string;
	year: string;
	displayPosterSrc: string;
}

const Card: React.FC<Movie> = ({ title, year, displayPosterSrc }) => {
	return (
		<div className='cardContainer'>
			<img className='CardPosterContainer' src={displayPosterSrc} alt={title} />
			<div className='posterContainer'>{`${title} (${year})`}</div>
			<div className='cardBtn'></div>
		</div>
	);
};

export default Card;
