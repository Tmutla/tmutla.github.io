import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import Header from '/component/Header/Header'
import HeaderBanner from '/component/HeaderBanner/HeaderBanner'
import HeroBlockIntro from '/component/HeroBlockIntro/HeroBlockInro'
import Products from '/component/Products/Products'
import Footer from '/component/Footer/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tmutla</title>
        <meta name="description" content="Tmutla Security" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
			
				<Header />
				<HeaderBanner />
				 
				<div>
					Security Resources
				</div>
        
      </main>

			<Footer />

    </div>
  )
}
