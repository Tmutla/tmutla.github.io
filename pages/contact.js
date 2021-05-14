import Link from 'next/link'
import Head from 'next/head'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import ContactForm from '/component/ContactForm/ContactForm'
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
					title="CONTACT"
				/>
				
				{/* <ContactForm /> */}
				

      </main>

			<Footer />

    </div>
  )
}

