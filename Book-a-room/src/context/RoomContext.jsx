import { createContext, useState, useEffect } from "react";

// import room data
import { roomData } from "../data";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
	const [rooms, setrooms] = useState(roomData);
	const [adult, setadult] = useState("1 adult");
	const [kid, setkid] = useState("0 kid");
	const [total, settotal] = useState(0);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		settotal(Number(adult[0]) + Number(kid[0]));
	});

	const handleClick = (e) => {
		e.preventDefault();
		setloading(true);

		//filter rooms based on person
		const newRooms = roomData.filter((room) => total <= room.maxPerson);

		setTimeout(() => {
			setrooms(newRooms);
			setloading(false);
		}, 3000);

		console.log(total);
	};

	return (
		<div>
			<RoomContext.Provider
				value={{
					rooms,
					adult,
					setadult,
					kid,
					setkid,
					handleClick,
					loading,
				}}
			>
				{children}
			</RoomContext.Provider>
		</div>
	);
}
