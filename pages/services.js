import Link from 'next/link'
import Head from 'next/head'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

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
					title="SERVICES"
				/>

				<section className="text-gray-600 body-font">
					<div className="flex flex-col px-5 mx-auto">

						<p className="text-xl mt-10 mb-2">Tmutla provides full-service security consulting for organizations of all sizes and types. From planning to testing to remediating, we take a holistic look at an organization’s business and how to address the most important security priorities.</p>

						{/* temp spacer */}
						<div className="m-4"></div>
					
						<p className="text-lg">Cybersecurity Testing & Analysis</p>
						<p>
							Completing a proper security assessment is typically the first step in identifying areas of exposure in clients’ security postures. By regularly conducting security testing and analysis on the overall environment, or more thoroughly on a specific area of focus, our team can give yours a clear picture of how well your security controls and integrated defenses are performing.
						</p>
					
						{/* temp spacer */}
						<div className="m-4"></div>

						<p className="text-lg">Program Assessment & Compliance</p>
						<p>
							Tmutla helps organizations drive business performance and transform how they perceive and manage risk with our program assessment and compliance services. Because businesses are relying more and more on automation and IT, protecting data and system availability is a must. Having trust and confidence in your Information Security program can directly transfer into improved productivity, availability, and assurance. Measuring the maturity of your program with experienced partners on hand to help develop your program will greatly improve the performance of your Information Security program and risk management capabilities.
						</p>
					
						{/* temp spacer */}
						<div className="m-4"></div>

						<p className="text-lg">Security Program Management</p>
						<p>
							Cybersecurity risk affects organizations and corporations of all sizes and industry verticals. Developing and maintaining an effective Information Security strategy can be difficult without dedicated security talent, including leadership. Tmutla offers security program management services that are a blend of program management and technical assessments to allow organizations to make better decisions that executives can understand and support.
						</p>

						{/* temp spacer */}
						<div className="m-4"></div>
					
						<p className="text-lg">Cybersecurity Incident Response & Forensics</p>
						<p>
							With perpetrators ranging from malicious insiders to international hackers, security breaches come in many forms. Tmutla’s Incident Response team assists clients in determining the WHAT, HOW, and WHEN of a breach, while developing a plan and process to contain and remediate the damage.
						</p>

						{/* temp spacer */}
						<div className="m-4"></div>
					
						<p className="text-lg">Remediation, Optimization & Training</p>
						<p>
							Tmutla’s Remediation Services are both the mechanic and copilot of an organization’s security vehicle—first helping the organization resolve issues and then staying on track going forward. As issues are uncovered, they are quickly (and efficiently) remediated by skilled consultants who have a thorough understanding of where the organization started, where it is going, and how it plans to get there.
						</p>
					
					</div>
				</section>
			        
      </main>

			<Footer />

    </div>
  )
}

