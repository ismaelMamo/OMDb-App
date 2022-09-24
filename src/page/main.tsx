import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";

interface Movie {
	title: string;
	year: string;
	displayPosterSrc: string;
}
function Main() {
	const [MovieSet, setMovieSet] = useState<Movie[]>([]);
	const [UserInput, setUserInput] = useState("");

	const InputObserver = useCallback(async () => {
		let temp: Movie[] = [];
		const queryUrl = `https://www.omdbapi.com/?s=war-of&apikey=749e16c9`;
		await fetch(queryUrl)
			.then((res) => res.json())
			.then((data) => {
				for (let element of data.Search) {
					temp.push({
						title: element.Title,
						year: element.Year,
						displayPosterSrc: element.Poster,
					});
				}
			})
			.then(() => setMovieSet(temp));
	}, [UserInput]);

	useEffect(() => {
		InputObserver();
	}, [InputObserver]);
	return (
		<>
			<input
				onChange={(element) => {
					setUserInput(element.target.value.trim());
				}}
				placeholder='Enter a movie  title...'
				type='search'
				id='SearchField'
			/>
			<div>
				{MovieSet?.map((element: Movie, index: number) => {
					return (
						<Card
							key={index}
							title={element.title}
							year={element.year}
							displayPosterSrc={element.displayPosterSrc}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Main;
