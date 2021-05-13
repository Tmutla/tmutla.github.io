import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

const serviceLinks = [
	{
    name: 'Business Risk Assessment',
    description: '',
    href: '/services/business-risk-assessment',
  },
	{
    name: 'CMMC Readiness Review',
    description: '',
    href: '/services/cmmc-readiness-review',
  },
	{
    name: 'Cybersecurity Program Maturity Assessment',
    description: '',
    href: '/services/cybersecurity-program-maturity-assessment',
  },
	{
    name: 'GDPR & Privacy Compliance Assessment',
    description: '',
    href: '/services/gdpr-privacy-compliance-assessment',
  },
	{
    name: 'HIPAA, NIST, CIS20, SOC, ISO 27001 Security Assessments',
    description: '',
    href: '/services/hipaa-nist-cis20-soc-iso-27001-security-assessments',
  },
	{
    name: 'Information Security Program Assessment',
    description: '',
    href: '/services/information-security-program-assessment',
  },
	{
    name: 'Office 365 Security Assessment',
    description: '',
    href: '/services/office-365-security-assessments',
  },
	{
    name: 'OpSec Performance Maturity Assessment',
    description: '',
    href: '/services/operational-performance-maturity-assessment',
  },
	{
    name: 'Payment Card Industry (PCI) Security Assessment',
    description: '',
    href: '/services/payment-card-industry-security-assessment',
  },
	{
    name: 'Remote Worker Assessment',
    description: '',
    href: '/services/remote-worker-assessment',
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
					title="PROGRAM ASSESSMENT & COMPLIANCE"
				/>
				

				<section class="text-gray-600 body-font">
					<div class=" px-5 mx-auto flex flex-col">
					
						<div class="flex flex-col sm:flex-row mt-10">

								<div class="sm:w-2/3 border-gray-200 sm:mt-0 text-left pr-4">
									<p class="leading-relaxed text-lg mb-4">
										Tmutla helps organizations drive business performance and transform how they perceive and manage risk with our program assessment and compliance services. Because businesses are relying more and more on automation and IT, protecting data and system availability is a must. Having trust and confidence in your Information Security program can directly transfer into improved productivity, availability, and assurance. Measuring the maturity of your program with experienced partners on hand to help develop your program will greatly improve the performance of your Information Security program and risk management capabilities.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										Because technology, attacks, and business initiatives are changing all the time, conducting an assessment allows organizations to baseline their current state. Establishing this standard is important to not only provide a prioritized roadmap, but to also show progress to executives from an unbiased expert. This roadmap allows organizations to seize opportunities, stay a step ahead of uncertainty, and meet stakeholder expectations. By aligning the organizations’ compliance activities to business performance drivers, the security program is transformed from a reactive, check-the-box exercise into a powerful tool able to anticipate and mitigate risk to drive business performance.
									</p>
									<p class="leading-relaxed text-lg mb-4">
										Unlike other firms, Tmutla employs deep technical insights and real-world security experience, allowing us to more effectively create a roadmap to manage and reduce an organization’s risk. By using a common-sense approach and working to narrow the scope of compliance, we are able to provide practical, usable advice and direction.
									</p>
								</div>					
								
								<div class="sm:w-1/3 sm:pr-8 pl-4">

									<p class="text-lg pb-2">
										PROGRAM ASSESSMENT & COMPLIANCE SERVICES
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
