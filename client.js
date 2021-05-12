import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '9q06hskc', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
	apiVersion: '2021-05-12', // use current UTC date - see "specifying API version"!
  useCdn: true // `false` if you want to ensure fresh data
})