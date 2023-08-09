export default function Navbar() {
	return (
		<nav className="container">
			<div className="logo">
				<img
					src="../../public/images/brand_logo.png"
					alt="brand_logo"
				/>
			</div>
			<ul>
				<li>
					<a>MENU</a>
				</li>
				<li>
					<a>LOCATION</a>
				</li>
				<li>
					<a>ABOUT</a>
				</li>
				<li>
					<a>CONTACT</a>
				</li>
			</ul>
			<button className="login-btn">Login</button>
		</nav>
	);
}
