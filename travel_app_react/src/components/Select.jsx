import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";
import SelectCard from "./SelectCard";

function Select() {
	return (
		<div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 px-4 my-8 gap-4">
			<SelectCard bg={BoraBora} text="Bora Bora" />
			<SelectCard bg={BoraBora2} text="Maldives" />
			<SelectCard bg={Maldives} text="Antigua" />
			<SelectCard bg={Maldives2} text="Cozumel" />
			<SelectCard bg={Maldives3} text="Jamaica" />
			<SelectCard bg={KeyWest} text="Key West" />
		</div>
	);
}

export default Select;
