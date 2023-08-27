import woman from "../img/contact/woman.png";
import { transition1 } from "../transitions";
import { motion } from "framer-motion";

function Contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
			className="section bg-white"
		>
			<div className="container mx-auto w-full h-full">
				{/* wrapper */}
				<div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-x-8 lg:text-left text-center pt-56 z-10">
					{/* bg */}
					<div className="hidden lg:flex bg-[#eef7f9] absolute right-0 left-0 bottom-0 top-72 -z-10"></div>
					{/* text and form */}
					<div className="lg:flex-1 px-4">
						<h1 className="h1">Contact Me</h1>
						<p className="mb-4">
							I would love to get suggestions from you
						</p>
						<form>
							<div className="flex gap-x-10">
								<input
									className="outline-none border-b border-b-primary h-[30px] w-full bg-transparent font-secondary pl-3 placeholder:text-[#757879]"
									type="text"
									placeholder="Your Name"
								/>
								<input
									className="outline-none border-b border-b-primary h-[30px] w-full bg-transparent font-secondary pl-3 placeholder:text-[#757879]"
									type="email"
									placeholder="Your Email Address"
								/>
							</div>
							<input
								className="outline-none border-b border-b-primary h-[36px] w-full bg-transparent font-secondary pl-3 mt-5 mb-5 placeholder:text-[#757879]"
								type="text"
								placeholder="Message"
							/>
							<button
								className="btn
mx-auto mb-[30px] lg:mb-[60px]"
							>
								Send It
							</button>
						</form>
					</div>
					{/* image */}
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ transition: transition1, duration: 1.5 }}
						className="lg:flex-1 max-h-96 lg:max-h-fit lg:mt-40"
					>
						<img className="object-cover" src={woman} alt="" />
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
