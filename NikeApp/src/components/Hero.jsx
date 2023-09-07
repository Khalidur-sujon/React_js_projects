//utils components
import Clips from "./utils/Clips";
import SocialLinks from "./utils/SocialLinks";

function Hero({
	heroapi: { title, btntext, img, sociallinks, videos, subtitle },
}) {
	return (
		<>
			<div className="relative w-auto h-auto flex flex-col">
				{/* background */}
				<div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 "></div>
				{/* container  */}
				<div className="relative grid items-center justify-center nike-container z-20">
					{/* text */}
					<div className="grid items-center justify-center mt-28 mb:mt-24">
						<h1 className="xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-6xl text-slate-200 z-10 font-extrabold drop-shadow-sm filter">
							{title}
						</h1>
						<h1 className="xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-6xl text-slate-200 font-extrabold drop-shadow-sm filter">
							{subtitle}
						</h1>
						<button className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5">
							{btntext}
						</button>
						{/* videos */}
						<div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
							{videos?.map((val, i) => (
								<Clips
									key={i}
									imgsrc={val.imgsrc}
									clip={val.clip}
								/>
							))}
						</div>
						{/* social links */}
						<div className="grid gap-3 items-center absolute top-[33vh] lg:top-[27vh] right-0">
							{sociallinks?.map((val, i) => (
								<SocialLinks key={i} icon={val.icon} />
							))}
						</div>
					</div>
					{/* image */}
					<div>
						<img
							src={img}
							alt="hero-img/img"
							className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] cursor-pointer transitions-theme -rotate-[25deg] hover:rotate-0 object-fill "
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
