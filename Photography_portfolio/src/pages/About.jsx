//external import
import { Link } from "react-router-dom";

//image
import women from "../img/about/woman.png";

import { transition1 } from "../transitions";
import { motion } from "framer-motion";

function About() {
	return (
		<motion.section
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto h-full relative">
				{/* text and image wrapper */}
				<div className=" flex flex-col lg:flex-row h-full justify-center items-center gap-x-24 text-center lg:text-left lg:pt-16 ">
					{/* image */}
					<div className="flex-1 order-2 lg:order-none overflow-hidden max-h-96 lg:max-h-max">
						<img src={women} alt="" />
					</div>
					{/* image */}
					<div className="flex-1 pt-36 pb-14 lg:w-auto flex flex-col justify-center items-center lg:items-start">
						<h1 className="h1">About Me</h1>
						<p className="mb-12 max-w-sm lg:mb-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ipsam officiis, accusamus esse consequuntur
							laborum cumque. Nam possimus error porro optio
							fugiat tempora dolor ea qui libero. Aperiam earum
							vero tenetur.
						</p>
						<br />
						<br />
						<p className="mb-12 max-w-sm lg:mb-2">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Maxime cumque laboriosam eos voluptatibus,
							commodi voluptates? Harum officia temporibus maiores
							dicta rerum, totam sit aspernatur provident repellat
							aliquam illo dignissimos ipsum est eius modi optio
							ex dolore libero soluta.
						</p>
						<br />

						<Link to={"/portfolio"} className="btn">
							View My Work
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
