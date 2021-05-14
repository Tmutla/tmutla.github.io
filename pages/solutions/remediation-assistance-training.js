import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

const serviceLinks = [
	{
    name: 'Active Directory Security Review',
    description: '',
    href: '/services/active-directory-security-review',
  },
	{
    name: 'Cloud Baseline Configuration Review',
    description: '',
    href: '/services/cloud-baseline-security-review',
  },
	{
    name: 'Custom Organizational Security Training',
    description: '',
    href: '/services/security-training',
  },
	{
    name: 'Endpoint Hygiene Automation',
    description: '',
    href: '/services/endpoint-hygiene-automation',
  },
	{
    name: 'Network Architecture Design & Review',
    description: '',
    href: '/services/network-architecture-security-review',
  },
	{
    name: 'Security Remediation Service Team',
    description: '',
    href: '/services/security-remediation-service-team',
  }	
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
				title="PROGRAM ASSESSMENT & COMPLIANCE"
			/>
		
			<section class="text-gray-600 body-font">
				<div class=" px-5 mx-auto flex flex-col">
				
					<div class="flex flex-col sm:flex-row mt-10">
	
						<div class="sm:w-2/3 border-gray-200 sm:mt-0 text-left pr-4">
							<p class="leading-relaxed text-lg mb-4">
								Learn directly from our security experts with online training courses
							</p>
							<p class="leading-relaxed text-lg mb-4">
								We’ve expanded our cutting edge training to help further educate and develop the Information Security industry. These fully online training offerings are designed to be some of the most effective instructor-led and live courses available today. Taught directly by Tmutla consultants and based on real-world tests and assessments, our courses offer a range of scenarios designed to be applicable in day-to-day security operations.
							</p>
							<p class="leading-relaxed text-lg mb-4">
								Our trainings and have been conducted at some of the best and largest security events around the world. For example, our BlackHat training courses are consistently some of the largest courses taught, and every year and our ratings continue to demonstrate the quality and knowledge of our team. With our online training, we want these courses to be the best available to anyone, anywhere.
							</p>
	
							{/* <!-- adapted from https://codepen.io/smeunus/pen/aGoMOx --> */}
							<div class="w-full mx-auto mt-16">
								
								<div class="tab w-full overflow-hidden border-t flex flex-col mb-2">
									<input class="absolute opacity-0" id="tab-multi-one" type="checkbox" name="tabs" />
									<label class="block p-2 bg-gray-light text-lg leading-normal cursor-pointer" for="tab-multi-one">Online Training Course - PowerShell for Offense and Defense</label>
									<div class="tab-content overflow-hidden leading-normal">
										
										<div class="w-11/12 shadow-lg rounded overflow-hidden m-4 sm:flex">
											<div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('https://unsplash.it/804/800')"}}>
											</div>
											
											<div class="px-6 py-4">
												
												<p class="mb-4 text-grey-dark text-sm">
													Tmutla is bringing you PowerShell for Offense and Defense training from Ben Ten! Whether you are a penetration tester or a defender, there is one common tool that is used heavily by both teams—PowerShell. PowerShell has become an organization’s best friend and potentially its worst enemy. Take this course for a 2-day intensive dive into PowerShell.
												</p>
													
												<button class="py-3 px-6 bg-red hover:bg-purple-light text-white font-bold mt-1 mb-2">
													LEARN MORE
												</button>

												<ul class="flex flex-col list-disc text-base">
													<li>
														<a
															class="text-base text-gray hover:text-gray-light underline"
															href="services.html"
														>
															Enroll in PowerShell for Offense and Defense - Online Training July 22 - 23, 2021 9:00 am
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div class="tab w-full overflow-hidden border-t flex flex-col mb-2">
									<input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
									<label class="block p-2 bg-gray-light text-lg leading-normal cursor-pointer" for="tab-multi-two">Online Training Course - Sysinternals Sysmon Fundamentals</label>
									<div class="tab-content overflow-hidden leading-normal">
										
										<div class="w-11/12 shadow-lg rounded overflow-hidden m-4 sm:flex">
											<div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('https://unsplash.it/804/800')"}}>
											</div>
											
												<div class="px-6 py-4">
												
													<p class="mb-4 text-grey-dark text-sm">
														Tmutla is bringing you PowerShell for Offense and Defense training from Ben Ten! Whether you are a penetration tester or a defender, there is one common tool that is used heavily by both teams—PowerShell. PowerShell has become an organization’s best friend and potentially its worst enemy. Take this course for a 2-day intensive dive into PowerShell.
													</p>
													
													<button class="py-3 px-6 bg-red hover:bg-purple-light text-white font-bold mt-1 mb-2">
														LEARN MORE
													</button>

													<ul class="flex flex-col list-disc text-base">
														<li>
															<a
																class="text-base text-gray hover:text-gray-light underline"
																href="services.html"
															>
																Enroll in Mimikatz: Everything You Need to Know - Online Training June 10 - 11, 2021 9:00 am
															</a>
														</li>
														<li>
															<a
																class="text-base text-gray hover:text-gray-light underline"
																href="services.html"
															>
																Enroll in Sysinternals Sysmon Fundamentals - Online Training September 16 - 17, 2021 8:00 am
															</a>
														</li>
														<li>
															<a
																class="text-base text-gray hover:text-gray-light underline"
																href="services.html"
															>
																Enroll in Mimikatz: Everything You Need to Know - Online Training October 21 - 22, 2021 9:00 am
															</a>
														</li>
													</ul>
											</div>
										</div>
									</div>
								</div>
						
								<div class="w-full mx-auto mt-16">
									<p>FREQUENTLY ASKED QUESTIONS</p>
									<div class="tab w-full overflow-hidden border-t flex flex-col mb-2">
										
										<input class="absolute opacity-0" id="tab-faq-1" type="checkbox" name="tabs" />
										<label class="block p-2 bg-gray-light text-lg leading-normal cursor-pointer" for="tab-faq-1">What are the basic technical requirements to attend an online course?</label>
										<div class="tab-content overflow-hidden leading-normal">
											
											<div class="w-11/12 shadow-lg rounded overflow-hidden m-4 sm:flex">
												
												<div class="px-6 py-4">
												
													<p class="mb-2 mt-2 text-grey-dark text-base">
														To participate in an online training course, students will need:An internet connection – broadband wired or wireless (3G or 4G/LTE)
													</p>
	
													<ul class="flex flex-col list-disc text-base">
														<li>
															Speakers and a microphone – built-in or USB plug-in or wireless Bluetooth
														</li>
														<li>
															A webcam or HD webcam – built-in or USB plug-in
														</li>
														<li>
															Or, a HD cam or HD camcorder with video capture card
														</li>
														<li>
															Dual monitors are suggested to follow class and participate in labs simultaneously
														</li>
													</ul>
	
													<p class="mb-2 mt-2 text-grey-dark text-base">
														Student computers will need to be able to run one of the following operating systems:
													</p>
	
													<ul class="flex flex-col list-disc text-base">
														<li>
															macOS X with macOS 10.7 or later
														</li>
														<li>
															Windows 10
														</li>
														<li>
															Ubuntu 18.04 or higher
														</li>
														<li>
															Mint 20.1 or higher
														</li>
														<li>
															Red Hat Enterprise Linux 8.4 or higher
														</li>
														<li>
															CentOS 8 or higher
														</li>
														<li>
															Fedora 34 or higher
														</li>
													</ul>
	
													<p class="mb-2 mt-2 text-grey-dark text-base">
														Student’s computers will need to be able to support one of the following browsers::
													</p>
	
													<ul class="flex flex-col list-disc text-base">
														<li>
															Windows: Edge 12+, Firefox 27+,  Chrome 30+
														</li>
														<li>
															Mac: Safari 7+, Firefox 27+, Chrome 30+
														</li>
														<li>
															Linux: Firefox 27+, Chrome 30+
														</li>
													</ul>
														
												</div>
											</div>
										</div>
									</div>
								</div>
	
							</div>					
							
							<div class="sm:w-1/3 sm:pr-8 pl-4">
	
								<p class="text-lg pb-2">
									Remediation, Optimization & Training Services
								</p>
	
								<div class="flex flex-col text-left">
									
									<ul class="flex flex-col text-base">
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/advanced-managed-security-services.html"
											>
												Active Directory Security Review
											</a>
										</li>
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/cybersecurity-policy-development.html"
											>
												Cloud Baseline Configuration Review
											</a>
										</li>
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/cybersecurity-program-development.html"
											>
												Custom Organizational Security Training
											</a>
										</li>
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/virtual-ciso-services.html"
											>
												Endpoint Hygiene Automation
											</a>
										</li>
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/virtual-ciso-services.html"
											>
												Network Architecture Design & Review
											</a>
										</li>
										<li>
											<a
												class="inline-block text-gray-600 hover:text-gray-medium underline pb-2"
												href="../services/virtual-ciso-services.html"
											>
												Security Remediation Service Team
											</a>
										</li>		
									</ul>
	
								</div>
	
							</div>
							
						</div>
					</div>
				</div>
					
					
			</section>
		
				
		</main>


		</div>
  )
}
