import Typed from "react-typed";

function Hero() {
	return (
		<div className="text-white">
			<div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center p-4">
				<p className="text-[#00df9a] font-bold p-2">
					GROWING WITH DATA ANALYTICS
				</p>
				<h1 className="text-4xl sm:text-6xl md:text-7xl md:py-6">
					GROW WITH DATA
				</h1>
				<div className=" flex gap-x-1">
					<p className="text-xl sm:text-4xl md:text-5xl">
						Fast, flexible finacing for
					</p>
					<Typed
						className="text-xl sm:text-4xl md:text-5xl text-gray-600 pb-2"
						strings={["BTB", "BTC", "SASS"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="text-xl md:text-2xl font-bold text-gray-600 text-center">
					Monitor your data analytics to increase revenue for BTB, BTC
					& SASS platform
				</p>
				<button
					type="button"
					className="bg-[#00df9a] w-[200px] rounded mx-auto my-6 p-3 text-black"
				>
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Hero;
