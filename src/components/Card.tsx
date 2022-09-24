import "../style/Card.css";

interface Movie {
	title: string;
	year: string;
	displayPosterSrc: string;
}

const Card: React.FC<Movie> = ({ title, year, displayPosterSrc }) => {
	return (
		<div className='cardContainer'>
			<div className='upperCardContainer'>
				<img className='cardPoster' src={displayPosterSrc} alt={title} />
				<div className='cardInfoContainer'>
					<div className='cardInfoTitle'>{title} </div>
					<div className='cardInfoYear'>{`(${year})`}</div>
				</div>
			</div>
			<input className='cardBtn' type='submit' value=''></input>
		</div>
	);
};

export default Card;
