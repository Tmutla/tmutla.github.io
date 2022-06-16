function Footer() {

	return (
		<footer className="relative w-full text-gray-600 body-font bg-gray hero-overlay text-white">

			<div className="relative h-vh-4 mt-12 z-20">

				{/*  overlay effect hero-spacer */}
				<div className="absolute w-full h-full hero-overlay"></div>
				<div className="absolute w-full h-full bg-gradient-to-r from-red to-transparent opacity-90"></div>
				<div className="absolute w-full h-full -z-10 hero-spacer-1"></div>
				<div className="absolute w-full h-full border-b-8 border-black "></div>

			</div>

			<div className="container px-5 py-24 mx-auto">
				<div className="flex  md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4 border-t-4 border-solid border-red ">
						<nav className="list-none mb-10 ">
							<li className="mt-4">
								<a className="hover:text-gray-light">SERVICES</a>
							</li>
							<li>
								<a className="hover:text-gray-light">EVENTS</a>
							</li>
							<li>
								<a className="hover:text-gray-light">BLOG</a>
							</li>
							<li>
								<a className="hover:text-gray-light">RESOURCES</a>
							</li>
							<li>
								<a className="hover:text-gray-light">ABOUT</a>
							</li>
							<li>
								<a className="hover:text-gray-light">CONTACT</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">

					</div>

					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						{/* this is a spacer */}
					</div>

					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<div className="pt-6 py-2 px-4 flex flex-col border-t-4 border-solid border-red">
							<p>Contact:</p>
							<a className="pt-3 w-full" href="tel:1-888-713-9896">1-888-713-9896</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
						<img src="/img/logo/logo-64x64.png" className="w-24" />
						<span className="ml-3 ">Tmutla</span>
					</a>
					<p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear()}{" "}Tmutla —
						<a href="https://twitter.com/TmutlaInc" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@TmutlaInc</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						{/* Facebook */}
						<a className="text-gray-500" href="https://www.facebook.com/Tmutla">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						{/* Twitter */}
						<a className="ml-12 text-gray-500" href="https://twitter.com/TmutlaInc">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						{/* LinkedIn */}
						<a className="ml-12 text-gray-500" href="https://www.linkedin.com/company/tmutla/">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-12 h-12" viewBox="0 0 24 24">
								<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
			<div className="bg-black h-vh-10 hero-overlay border-t-4 border-solid border-black"></div>
		</footer>
	)
}

export default Footer
