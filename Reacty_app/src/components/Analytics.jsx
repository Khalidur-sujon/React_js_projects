import laptop from "../assets/img/laptop.jpg";

function Analytics() {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img
					className="w-[500px] mx-auto my-4"
					src={laptop}
					alt="laptop_picture"
				/>
				<div className="flex flex-col justify-center">
					<p className="text-[#00fd9a] font-bold">
						DATA ANALYTICS DASHBOARD
					</p>
					<h1 className="text-2xl sm:text-3xl md:text-4xl text-bold py-2">
						Manage Data Analytics Centrally
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Alias ab sed iure tenetur laboriosam, repudiandae nemo
						quam. Omnis, beatae excepturi sequi rem nobis molestias
						dolore tempora. Mollitia soluta cumque consequatur.
					</p>
					<button
						type="button"
						className="bg-black text-[#00df9a] w-[200px] rounded md:mx-0 mx-auto my-6 p-3"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}

export default Analytics;
