//icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

function Search() {
	return (
		<div className="max-w-[1280px] mx-auto px-4 my-4 grid lg:grid-cols-3 gap-4">
			<div className="flex flex-col justify-evenly lg:col-span-2">
				<h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
				<p className="py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Atque suscipit dignissimos eum quidem nam quibusdam officia
					dolores autem, porro tempore aspernatur aperiam vel eos nisi
					quia, laudantium minima modi ipsum ipsa ad voluptatem
					cumque. Cupiditate aliquam veniam in consequuntur quam
					sapiente rem nemo pariatur soluta, nostrum ratione laborum,
					aspernatur ipsa!
				</p>
				<div className="grid sm:grid-cols-2">
					<div className="flex flex-col md:flex-row justify-center items-center py-4 space-x-2 text-center">
						<button>
							<RiCustomerService2Fill size={50} />
						</button>
						<div>
							<h3 className="py-2 text-center">
								LEADING SERVICE
							</h3>
							<p className="py-1">
								ALL-INCLUSIVE COMPANY FOR 2O YEARS IN-A-ROW
							</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-center items-center py-4 space-x-2 text-center">
						<button>
							<MdOutlineTravelExplore size={50} />
						</button>
						<div>
							<h3 className="py-2">AUTOMATED BOOKINGS</h3>
							<p className="py-1">
								ALL-INCLUSIVE COMPANY FOR 2O YEARS IN-A-ROW
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="text-center border py-4 space-y-2">
					<p>GET AN ADDITIONAL 10% OFF</p>
					<p>12HOURS LEFT</p>
					<p className="bg-gray-800 text-gray-200 py-2 mx-2 lg:mx-4">
						BOOK NOW AND SAFE
					</p>
				</div>
				<form className="w-full">
					<div className="flex flex-col my-2">
						<label>Destination</label>
						<select className="border rounded-md py-2 outline-gray-400">
							<option>Grande Antigua</option>
							<option>Key West</option>
							<option>Maldives</option>
							<option>Cozumel</option>
						</select>
					</div>
					<div className="flex flex-col my-2">
						<label htmlFor="checkin">Check-In</label>
						<input
							className="border rounded-md py-2 outline-gray-400"
							type="date"
							id="checkin"
						/>
					</div>
					<div className="flex flex-col my-2">
						<label htmlFor="checkout">Check-Out</label>
						<input
							className="border rounded-md py-2 outline-gray-400"
							type="date"
							id="checkout"
						/>
					</div>
					<button className="w-full">Rates & Availabilities</button>
				</form>
			</div>
		</div>
	);
}

export default Search;
