import Link from 'next/link'

export default function HeaderBanner() {
  return (
    
		<div className="flex justify-center w-full bg-black text-white text-sm z-10 opacity-80 border-t-2 border-b-2 border-white">
			<p className="p-2">
				We're committed to helping organizations stay secure during COVID-19 with&nbsp;
				<Link
					href="security-resources-for-coronavirus-covid-19-affected-businesses"
				>
					<a className="underline">security resources and tools.</a>
				</Link>
			</p>
		</div>
  
  )
}