import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

const serviceLinks = [
  {
    name: 'Cybersecurity Threat Hunting',
    description: '',
    href: '/services/cybersecurity-threat-hunting',
  },
  {
    name: 'Incident Response Playbook Development',
    description: '',
    href: '/services/incident-response-playbook-development',
  },
  {
    name: 'Incident Response Program Assessment',
    description: '',
    href: '/services/incident-response-program-assessment',
  },
  {
    name: 'Incident Response/Forensics Services',
    description: '',
    href: '/services/cybersecurity-incident-response-plan',
  },
	{
    name: 'Malware Analysis and Reports',
    description: '',
    href: '/services/malware-analysis-reports',
  },
	{
    name: 'Microsoft Exchange Incident Response Emergency Analysis',
    description: '',
    href: '/services/microsoft-exchange-incident-response-emergency-analysis',
  },
	{
    name: 'Tabletop Exercises for Incident Response Programs',
    description: '',
    href: '/services/table-top-exercises-incident-response',
  },
	{
    name: 'Technical Surveillance Counter-Measures (TSCM)',
    description: '',
    href: '/services/technical-counter-surveillance-measures',
  },
]

export default function Page() {
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
					title="CYBERSECURITY INCIDENT RESPONSE & FORENSICS"
				/>
				

				<section class="text-gray-600 body-font">
					<div class=" px-5 mx-auto flex flex-col">
					
						<div class="flex flex-col sm:flex-row mt-10">

								<div class="sm:w-2/3 border-gray-200 sm:mt-0 text-left pr-4">
									<p class="leading-relaxed text-lg mb-4">
										Cybersecurity risk affects organizations and corporations of all sizes and industry verticals. Developing and maintaining an effective Information Security strategy can be difficult without dedicated security talent, including leadership. Tmutla offers security program management services that are a blend of program management and technical assessments to allow organizations to make better decisions that executives can understand and support.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										An organization’s internal capabilities are constantly changing. Additionally, the  capabilities of threat-actors are continually improving. As a result, businesses are investing more time, effort, and resources to reduce risks to the business. Tmusla's goal is to help companies develop prioritized strategies, and to focus on a continual improvement process of the Information Security program. Tmutla helps develop a custom, individual security strategy, as well as objective program measurements. The resulting initiatives reduce business risk, improve availability, and allow the organization to focus on key business activities.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										Tmutla’s experienced, senior-level consultants work seamlessly with organizations to help make decisions that contribute to the reduction of business risks and overall business resiliency.
									</p>
								</div>					
								
								<div class="sm:w-1/3 sm:pr-8 pl-4">

									<p class="text-lg pb-2">
										Cybersecurity Incident Response & Forensics Services
									</p>

									<div class="flex flex-col text-left">
										
										<ul class="flex flex-col text-base">

											{serviceLinks.map((item) => (
												<li>
													<Link
														key={item.name}
														href={item.href}
														className="pointer -m-3 p-3 flex items-start hover:bg-gray-50"
													>
														<a class="inline-block text-gray-600 hover:text-gray-medium underline pb-2">
															{item.name}
														</a> 
													</Link>
												</li>
											))}
										
										</ul>

									</div>

								</div>
								
						</div>
					</div>
				</section>
			        
      </main>

			<Footer />

    </div>
  )
}
