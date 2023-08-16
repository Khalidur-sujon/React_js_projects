import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
	const { user, logOut } = useAuth();
	const navigate = useNavigate();

	const logout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex justify-between items-center p-4 lg:p-8 w-full z-[100] absolute">
				{/* homepage */}
				<Link to="/">
					<h1 className="text-4xl text-red-600 font-bold cursor-pointer ">
						Netflix
					</h1>
				</Link>

				{user?.email ? (
					<div>
						{/* login */}
						<Link to="/account">
							<button className="pr-4 text-white">Account</button>
						</Link>
						{/* sign up */}

						<button
							className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
							onClick={() => logout()}
						>
							Log Out
						</button>
					</div>
				) : (
					<div>
						{/* login */}
						<Link to="/login">
							<button className="pr-4 text-white">Sign In</button>
						</Link>
						{/* sign up */}
						<Link to="/signup">
							<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
								Sign UP
							</button>
						</Link>
					</div>
				)}
			</div>
		</>
	);
}

export default Navbar;
