function Hero() {
	return (
		<div className="w-full max-w-[1280px] h-full mx-auto p-4">
			<div className="w-full max-h-[500px] relative">
				{/* overlay */}
				<div className="absolute w-full h-full max-h-[500px] bg-black/50 text-gray-200 flex flex-col justify-center">
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						The <span className="text-orange-500">Best</span>
					</h1>
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						<span className="text-orange-500">Foods </span>
						Deliverd
					</h1>
				</div>

				<img
					className="w-full max-h-[500px] object-cover"
					src="https://images.unsplash.com/photo-1626170809808-4bfd6f3d15e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
					alt="buger_image"
				/>
			</div>
		</div>
	);
}

export default Hero;
