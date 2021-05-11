import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

export default function Blog (props) {
    const { posts = [] } = props
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
						title="Blog"
					/>

					<section class="text-gray-600 body-font">
						<div class=" px-5 mx-auto flex flex-col">
							{posts.map(
								({ _id, title = '', slug = '', _updatedAt = '' }) =>
									slug && (
										<li key={_id}>
											<Link href="/post/[slug]" as={`/post/${slug.current}`}>
												<a>{title}</a>
											</Link>{' '}
											({new Date(_updatedAt).toDateString()})
										</li>
									)
							)}
						</div>
					</section>

					
      	</main>

				<Footer />

			</div>
    )
}

Blog.getInitialProps = async () => ({
    posts: await client.fetch(groq`
			*[_type == "post"]|order(publishedAt asc)
    `)
})