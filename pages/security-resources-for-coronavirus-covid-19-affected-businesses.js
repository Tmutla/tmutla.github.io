import Link from 'next/link'
import Head from 'next/head'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

export default function Page() {
  return (
    <div className="">
      <Head>
        <title>Security Resources | Tmutla</title>
        <meta property="title" content="Tmutla Cybersecurity" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
			
				<Header />

				<HeroTitle
					title="Security Resources for Coronavirus (Covid-19) Affected Businesses"
				/>
				
				<section className="text-gray-600 body-font mt-10">
					<div className="px-5 mx-auto flex flex-col">	

						<p className="m-4">
							In light of the major changes to workforces and technology, we’ve developed a number of resources to assist organizations that have been forced to change their normal operations and are faced with new security challenges.
						</p>

						<p className="m-4">
							In addition to the content below written on this subject, we encourage anyone to join our and <a href="https://discord.gg/WwjsWUet">Discord server</a>. You’ll find even more industry resources within these communities and are great places to ask questions and get assistance.
						</p>

						<p className="m-4">
							Blog posts specific to this are pending.
						</p>
					
					</div>
				</section>
			        
      </main>

			<Footer />

    </div>
  )
}
