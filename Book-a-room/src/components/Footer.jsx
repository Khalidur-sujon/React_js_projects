import LogoWhtie from "../assets/img/logo-white.svg";

export default function Footer() {
	return (
		<footer className="bg-black py-12">
			<div className="container mx-auto flex justify-between items-center text-white ">
				<a href="/">
					<img src={LogoWhtie} />
				</a>
				Copyright &copy; 2023. All rights reserved.
			</div>
		</footer>
	);
}
