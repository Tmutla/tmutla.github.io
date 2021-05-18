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