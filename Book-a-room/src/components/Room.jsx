//icon
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

//
import { Link } from "react-router-dom";

export default function Room({ room }) {
	const { id, name, image, size, maxPerson, description, price } = room;
	return (
		<div className="bg-white shadow-2xl min-h-[500px] group">
			<div className="overflow-hidden">
				<img
					className="group-hover:scale-110 transition-all duration-300 w-full"
					src={image}
					alt=""
				/>
			</div>
			{/* details */}
			<div className="bg-white shadow-lg max-w-[300px] h-[60px] mx-auto flex items-center justify-center tracking-[1px] font-semibold text-base -translate-y-1/2 uppercase">
				<div className="flex w-[90%] justify-between text-sm">
					<div className="flex items-center gap-x-2">
						{/* size */}
						<div>
							<BsArrowsFullscreen className="text-[15px]" />
						</div>
						<div className="flex gap-x-2">
							<div>Size</div>
							<div>{size}m2</div>
						</div>
					</div>
					{/* people */}
					<div className="flex items-center gap-x-2">
						<div>
							<BsPeople className="text-[18px]" />
						</div>
						<div className="flex gap-x-1">
							<div>Max people</div>
							<div>{maxPerson}</div>
						</div>
					</div>
				</div>
			</div>
			{/* name */}
			<div className="text-center">
				<Link to={`/room/${id}`}>
					<h3 className="h3 font-extrabold mb-2">{name}</h3>
				</Link>
				<p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
					{description.slice(0, 46)}
				</p>
			</div>
			{/* button */}
			<Link
				to={`/room/${id}`}
				className="bg-black uppercase p-6 flex-1 flex justify-center items-center h-[60px]  max-w-[240px] mx-auto text-white hover:bg-[#b98603] transition-all duration-100"
			>
				Book now from ${price}
			</Link>
		</div>
	);
}
