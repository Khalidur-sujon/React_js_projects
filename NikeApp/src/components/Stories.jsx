/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//icons
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";

function Stories({ story: { title, news } }) {
	const spileOptions = {
		perPage: 4,
		perMove: 1,
		type: "loop",
		rewind: true,
		keyboard: "global",
		gap: "1rem",
		pagination: false,
		padding: "2rem",
		breakpoints: {
			1200: { perPage: 3 },
			991: { perPage: 2.3 },
			768: { perPage: 2 },
			500: { perPage: 1.3 },
			425: { perPage: 1 },
		},
	};
	return (
		<>
			<div className="nike-container">
				<Title title={title} />
				<div className="mt-7">
					<Splide options={spileOptions}>
						{news.map((val, i) => (
							<SplideSlide key={i}>
								<div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
									<div className="flex items-center justify-center">
										<img
											src={val.img}
											alt={`img/story/${i}`}
											className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg "
										/>
									</div>
									<div className="flex items-center justify-between w-full px-4">
										{/* heartIcon */}
										<div className="flex items-center gap-0.5">
											<HeartIcon className="icon-style text-red-500 w-5 h-5" />
											<span className="text-xs font-bold">
												{val.like}
											</span>
										</div>
										{/* clockIcon */}
										<div className="flex items-center gap-0.5">
											<ClockIcon className="w-5 h-5 icon-style text-black" />
											<span className="text-xs font-bold">
												{val.time}
											</span>
										</div>
										{/* hashtagIcon */}
										<div className="flex items-center gap-0.5">
											<HashtagIcon className="w-5 h-5 icon-style text-blue-600" />
											<span className="text-xs font-bold text-blue-600">
												{val.by}
											</span>
										</div>
									</div>
									<div>
										<h1 className="text-base font-semibold lg:text-sm">
											{val.title}
										</h1>
										<p className="text-sm text-justify lg:text-xs">
											{truncate(val.text, {
												length: 175,
											})}
										</p>
									</div>
									<div className="flex items-center justify-center px-4 w-full">
										<a
											href={val.url}
											target="_blank"
											role={"button"}
											className="w-full py-1.5 px-4 text-center bg-gradient-to-b from-slate-900 to-black text-slate-100 button-theme"
										>
											{val.btn}
										</a>
									</div>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</>
	);
}

export default Stories;
