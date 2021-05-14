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
					title="Page Template"
				/>
				
				<section class="text-gray-600 body-font">
					<div class=" px-5 mx-auto flex flex-col">
					
					
					</div>
				</section>
			        
      </main>

			<Footer />

    </div>
  )
}
