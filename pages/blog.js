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

					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-24 mx-auto">
							<div className="-my-8 divide-y-2 divide-gray-100">

								{posts.map(
									({ _id, title = '', description = '', categories = '', slug = '', _updatedAt = '' }) =>
										slug && (

											<div className="py-8 flex flex-wrap md:flex-nowrap">
												<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
													<span className="font-semibold title-font text-gray-700">{categories[0].title}</span>
													<span className="mt-1 text-gray-600 text-sm">{new Date(_updatedAt).toDateString()}</span>
												</div>
												<div className="md:flex-grow">
													<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
													<p className="leading-relaxed">{description[0].children[0].text}</p>
													
													<a className="text-indigo-500 inline-flex mt-4">
														<Link href="/post/[slug]" as={`/post/${slug.current}`}>
															Learn More
														</Link>{' '}
														<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
			*[_type == "post"] {title, description, categories[]->{title}, slug, _updatedAt} |order(publishedAt asc)
    `)
})