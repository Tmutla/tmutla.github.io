module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			backgroundImage: theme => ({
			 'hero1': "url('/img/pexels-photo-1054397.jpeg')", 
			 'hero2': "url('/img/pexels-photo-5474284.jpeg')",
			 'hero3': "url('/img/pexels-photo-5483071.jpeg')",
			})
		}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
