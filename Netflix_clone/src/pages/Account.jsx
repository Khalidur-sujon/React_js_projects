import SavedShows from "../components/SavedShows";

function Account() {
	return (
		<div className="w-full text-white">
			<img
				className="w-[100%] object-fill h-[400px]"
				src={
					"https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				}
				alt="/"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
			<div className="absolute p-8  md:p-14">
				<h1 className="text-3xl font-bold md:text-5xl">
					<SavedShows />
				</h1>
			</div>
		</div>
	);
}

export default Account;
