//
import { useEffect, useState } from "react";
// component

//icon
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

function SavedShows() {
	const [movies, setmovies] = useState([]);
	const { user } = useAuth();

	//setmovies
	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setmovies(doc.data()?.savedShows);
		});
	}, [user?.email]);

	// delete show
	const movieRef = doc(db, "users", `${user?.email}`);
	const deleteShow = async (passedID) => {
		try {
			const results = movies.filter((item) => item.id !== passedID);
			await updateDoc(movieRef, {
				savedShows: results,
			});
		} catch (error) {
			console.log(error);
		}
	};

	//slider
	const slideLeft = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white rounded-full overflow-x-scroll opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
					size={30}
				/>
				<div
					id={"slider"}
					className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => {
						return (
							<div
								key={id}
								className="w-[160px] sm:w-[200] md:w-[240] lg:w-[280] inline-block cursor-pointer p-2 relative"
							>
								<img
									className="w-full h-full block rounded-md"
									src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
									alt={item?.title}
								/>
								<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
									<p className=" whitespace-normal text-sm font-bold flex justify-center items-center h-full">
										{item?.title}
									</p>
									<p
										onClick={() => deleteShow(item.id)}
										className="absolute top-4 right-4 text-sm text-gray-300"
									>
										<AiOutlineClose />
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={30}
				/>
			</div>
		</>
	);
}

export default SavedShows;
