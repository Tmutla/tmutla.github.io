import Link from 'next/link'
import Head from 'next/head'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

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
					title="Contact"
				/>
				

				<section className="text-gray-600 body-font">
					<div className="flex flex-col px-5 mx-auto">

						<p className="mt-10 mb-2 ml-2 mr-2">Get in contact with us today!</p>

						<p className="m-2"><a href="mailto:info@tmutla.com">info@tmutla.com</a></p>
						
						<p className="m-2"><a href="tel:1-888-713-9896">1-888-713-9896</a></p>
					
					</div>
				</section>
			        
      </main>

			<Footer />

    </div>
  )
}

