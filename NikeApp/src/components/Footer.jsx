import React from "react";

function Footer({ footerAPI: { titles, links } }) {
	return (
		<>
			<footer className="bg-gradient-to-br from-blue-700 to-blue-400 pt-7 pb-5">
				<div className="nike-container text-slate-200">
					<div className="grid items-start grid-cols-3 w-full max-w-2xl m-auto  md:max-w-none md:gap-5 ">
						{/* titles */}
						{titles.map((val, i) => (
							<div key={i} className="grid items-center">
								<h1 className="text-lg uppercase font-bold lg:text-base md:text-sm">
									{val.title}
								</h1>
							</div>
						))}
						{/* links */}
						{links.map((lists, i) => (
							<ul key={i} className="grid items-center gap-1">
								{lists.map((list, i) => (
									<li key={i} className="text-sm sm:text-xs">
										{list.link}
									</li>
								))}
							</ul>
						))}
					</div>
					<div className="mt-5 text-center">
						<p className="text-sm md:text-center">
							Coyright{" "}
							<sup className="text-base font-bold">@copy</sup>All
							Reserved Rights{" "}
							<span className="font-semibold">Developers</span>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
