import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";

function Main() {
	const [movies, setmovies] = useState([]);
	const movie = movies?.[Math.floor(Math.random() * movies.length)];

	// fetching data using AXIOS
	const fetchData = async () => {
		const response = await axios.get(requests.requestPopular);
		setmovies(response.data.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	function truncate(str) {
		return str?.length > 10 ? str.substring(0, 150) + " ..." : str;
	}

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover"
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className="absolute w-full top-[44%] p-4 md:p-8">
					<h1 className="text-3xl font-bold md:text-4xl">
						{movie?.title}
					</h1>
					<div className="my-2">
						<button className="border border-gray-300 bg-gray-400 text-black px-5 py-2 mr-4 cursor-pointer">
							Play
						</button>
						<button className="border border-gray-300 text-white px-5 py-2 cursor-pointer">
							Watch Later
						</button>
					</div>
					<p className="text-sm text-gray-400 py-2">
						Released: {movie?.release_date}
					</p>
					<p className="text-gray-200 w-full md:w-[70%] lg:w-[50%] xl:w-[35%]">
						{truncate(movie?.overview)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
