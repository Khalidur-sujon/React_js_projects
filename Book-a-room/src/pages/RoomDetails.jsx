//
import { useContext } from "react";
import { useParams } from "react-router-dom";

//components
import AdultsDropDown from "../components/AdultsDropDown";
import KidsDropDown from "../components/KidsDropDown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import ScrollTop from "../components/ScrollTop";

//icon
import { FaCheck } from "react-icons/fa";

//context
import { RoomContext } from "../context/RoomContext";

export default function RoomDetails() {
	const { rooms } = useContext(RoomContext);
	const { id } = useParams();

	const room = rooms.find((room) => room.id === Number(id));

	const { name, description, facilities, imageLg, price } = room;

	return (
		<section className="bg-white">
			<ScrollTop />
			{/* banner */}
			<div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
				{/* overlay */}
				<div className="absolute h-full w-full bg-black/70"></div>
				<h1 className="text-6xl text-white z-10 text-center">{name}</h1>
			</div>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row h-full py-24">
					<div className="w-full h-full lg:w[60%]">
						<h2 className="h2 text-3xl mb-2">{name}</h2>
						<p className="mb-12">{description}</p>
						<img className="mb-8" src={imageLg} />

						{/* facilities */}
						<div className="mt-12">
							<h2 className="text-3xl mb-2">Room Facilities</h2>
							<p className="mb-12">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Consequatur quisquam fugiat
								expedita aliquid temporibus dolorum doloribus
								illo commodi, adipisci quibusdam.
							</p>
							{/* grid */}
							<div className="grid grid-cols-2 gap-6 mb-12">
								{facilities.map((item, index) => {
									const { name, icon } = item;
									return (
										<div
											className="flex items-center gap-x-3 flex-1"
											key={index}
										>
											<div className="text-3xl text-accent">
												{icon}
											</div>
											<div className="text-base">
												{name}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="w-full h-full lg:w[40%]">
						{/* Reservation */}
						<div className="py-8 px-6 bg-accent/20 mb-12">
							<div className="flex flex-col space-y-4 mb-4">
								<h3>Your Reservation</h3>
								<div className="h-[60px]">
									<CheckIn />
								</div>
								<div className="h-[60px]">
									<CheckOut />
								</div>
								<div className="h-[60px]">
									<AdultsDropDown />
								</div>
								<div className="h-[60px]">
									<KidsDropDown />
								</div>
							</div>
							<button className="btn btn-lg btn-primary w-full">
								Book now for ${price}
							</button>
						</div>
						{/* rules */}
						<div>
							<h3 className="text-3xl mb-6">Hotel Rules</h3>
							<p className="mb-6">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Vero voluptatibus architecto
								accusantium eveniet perspiciatis aut ipsa vel
								quae, vitae rem ipsum animi eius delectus
								adipisci rerum. Dolor officiis accusamus
								corrupti!
							</p>
							<ul className="flex flex-col gap-y-4">
								<li className="flex items-center gap-x-4">
									<FaCheck />
									Check-in: 3:00 PM - 9:00 PM{" "}
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck />
									Check-in: 10:00 AM{" "}
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck />
									No Pets
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck />
									No Smoking
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
