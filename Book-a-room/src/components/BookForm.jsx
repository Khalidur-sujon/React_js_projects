import AdultsDropDown from "../components/AdultsDropDown";
import KidsDropDown from "../components/KidsDropDown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

//external import
import { useContext } from "react";
//room context
import { RoomContext } from "../context/RoomContext";

export default function BookForm() {
	const { handleClick } = useContext(RoomContext);
	return (
		<form className="h-[300px] bg-[#7A5111] lg:h-[70px]">
			<div className="flex flex-col w-full h-full lg:flex-row">
				<div className="flex-1 lg:border-r">
					<CheckIn />
				</div>
				<div className="flex-1 lg:border-r">
					<CheckOut />
				</div>
				<div className="flex-1 lg:border-r">
					<AdultsDropDown />
				</div>
				<div className="flex-1 lg:border-r">
					<KidsDropDown />
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => handleClick(e)}
				>
					Check Now
				</button>
			</div>
		</form>
	);
}
