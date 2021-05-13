import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

const serviceLinks = [
  {
    name: 'Attack Path Effectiveness Review',
    description: '',
    href: '/services/attack-path-effectiveness-review',
  },
  {
    name: 'Blue Team | Defensive Countermeasure Guidance',
    description: '',
    href: '/services/blue-team-defensive-countermeasure-guidance',
  },
  {
    name: 'Cloud Security Assessments',
    description: '',
    href: '/services/cloud-services-security-assessment',
  },
  {
    name: 'Hardware Device Security Assessment',
    description: '',
    href: '/services/hardware-device-security-assessment',
  },
	{
    name: 'Internet of Things Security Assessment',
    description: '',
    href: '/services/iot-security-review',
  },
	{
    name: 'Mergers & Acquisitions Threat Inheritance Assessment',
    description: '',
    href: '/services/mergers-acquisitions-security-assessment',
  },
	{
    name: 'Mobile Application Security Assessment',
    description: '',
    href: '/services/mobile-application-security-assessment',
  },
	{
    name: 'Penetration Testing',
    description: '',
    href: '/services/data-security-penetration-testing',
  },

	{
    name: 'Physical Security and TSCM',
    description: '',
    href: '/services/physical-security',
  },
	{
    name: 'Purple Team | Adversarial Detection & Countermeasures',
    description: '',
    href: '/services/purple-team-adversarial-detection-countermeasures',
  },
	{
    name: 'Red Team | Adversarial Attack Simulation',
    description: '',
    href: '/services/red-team-adversarial-attack-simulation',
  },
	{
    name: 'Social Engineering Attack',
    description: '',
    href: '/services/social-engineering-attack',
  },
	{
    name: 'Strong Password Audits',
    description: '',
    href: '/services/strong-password-audits',
  },
	{
    name: 'Threat Vulnerability Assessment',
    description: '',
    href: '/services/threat-vulnerability-assessment',
  },
	{
    name: 'Web Application Security Assessment',
    description: '',
    href: '/services/web-application-security-assessment',
  },
]

export default function Page() {
  return (
    <div className="">
      <Head>
        <title>Tmutla</title>
        <meta name="description" content="Tmutla Security" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
			
				<Header />

				<HeroTitle
					title="CYBERSECURITY TESTING & ANALYSIS"
				/>
				

				<section class="text-gray-600 body-font">
					<div class=" px-5 mx-auto flex flex-col">
					
						<div class="flex flex-col sm:flex-row mt-10">

								<div class="sm:w-2/3 border-gray-200 sm:mt-0 text-left pr-4">
									<p class="leading-relaxed text-lg mb-4">
										Completing a proper security assessment is typically the first step in identifying areas of exposure in clients’ security postures. By regularly conducting security testing and analysis on the overall environment, or more thoroughly on a specific area of focus, our team can give yours a clear picture of how well your security controls and integrated defenses are performing.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										Tmutla consultants are involved daily in planning, testing, engineering, and supporting operations with a clear focus on security for a wide range of environments and products, all while remaining vendor agnostic. Our Adversary Emulation, Threat & Research (AETR) team examines and develops innovative tactics that no one else has—allowing for the most advanced test available.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										Tmutla prides itself on a manual approach to technical security testing, which highlights the strength and knowledge of our consulting team rather than relying on automated solutions. The team consists of practitioners that are well respected in the security industry and have decades of experience. By giving our clients the most sophisticated testing available, we determine what findings are most important and provide the best information possible to understand the real-world effectiveness of their defenses.
									</p>
								</div>					
								
								<div class="sm:w-1/3 sm:pr-8 pl-4">

									<p class="text-lg pb-2">
										CYBERSECURITY TESTING & ANALYSIS
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
