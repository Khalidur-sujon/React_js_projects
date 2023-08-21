//icons
import { AiOutlineSearch } from "react-icons/ai";
//video
import beachVid from "../assets/beachVid.mp4";

function Hero() {
	return (
		<div className="max-w-[1240px] h-screen relative mx-auto ">
			<video
				className="w-full h-full object-cover"
				src={beachVid}
				muted
				loop
				autoPlay
			/>
			<div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
			<div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
				<h1 className="text-white">First Class Travel</h1>
				<h2 className="py-4 text-white">Top 1% Locations Worldwide</h2>
				<form className="max-w-[700px] w-full flex justify-between items-center border p-1 text-black rounded-md bg-gray-100/90">
					<div>
						<input
							className="bg-transparent w-[400px] sm:w-[600px] focus:outline-none px-2 font-[Poppins]"
							type="text"
							placeholder="Search Destinations"
						/>
					</div>
					<div>
						<button>
							<AiOutlineSearch
								size={20}
								style={{ color: "#ffffff" }}
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Hero;
