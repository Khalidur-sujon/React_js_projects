// external imports
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillYoutube,
} from "react-icons/ai";

import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import porto_image from "./images/ct-img.png";

export default function App() {
	const [darkmode, setdarkmode] = useState(getInitialMode());

	useEffect(() => {
		localStorage.setItem("darkmode", JSON.stringify(darkmode));
	}, [darkmode]);

	function getInitialMode() {
		const saveMode = JSON.parse(localStorage.getItem("darkmode"));
		return saveMode || false;
	}

	return (
		<div className={darkmode ? "dark" : ""}>
			<div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
				<section className="min-h-screen">
					<nav className="py-10 flex items-center justify-between">
						<h1 className="text-xl font-nento dark:text-white">
							Developedby-Khalid
						</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									className="cursor-pointer text-2xl dark:text-white"
									onClick={() => setdarkmode(!darkmode)}
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 px-4 py-2 text-white rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="p-10 text-center">
						<h2 className="text-4xl py-2 text-teal-500 font-medium md:text-6xl dark:text-white">
							Khalidur Rahman
						</h2>
						<h3 className="text-2xl py-2 md:text-4xl dark:text-white">
							Developer and Designer
						</h3>
						<p className="text-md text-gray-800 leading-8 py-5 md:text-xl max-w-lg mx-auto dark:text-white">
							Freelancer providing services for programming needs.
							Join me down bellow and let's get cracking
						</p>
						<div className="flex justify-center items-center text-5xl gap-10 text-gray-500 dark:text-white">
							<AiFillTwitterSquare />
							<AiFillLinkedin />
							<AiFillYoutube />
						</div>
					</div>
					<div className="relative bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mx-auto mt-20 overflow-hidden md:h-90 md:w-90">
						<img
							className="object-cover w-full h-full"
							src={porto_image}
						></img>
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl font-medium py-2 md:text-5xl dark:text-white">
							Porfolio
						</h3>
						<p className="text-md py-2 text-gray-800 leading-8 md:text-xl dark:text-white">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Sunt, quidem! Fugiat vel minus dignissimos
							rerum
							<span className="text-teal-600"> startup </span>
							necessitatibus, tempore corrupti dolores error
							dolore
							<span className="text-teal-600">
								{" "}
								agencies{" "}
							</span>{" "}
							non dolorum quia. Tempore error modi beatae!
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-white">
							I offer from a wide range of services, including
							<span className="font-md italic text-teal-600 px-1">
								programming
							</span>
							and teaching.
						</p>
						<div className="flex flex-col py-10 gap-8 lg:flex-row lg:flex-wrap">
							<div className="basis-1/3 flex-1 ">
								<img
									className="rounded-lg w-full h-full"
									src={web1}
								/>
							</div>
							<div className="basis-1/3 flex-1 ">
								<img
									className="rounded-lg w-full h-full"
									src={web2}
								/>
							</div>
							<div className="basis-1/3 flex-1 ">
								<img
									className="rounded-lg w-full h-full"
									src={web3}
								/>
							</div>
							<div className="basis-1/3 flex-1 ">
								<img
									className="rounded-lg w-full h-full"
									src={web4}
								/>
							</div>
						</div>
					</div>
				</section>
				<footer className="border-t-2 border-teal-600 mt-10 text-center shadow-teal-300 py-4 px-4 dark:text-white">
					Copyright © 2023 Khalidur ®
				</footer>
			</div>
		</div>
	);
}
