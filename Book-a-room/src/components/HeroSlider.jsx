/* eslint-disable react/jsx-key */
// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

// images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

//slides
const slides = [
	{
		title: "Your Luxury Hotel for Vacation",
		bg: Img1,
		btnText: "Room and Suites",
	},
	{
		title: "Your Luxury Hotel for Vacation",
		bg: Img2,
		btnText: "Room and Suites",
	},
	{
		title: "Your Luxury Hotel for Vacation",
		bg: Img3,
		btnText: "Room and Suites",
	},
];

export default function HeroSlider() {
	return (
		<Swiper
			modules={[EffectFade, Autoplay]}
			effect={"fade"}
			loop={true}
			autoplay={{ delay: 3000, disableOnInteraction: false }}
			className="h-[600px] lg:h-[840px]"
		>
			{slides.map((slide, index) => {
				const { title, bg, btnText } = slide;
				return (
					<SwiperSlide className="h-full relative flex justify-center items-center">
						<div className="z-20 text-white text-center">
							<div className="uppercase tracking-[6px] mb-5">
								Just Enjoy and Relax
							</div>
							<h1 className="text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
								{title}
							</h1>
							<button className="btn btn-lg btn-primary mx-auto mt-5">
								{btnText}
							</button>
						</div>
						<div className="absolute w-full h-full top-0">
							<img
								className="object-cover h-full w-full"
								src={bg}
							/>
						</div>
						{/* overlay */}
						<div className="absolute h-full w-full bg-black/70"></div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
