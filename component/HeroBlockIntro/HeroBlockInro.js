function HeroBlockIntro() {
	return (
		<section className="relative w-full h-vh-40 overflow-hidden">
			
				{/* overlay effect */}
				<div className="absolute w-full h-full hero-overlay -z-10"></div>
				<div className="absolute w-full h-full bg-hero-soldier-computer-2 bg-cover -z-20"></div>
				<div className="absolute w-full h-full bg-gradient-to-r from-red to-transparent opacity-90"></div>

				{/* content */}
				{/* <div className="mt-12 absolute w-full h-full flex flex-col place-content-center"> */}
				<div className="absolute w-full h-full">
					<p className="text-vw-6 md:text-vw-4 lg:text-vw-3 max-w-3xl m-5 text-vw-4 text-black text-opacity-85">
						Evolve beyond threats
					</p>
					<div className="text-vw-3 md:text-vw-2 lg:text-vw-2 max-w-xl border-t-4 border-solid border-red">
					
						<p className="m-5 leading-10 text-white-dark text-opacity-85">
							As security threats increase in sophistication and complexity, trying to keep up can mean falling behind. Strengthening your security program requires foresight into when, where, and how attacks will occur.
						</p>
						<p className="m-5 leading-10 text-white-dark text-opacity-85">
							Tmutla is a full-service Information Security consulting team dedicated to helping you prioritize what matters to decrease risk and evolve your business beyond threats.
						</p>
					</div>
				</div>
					
				{/* </div> */}
			
		</section>
	)
}

export default HeroBlockIntro