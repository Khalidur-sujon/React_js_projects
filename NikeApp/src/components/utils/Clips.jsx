import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Clips({ imgsrc, clip }) {
	return (
		<>
			<div className="relative w-32 h-28 rounded-xl overflow-hidden group transition-all cursor-pointer duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
				{/* img */}
				<img
					src={imgsrc}
					alt="img/clips"
					className="absolute inset-0 top-0 left-0 right-0 w-full h-full rounded-xl "
				/>
				{/* play icon */}
				<div className="blur-effect-theme absolute bg-white/50 top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex justify-center items-center">
					<PlayIcon className="icon-style md:w-3 md:h-3 text-slate-900" />
				</div>

				{/* video */}
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					playsInline={true}
					className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
				>
					<source type="video/mp4" src={clip} />
				</video>
			</div>
		</>
	);
}
export default Clips;
