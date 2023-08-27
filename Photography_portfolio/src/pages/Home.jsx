//external import
import { Link } from "react-router-dom";
import { useContext } from "react";

// image
import women from "../img/home/woman.png";

import { transition1 } from "../transitions";
import { motion } from "framer-motion";

//context
import { CursorContext } from "../context/CursorContext";

function Home() {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto relative">
				{/* text and image wrapper  */}
				<div className="flex flex-col justify-center">
					<motion.div
						initial={{ opacity: 0, y: "-50%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-50%" }}
						transition={transition1}
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						className="w-full pt-36 pb-14 lg:pt-24 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
					>
						<h1 className="h1">
							Photographer <br /> & film maker
						</h1>
						<p className="text-[26px] lg:text-[36px] mb-4 font-primary lg:mb-12 ">
							Los Angeles, USA
						</p>
						<Link to={"/contact"} className="btn mb-[30px]">
							Hire Me
						</Link>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={transition1}
						className="flex justify-end max-h-96 lg:max-h-max "
					>
						<div className="relative lg:-right-40 overflow-hidden ">
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={transition1}
								onMouseEnter={mouseEnterHandler}
								onMouseLeave={mouseLeaveHandler}
								src={women}
								alt=""
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default Home;
