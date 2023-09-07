import React from "react";

function SocialLinks({ icon }) {
	return (
		<>
			<img
				src={icon}
				alt="icon/img"
				className="w-8 h-8 flex items-center md:w-7 md:h-7 sm:w-7 sm:h-7 transition-all duration-300 hover:scale-110 cursor-pointer"
			/>
		</>
	);
}

export default SocialLinks;
