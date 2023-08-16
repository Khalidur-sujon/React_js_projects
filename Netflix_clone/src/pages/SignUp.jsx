import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function SignUp() {
	const { signUp } = useAuth();
	const navigate = useNavigate();

	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [error, seterror] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			seterror("");
			await signUp(email, password);
			navigate("/");
		} catch (e) {
			seterror(e.message);
			console.log(e.message);
		}
	};

	return (
		<>
			<div className="w-full h-screen">
				<img
					className="hidden absolute sm:block w-full h-full object-cover -z-10"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/2df50cc9-49d3-41c7-bda7-e431fcf5bbff/BD-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="netflix-bg-img"
				/>
				<div className="w-full h-screen bg-black/60 fixed top-0 left-0">
					<div className="w-full fixed py-24 px-4">
						<div className="max-w-[450px] h-[500px] bg-black/75 mx-auto text-white">
							<div className="max-w-[320px] mx-auto py-16">
								<h1 className="text-3xl font-bold pb-2">
									Sign Up
								</h1>
								<form>
									<input
										className="p-3  rounded-md bg-gray-700 my-2 focus:outline-none w-full"
										type="email"
										placeholder="Enter Your Email"
										onChange={(e) =>
											setemail(e.target.value)
										}
									/>
									<input
										className="p-3 rounded-md bg-gray-700 my-2
                                        focus:outline-none w-full"
										type="password"
										placeholder="Enter your password"
										onChange={(e) =>
											setpassword(e.target.value)
										}
									/>
									<button
										type="submit"
										className="bg-red-700 w-full py-3 rounded-md my-4 font-bold"
										onClick={(e) => handleSubmit(e)}
									>
										Sign Up
									</button>
									<div className="flex justify-between items-center text-sm text-gray-600">
										<p>
											<input
												className="mr-2 cursor-pointer"
												type="checkbox"
											/>
											Remember me
										</p>
										<p>Need help?</p>
									</div>
									<p className="py-2">
										<span className=" text-gray-600">
											Already subscribed to Netflix?
										</span>
										<Link to="/login"> Sign In</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
