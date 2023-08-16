import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Movie({ key, item }) {
	const [like, setlike] = useState(false);
	const [save, setsave] = useState(false);
	const { user } = useAuth();

	//movieidRef
	const movieID = doc(db, "users", `${user?.email}`);

	//handleSave
	const saveShow = async () => {
		if (user?.email) {
			setlike(!like);
			setsave(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("Please login to save .");
		}
	};

	return (
		<div
			key={key}
			className="w-[160px] sm:w-[200] md:w-[240] lg:w-[280] inline-block cursor-pointer p-2 relative"
		>
			<img
				className="w-full h-full block rounded-md"
				src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
				alt={item?.title}
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-all duration-300">
				<p className=" whitespace-normal text-sm font-bold flex justify-center items-center h-full">
					{item?.title}
				</p>
				<p onClick={saveShow}>
					{like ? (
						<FaHeart className="top-4 left-4 bg-transparent absolute" />
					) : (
						<FaRegHeart className="top-4 left-4 bg-transparent absolute" />
					)}
				</p>
			</div>
		</div>
	);
}

export default Movie;
