const menuLinks = [
  {
    name: 'SERVICES',
    description: 'Get a better understanding of the sericves Tmutla offers.',
    href: '/services',
    icon: ChartBarIcon,
  },
  {
    name: 'EVENTS',
    description: 'Participate in one of our events, ask questions, get involved, and learn.',
    href: '/events',
    icon: CursorClickIcon,
  },
  {
    name: 'BLOG',
    description: "See what we have been up to through out industry insights.",
    href: '/blog',
    icon: ViewGridIcon,
  },
  {
    name: 'RESOURCES',
    description: 'Build your knowledge through our expertise',
    href: '/resources',
    icon: RefreshIcon,
  },
	{
    name: 'ABOUT',
    description: 'Learn about us, who we are, and what we do',
    href: '/about',
    icon: RefreshIcon,
  },
	{
    name: 'CONTACT',
    description: 'Reach out and contact us',
    href: '/contact',
    icon: RefreshIcon,
  },
]

export default function Products() {
	return (
		<section class="">
			
			<div class="grid justify-items-center grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

				
				<a href="./solutions/program-compliance-assessment.html" class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
					<div class="text-white flex items-center absolute py-4 px-4 shadow-xl bg-red left-4 -top-6">
					
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div class="mt-16 flex flex-col">
						<p class="text-xl font-semibold">PROGRAM ASSESSMENT + COMPLIANCE</p>
					</div>
				</a>

				
				<a href="./solutions/cybersecurity-testing-analysis.html" class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
					<div class="text-white flex items-center absolute py-4 px-4 shadow-xl bg-red left-4 -top-6">
						
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
						</svg>
					</div>
					<div class="mt-16 flex flex-col">
						<p class="text-xl font-semibold ">SECURITY TESTING + ANALYSIS</p>
					</div>
				</a>

			
				<a href="./solutions/cybersecurity-program-management.html" class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
					<div class="text-white flex items-center absolute py-4 px-4 shadow-xl bg-red left-4 -top-6">
						
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
					</div>
					<div class="mt-16 flex flex-col">
						<p class="text-xl font-semibold">SECURITY PROGRAM MANAGEMENT</p>
					</div>
				</a>
								
			
				<a href="./solutions/cybersecurity-incident-response-forensics.html" class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
					<div class=" text-white flex items-center absolute py-4 px-4 shadow-xl bg-red left-4 -top-6">
						
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
						</svg>
					</div>
					<div class="mt-16 flex flex-col">
						<p class="text-xl font-semibold">INCIDENT RESPONSE + FORENSICS</p>
					</div>
				</a>

		
				<a href="./solutions/remediation-assistance-training.html" class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
					<div class=" text-white flex items-center absolute py-4 px-4 shadow-xl bg-red left-4 -top-6">
						
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
						</svg>
					</div>
					<div class="mt-16 flex flex-col">
						<p class="text-xl font-semibold">REMEDIATION ASSISTANCE + TRAINING</p>
					</div>
				</a>

			</div>
		
		</section>

	)
}
