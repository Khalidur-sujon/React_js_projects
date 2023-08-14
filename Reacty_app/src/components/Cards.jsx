//picture
import single from "../assets/img/single.png";
import double from "../assets/img/double.png";
import triple from "../assets/img/triple.png";

function Cards() {
	return (
		<div className="w-full text-black bg-white py-[10rem] px-4">
			<div className="max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-12">
				{/* first card */}
				<div className="w-full  flex flex-col shadow-xl rounded-md p-4 my-4 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto bg-white mt-[-3rem]"
						src={single}
						alt="single-people-picture"
					/>
					<h2 className="text-2xl text-center font-bold py-8">
						Single User
					</h2>
					<p className="text-4xl text-center font-bold">$149</p>
					<div className="text-center font-medium mt-8">
						<p className="border-b py-2">500 GB Storage</p>
						<p className="border-b py-2">1 Granted User</p>
						<p className="border-b py-2">Send up to 2 GB</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
						Start Trial
					</button>
				</div>
				{/* second card */}
				<div className="w-full bg-gray-100  flex flex-col shadow-xl rounded-md p-4 my-4 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto bg-transparent mt-[-3rem]"
						src={double}
						alt="single-people-picture"
					/>
					<h2 className="text-2xl text-center font-bold py-8">
						Double User
					</h2>
					<p className="text-4xl text-center font-bold">$149</p>
					<div className="text-center font-medium mt-8">
						<p className="border-b py-2">500 GB Storage</p>
						<p className="border-b py-2">1 Granted User</p>
						<p className="border-b py-2">Send up to 2 GB</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
						Start Trial
					</button>
				</div>
				{/* third card */}
				<div className="w-full  flex flex-col shadow-xl rounded-md p-4 my-4 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto bg-white mt-[-3rem]"
						src={triple}
						alt="single-people-picture"
					/>
					<h2 className="text-2xl text-center font-bold py-8">
						Triple User
					</h2>
					<p className="text-4xl text-center font-bold">$149</p>
					<div className="text-center font-medium mt-8">
						<p className="border-b py-2">500 GB Storage</p>
						<p className="border-b py-2">1 Granted User</p>
						<p className="border-b py-2">Send up to 2 GB</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
						Start Trial
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
