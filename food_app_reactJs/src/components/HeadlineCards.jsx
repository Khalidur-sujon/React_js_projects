function HeadlineCards() {
	return (
		<div className="max-w-[1280px] px-4 py-12 mx-auto grid md:grid-cols-3 gap-6">
			<div className="relative rounded-xl">
				{/* overlay */}
				<div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
					<p className="text-2xl font-bold px-2 pt-4">
						Sun's Out, BOGO's Out
					</p>
					<p className="px-2">Through 8/26</p>
					<button className="border rounded-full bg-white text-black px-2 mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="rounded-xl object-cover max-h-[160px] md:max-h-[200px] w-full"
					src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
					alt=""
				/>
			</div>
			{/* second Card */}
			<div className="relative rounded-xl">
				{/* overlay */}
				<div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
					<p className="text-2xl font-bold px-2 pt-4">Added Daily</p>
					<p className="px-2">Through 8/26</p>
					<button className="border rounded-full bg-white text-black px-2 mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="rounded-xl object-cover max-h-[160px] md:max-h-[200px] w-full"
					src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
					alt=""
				/>
			</div>
			{/* third card */}
			<div className="relative rounded-xl">
				{/* overlay */}
				<div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
					<p className="text-2xl font-bold px-2 pt-4">We Deliver</p>
					<p className="px-2">Tasty Treats</p>
					<button className="border rounded-full bg-white text-black px-2 mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-full"
					src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
					alt=""
				/>
			</div>
		</div>
	);
}

export default HeadlineCards;
