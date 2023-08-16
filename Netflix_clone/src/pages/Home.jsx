import Main from "../components/Main";
import Row from "../components/Row";

//requests
import requests from "../requests.js";

function Home() {
	return (
		<>
			<Main />
			<Row
				rowId="1"
				title="Up Coming"
				fetchURL={requests.requestUpcoming}
			/>
			<Row
				rowId="2"
				title="Top Rated"
				fetchURL={requests.requestTopRated}
			/>
			<Row
				rowId="3"
				title="Trending"
				fetchURL={requests.requestTrending}
			/>
			<Row rowId="4" title="Horor" fetchURL={requests.requestHorror} />
		</>
	);
}

export default Home;
