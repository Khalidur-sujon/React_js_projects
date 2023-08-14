function NewsLetter() {
	return (
		<div className="w-full text-white my-16 p-4">
			<div className="bg-black grid md:grid-cols-3 max-w-[1240px]">
				<div className="lg:col-span-2 my-8">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
						Want tips & tricks to optimize your flow?
					</h1>
					<p>Sign up to our newsletter and stay up to date.</p>
				</div>

				<div className="my-4">
					<div className="flex flex-col sm:flex-row justify-center items-center w-full sm:gap-x-2">
						<input
							className="p-3 rounded-md flex text-black w-[100%]"
							type="text"
							placeholder="Enter your email"
						/>
						<button
							type="button"
							className="bg-[#00df9a] w-[200px] rounded mx-autom my-6 p-3 text-black"
						>
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our
						<br />
						<span className="text-[#00df9a] border-b border-[#00df9a]">
							Privacy Policy.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
