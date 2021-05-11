import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

export default function Blog (props) {
    const { posts = [] } = props
		console.log(posts)
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

					<section class="text-gray-600 body-font overflow-hidden">
						<div class="container px-5 py-24 mx-auto">
							<div class="-my-8 divide-y-2 divide-gray-100">

								{posts.map(
									({ _id, title = '', description = '', categories = '', slug = '', _updatedAt = '' }) =>
										slug && (

											<div class="py-8 flex flex-wrap md:flex-nowrap">
												<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
													{/* <span class="font-semibold title-font text-gray-700">Categories</span> */}
													<span class="mt-1 text-gray-500 text-sm">{new Date(_updatedAt).toDateString()}</span>
												</div>
												<div class="md:flex-grow">
													<h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
													<p class="leading-relaxed">description goes here</p>
													
													<a className="text-indigo-500 inline-flex mt-4">
														<Link href="/post/[slug]" as={`/post/${slug.current}`}>
															Learn More
														</Link>{' '}
														<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
															<path d="M5 12h14"></path>
															<path d="M12 5l7 7-7 7"></path>
														</svg>
													</a>
													
												</div>
											</div>
											
										)
								)}
							</div>
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