function SelectCard(props) {
	return (
		<div className="relative">
			<img className="w-full h-full object-cover" src={props.bg} alt="" />
			<div className="absolute top-0 left-0 w-full h-full bg-black/15">
				<p className="absolute left-4 bottom-4 font-bold text-white text-2xl">
					{props.text}
				</p>
			</div>
		</div>
	);
}

export default SelectCard;
