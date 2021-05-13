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

					<section className="text-gray-600 body-font">
						<div className=" px-5 mx-auto flex flex-col">
						
							<article>
								<h1>{title}</h1>
								<span>By {name}</span>
								{categories && (
									<ul>
										Posted in
										{categories.map(category => <li key={category}>{category}</li>)}
									</ul>
								)}
								{authorImage && (
									<div>
										<img
											src={urlFor(authorImage)
												.width(50)
												.url()}
										/>
									</div>
								)}
								<BlockContent
									blocks={body}
									imageOptions={{ w: 320, h: 240, fit: 'max' }}
									{...client.config()}
								/>
							</article>

						</div>
					</section>
					
				</main>

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