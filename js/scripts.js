function slideout() {
	return {
		open: false,
		usedKeyboard: false,
		init() {
			this.$watch('open', value => {
				value && this.$refs.closeButton.focus()
				this.toggleOverlay()
			})
			this.toggleOverlay()
		},
		toggleOverlay() {
			document.body.classList[this.open ? 'add' : 'remove']('h-screen', 'overflow-hidden')
		}
	}
}

// When the user scrolls down 50px from the top of the document, resize the header's font size


window.onload = function () {
	window.onscroll = function() {scrollFunction()};

	let header = document.getElementById("header")

	function scrollFunction() {
		// console.log('hi')
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			header.classList.add("header-snap");
		} else {
			header.classList.remove("header-snap");
		}
	} 
}