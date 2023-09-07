//components
import {
	Hero,
	Sales,
	FlexContent,
	Stories,
	Footer,
	Navbar,
	Cart,
} from "./components";
//data
import {
	heroapi,
	popularsales,
	toprateslaes,
	sneaker,
	highlight,
	story,
	footerAPI,
} from "./data/data.js";

function App() {
	return (
		<>
			<main className="relative flex flex-col gap-16">
				<Navbar />
				<Cart />
				<Hero heroapi={heroapi} />
				<Sales endpoint={popularsales} ifExists />
				<FlexContent endpoint={highlight} ifExists />
				<Sales endpoint={toprateslaes} />
				<FlexContent endpoint={sneaker} />
				<Stories story={story} />
				<Footer footerAPI={footerAPI} />
			</main>
		</>
	);
}

export default App;
