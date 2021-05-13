function HeroBlockIntro() {
	return (
		<section className="relative w-full h-vh-50 overflow-hidden">
			
				{/* overlay effect */}
				<div className="absolute w-full h-full hero-overlay -z-10"></div>
				<div className="absolute w-full h-full bg-cover bg-center -z-20" style={{ backgroundImage: "url('/img/hero/location-grand-island-001-1200-462.jpg')" }}></div>
				<div className="absolute w-full h-full bg-gradient-to-r from-red to-transparent opacity-90"></div>

				{/* content */}
				{/* <div className="mt-12 absolute w-full h-full flex flex-col place-content-center"> */}
				<div className="absolute w-full h-full pt-4">
					<p className="m-2 text-vw-8 md:text-vw-4 lg:text-vw-3 m-5 text-vw-4 text-black text-opacity-85">
						Evolve beyond threats
					</p>
					<div className="leading-7 md:leading-6 text-vw-4 md:text-vw-3 lg:text-vw-2 2xl:text-vw-1 max-w-xl lg:max-w-4xl xl:max-w-5xl border-t-4 border-solid border-red">
					
						<p className="m-3 text-white-dark text-opacity-85">
							As security threats increase in sophistication and complexity, trying to keep up can mean falling behind. Strengthening your security program requires foresight into when, where, and how attacks will occur.
						</p>
						<p className="m-3 text-white-dark text-opacity-85">
							Tmutla is a full-service Information Security consulting team dedicated to helping you prioritize what matters to decrease risk and evolve your business beyond threats.
						</p>
					</div>
				</div>
					
				{/* </div> */}
			
		</section>
	)
}

export default HeroBlockIntro