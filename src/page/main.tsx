import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import "../style/main.css";

interface Movie {
	title: string;
	year: string;
	displayPosterSrc: string;
}
function Main() {
	const [MovieSet, setMovieSet] = useState<Movie[]>([]);
	const [UserInput, setUserInput] = useState("");
	const apiKey = "749e16c9";
	const url = "https://www.omdbapi.com/";

	const InputObserver = useCallback(async () => {
		let temp: Movie[] = [];
		const queryUrl = `${url}?s=${UserInput}&apikey=${apiKey}`;
		await fetch(queryUrl)
			.then((res) => res.json())
			.then((data) => {
				if (data.Response !== "False") {
					for (let element of data.Search) {
						temp.push({
							title: element.Title,
							year: element.Year,
							displayPosterSrc: element.Poster,
						});
					}
				}
			})
			.then(() => setMovieSet(temp));
	}, [UserInput]);

	useEffect(() => {
		InputObserver();
	}, [InputObserver]);
	return (
		<div id='appBody'>
			<input
				onChange={(element) => {
					setUserInput(element.target.value.trim());
				}}
				placeholder='Enter a movie  title...'
				type='search'
				id='SearchField'
			/>
			<div id='cardsContainer'>
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
		</div>
	);
}

export default Main;
