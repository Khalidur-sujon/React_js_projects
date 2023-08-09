export default function Hero() {
	return (
		<main className="hero container">
			<div className="hero-content">
				<h1>YOUR FEET DESERVE THE BEST</h1>
				<p>
					YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
					OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
					YOU WITH OUR SHOES.
				</p>
				<div className="hero-button">
					<button className="primary-btn">Shop Now</button>
					<button className="secondary-btn primary-btn">
						Category
					</button>
				</div>
				<div className="shopping">
					<p>Also Available On</p>
					<div className="brand-icon">
						<img src="/images/flipkart.png" alt="flipkart_icon" />
						<img src="/images/amazon.png" alt="amazon_icon" />
					</div>
				</div>
			</div>
			<div className="hero-image">
				<img
					src="../../public/images/shoe_image.png"
					alt="show_image"
				/>
			</div>
		</main>
	);
}
