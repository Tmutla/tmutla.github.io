export default function HeroTitle(props) {

	const { title } = props

	return (
		<div class="relative h-vh-20 pb-10">
			
			<div class="absolute hero-overlay w-full h-48"></div>
			<div class="absolute w-full h-48 bg-gradient-to-r from-red to-transparent opacity-90"></div>
			<div class="absolute hero-spacer-1 w-full h-48 -z-10"></div>
			<div class="absolute w-full h-48 border-b-2 border-black "></div>

			
			<div class="absolute w-full h-full flex flex-col place-content-center">
				
				<p class="pr-12 m-5 text-4xl text-white text-opacity-85">
					{title}
				</p>

			</div>
		</div>
	)
}
