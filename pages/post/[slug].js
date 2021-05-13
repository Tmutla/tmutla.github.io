import Link from 'next/link'
import Head from 'next/head'

import Header from '/component/Header/Header'
import HeroTitle from '/component/HeroTitle/HeroTitle'
import Footer from '/component/Footer/Footer'

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = props
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
						title={title}
					/>
			
					<section class='flex max-w-full mt-12 my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
						<div class='flex items-center w-full'>
							<div class='w-full'>
								<div class="flex flex-row mt-2 px-2 py-3 mx-3">
									<div class="w-auto h-auto rounded-full border-2 border-pink-500">
										{authorImage && (
											<div>
												<img
													class='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar'
													src={urlFor(authorImage)
														.width(50)
														.url()}
												/>
											</div>
										)}
									</div>
									<div class="flex flex-col mb-2 ml-4 mt-1">
										<div class='text-gray-600 text-sm font-semibold'>{name}</div>
										<div class='flex w-full mt-1'>
											<div class='text-gray-400 font-base text-xs mr-1 cursor-pointer'>
												{categories && (
													<ul className="flex">
														Posted in: 
														{categories.map(category => <li className="ml-2" key={category}>{category}</li>)}
													</ul>
												)}
											</div> 
											{/* <div class='text-gray-400 font-thin text-xs'>
												• 30 seconds ago
											</div> */}
										</div>
									</div>
								</div>
								<div class="border-b border-gray-100"></div> 
								{/* <div class='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded" src="https://picsum.photos/536/354" /></div> */}
								<div class='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>{title}</div>
								<div class='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>
									<BlockContent
										blocks={body}
										imageOptions={{ w: 320, h: 240, fit: 'max' }}
										{...client.config()}
									/>
								</div>
						
							
							</div>
						</div>
					</section>
				
					
				</main>

				<Footer />

		</div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post