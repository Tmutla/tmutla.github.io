import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

const iconDimensions = 'w-16 h-16'
const resourceLinks = [
  {
		title: 'FEATURED CONTENT',
    name: 'BLOG',
    icon: <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
					</div>,
		description: `With how-tos, zero-days, and other original pieces of infosec knowledge, our blog is a great resource for anyone interested in learning more about infosec and what our consultants are up to.`,
    hrefTitle: 'BROWSE THE BLOG',
		href: '/services',
  },
  {
		title: 'FEATURED CONTENT',
    name: 'IN THE NEWS',
    icon: <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
							<circle cx="6" cy="6" r="3"></circle>
							<circle cx="6" cy="18" r="3"></circle>
							<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
						</svg>
					</div>,
		description: `Tmutla's consultants are regular contributors to media outlets for security and privacy news. Check out the latest stories that our team has been featured in.`,
		hrefTitle: 'READ THE NEWS',
    href: '/news',
  },
  {
		title: '',
    name: 'ONLINE TRAINING',
    icon:  <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>,
		description: `Tmutla's fully online training offerings are designed to be some of the most effective instructor-led and live courses available today.`,
		hrefTitle: 'LEARN HOW TO ENROLL',
    href: '/solutions/remediation-assistance-training',
  },
  {
		title: '',
    name: 'WEBINARS',
    icon: <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
						</svg>
					</div>,
		description: `Our live webinars cover a broad variety of information security topics. Watch as our experts conduct a deep-dive on popular topics and answer audience questions live.`,
		hrefTitle: 'WATCH THE WEBINARS',
    href: '/webinars',
  },
	{
		title: '',
    name: 'CASE STUDIES',
    icon:  <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
						</svg>
					</div>,
		description: `Embark on a journey through our clients’ security program transformations, collaborations, and success stories. See what we’ve been able to accomplish for organizations in all industries.`,
		hrefTitle: 'SEE THE CASE STUDIES',
    href: '/case-studies',
  },
	{
		title: '',
    name: 'TMUTLA PODCAST',
    icon:  <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
							</svg>
						</div>,
		description: `Our team records a regular podcast covering the latest security news and stories in an entertaining and informational discussion. Hear what our experts are thinking and talking about.`,
		hrefTitle: 'LISTEN TO PODCASTS',
    href: '/podcasts',
  },
	{
		title: '',
    name: 'OPEN SOURCE TOOLS',
    icon: <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
						</svg>
					</div>,
		description: `Tmutla develops tools available to use by anyone in order to educate and move the industry ahead. See what we’ve created and how they can help you.`,
		hrefTitle: 'EXPLORE THE TOOLS',
    href: '/tools',
  },
	{
		title: '',
    name: 'WHITE PAPERS',
    icon: <div className={iconDimensions + ' inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'}>
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
						</svg>
					</div>,
		description: `Our white papers provide insights on the latest trends and what to expect from the future of security. Get your latest security intelligence directly from our thought leaders.`,
		hrefTitle: 'GET YOUR COPY',
    href: '/white-papers',
  },
]

export default function Resources() {
  return (
    <div className="">
      <Head>
        <title>Tmutla Cybersecurity</title>
        <meta name="description" content="Tmutla Security" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
			
				<Header />
				
				<HeroTitle
					title="RESOURCES"
				/>
				
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Tmutla Resources</h1>
							<p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-left">Tmutla is dedicated to creating tools, events, and content that help make the world a more secure place. Browse our extensive resource library of expert blogs, the latest in cybersecurity news, top security trends, and transformative case studies to discover actionable security measures for your business. </p>
						</div>

						<div className="flex flex-wrap -m-4">

							{resourceLinks.map((item) => (
								// <Link
								// 	key={item.name}
								// 	href={item.href}
								// 	className="-m-3 p-3 flex items-center hover:bg-gray-50"
								// >
								// 	<a className="flex">
								// 		<item.icon className="flex-shrink-0 h-6 w-6 text-red-dark" aria-hidden="true" />
								// 		<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
								// 	</a>
								// </Link>
								<div className="xl:w-1/3 md:w-1/2 p-4">
									<div className="border border-gray-200 p-6 rounded-lg">
									
										{item.icon}
										<h2 className="text-lg text-gray-900 font-medium title-font mb-2">{item.name}</h2>
										<p className="leading-relaxed text-base">{item.description}.</p>
									</div>
								</div>
							))}
	
						</div>
						<button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
					</div>
				</section>
        
      </main>

			<Footer />

    </div>
  )
}


