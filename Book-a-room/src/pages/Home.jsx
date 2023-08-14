// component
import BookForm from "../components/BookForm";
import Rooms from "../components/Rooms";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
	return (
		<>
			<HeroSlider />
			<div className="container mx-auto relative">
				<div className="bg-[#7A5111] mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:shadow-lg lg:-top-12 lg:z-30">
					<BookForm />
				</div>
			</div>
			<Rooms />
		</>
	);
}
