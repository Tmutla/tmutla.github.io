function HeroBlockIntro() {
	return (
		<section class="w-screen">
			<div class="relative h-vh-60 pb-10">
				{/* overlay effect */}
				<div class="absolute hero-overlay w-full h-full -z-10"></div>
				<div class="absolute bg-hero-soldier-computer-2 bg-cover w-full h-full -z-20"></div>
				<div class="absolute w-full h-full bg-gradient-to-r from-red to-transparent opacity-90"></div>

				{/* content */}
				<div class="mt-12 absolute w-full h-full flex flex-col place-content-center">
					
						<p class="pr-12 max-w-xl m-5 text-5xl text-black text-opacity-85">
							Evolve beyond threats
						</p>
						<div class="max-w-2xl border-t-4 border-solid border-red">
						
							<p class="max-w-2xl m-5 text-2xl leading-10 text-white-dark text-opacity-85">
								As security threats increase in sophistication and complexity, trying to keep up can mean falling behind. Strengthening your security program requires foresight into when, where, and how attacks will occur.
							</p>
							<p class="max-w-2xl m-5 text-2xl leading-10 text-white-dark text-opacity-85">
								Tmutla is a full-service Information Security consulting team dedicated to helping you prioritize what matters to decrease risk and evolve your business beyond threats.
							</p>
						</div>
					
				</div>
			</div>
		</section>
	)
}

export default HeroBlockIntro