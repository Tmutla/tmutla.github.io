/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const productLinks = [
  {
    name: 'PROGRAM ASSESSMENT + COMPLIANCE',
    description: '',
    href: '/solutions/program-compliance-assessment',
    icon: ChartBarIcon,
  },
  {
    name: 'SECURITY TESTING + ANALYSIS',
    description: '',
    href: '/solutions/cybersecurity-testing-analysis',
    icon: ShieldCheckIcon,
  },
  {
    name: 'SECURITY PROGRAM MANAGEMENT',
    description: '',
    href: '/solutions/cybersecurity-program-management',
    icon: ViewGridIcon,
  },
  {
    name: 'INCIDENT RESPONSE + FORENSICS',
    description: 'Build your knowledge through our expertise',
    href: '/solutions/cybersecurity-incident-response-forensics',
    icon: RefreshIcon,
  },
	{
    name: 'REMEDIATION ASSISTANCE + TRAINING',
    description: 'Learn about us, who we are, and what we do',
    href: '/solutions/remediation-assistance-training.html',
    icon: SupportIcon,
  }
]

export default function Products() {
	return (
		<section class="">
			
			<div class="grid justify-items-center grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

				{productLinks.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className="-m-3 p-3 flex items-start hover:bg-gray-50"
					>
						<div class="transition duration-500 ease-in-out transform hover:-translate-y-2 relative bg-white py-6 px-6 w-64 my-4 shadow-xl pb-16">
						
							<div class="absolute text-white flex items-center  py-4 px-4 shadow-xl bg-red left-4 -top-6">
								<item.icon className="flex-shrink-0 h-12 w-12 text-white" aria-hidden="true" />
							</div>
							<div class="mt-16 flex flex-col">
								<p class="text-xl font-semibold">{item.name}</p>
							</div>
						</div> 

					</Link>
				))}

			</div>
		
		</section>
	)
}
