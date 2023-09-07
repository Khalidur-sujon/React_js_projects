//components
import Title from "./utils/Title";
import Item from "./utils/Item";

function Sales({ ifExists, endpoint: { title, items } }) {
	return (
		<>
			<div className="nike-container">
				<Title title={title} />
				<div
					className={`grid items-center justify-items-center  gap-7 lg:gap-5 ${
						ifExists
							? "grid-cols-3 xl:grid-cols-2 md:grid-cols-1"
							: "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
					}`}
				>
					{items?.map((item, i) => (
						<Item item={item} key={i} ifExists={ifExists} />
					))}
				</div>
			</div>
		</>
	);
}

export default Sales;
