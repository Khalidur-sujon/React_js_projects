import { useState, useEffect } from "react";

// logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

export default function Header() {
	const [header, setheader] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setheader(true) : setheader(false);
		});
	});

	return (
		<header
			className={`${
				header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
			} fixed z-50 w-full transition-all duration-300`}
		>
			<div className="container mx-auto flex flex-col justify-center items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-x-0">
				{/* logo */}
				<a href="/">
					{header ? (
						<img className="w-[160px]" src={LogoDark} />
					) : (
						<img className="w-[160px]" src={LogoWhite} />
					)}
				</a>
				{/* nav */}
				<nav
					className={`${
						header ? "text-primary" : "text-white"
					} flex gap-x-4 lg:gap-x-8 text-[15px] tracking-[3px] items-center uppercase`}
				>
					<a href="/" className="hover:text-accent transition">
						Home
					</a>
					<a href="/" className="hover:text-accent transition">
						Rooms
					</a>
					<a href="/" className="hover:text-accent transition">
						Restaurant
					</a>
					<a href="/" className="hover:text-accent transition">
						Spa
					</a>
					<a href="/" className="hover:text-accent transition">
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
