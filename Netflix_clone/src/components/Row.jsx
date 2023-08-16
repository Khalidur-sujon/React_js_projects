//
import { useEffect, useState } from "react";
import axios from "axios";

// component
import Movie from "../components/Movie";

//icon

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowId }) {
	const [movies, setmovies] = useState([]);

	useEffect(() => {
		axios
			.get(fetchURL)
			.then((response) => {
				setmovies(response.data.results);
			})
			.catch((error) => console.log("Error fetching data:", error));
	}, [fetchURL]);

	//slider
	const slideLeft = () => {
		let slider = document.getElementById("slider" + rowId);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		let slider = document.getElementById("slider" + rowId);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className="font-bold text-2xl text-white py-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block transiot transition-opacity duraton-300"
					size={40}
				/>
				<div
					id={"slider" + rowId}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => {
						return <Movie key={id} item={item} />;
					})}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</>
	);
}

export default Row;
