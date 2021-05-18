import Link from 'next/link'

export default function HeaderBreachReport() {

	return (
		<div class="hidden md:flex flex-row items-center justify-end m-5 sm:hiden md:hidden lg:flex">
			<Link href="/report-breach">
				
				<button class="transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-110 p-3 bg-red text-black hover:bg-red-dark">REPORT A BREACH</button>
			</Link>
			<a class="p-3 pl-8" href="tel:1-800-123-4567">1-800-123-4567</a>
			
		</div>
	)
}

/*
	<Link
		key={item.name}
		href={item.href}
		className="-m-3 p-3 flex items-start hover:bg-gray-50"
	>
		<a className="flex">
			<item.icon className="flex-shrink-0 h-6 w-6 text-red" aria-hidden="true" />
			<div className="ml-4">
				<p className="text-base font-medium text-gray-900">{item.name}</p>
				<p className="mt-1 text-sm text-gray-500">{item.description}</p>
			</div>
		</a>
	</Link>
*/