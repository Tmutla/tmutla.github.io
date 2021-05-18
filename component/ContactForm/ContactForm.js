import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ContactForm(props) {

	const router = useRouter()

	const { contactTitle, contactMessage, message } = props;

	const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
		name: '',
		company: '',
    email: '',
		number: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

	useEffect(() => {

	// if (status.submitting) {
	// 	console.log('submitting')
	// }

	if (status.submitted) {
		setInputs({
			name: '',
			company: '',
			email: '',
			number: '',
			message: ''
		})

		setTimeout(() => {  router.push('/'); }, 2000);
	}

	}, [status.submitting, status.submitted])
	
	return (
		<section className="text-gray-600 body-font">

			<div class="container px-5 py-24 mx-auto">
			<div class="flex flex-col text-center w-full mb-12">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{contactTitle}</h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-base">{contactMessage}</p>
			</div>

				<form onSubmit={handleOnSubmit}>

					<div class="lg:w-1/2 md:w-2/3 mx-auto">
						<div class="flex flex-wrap -m-2">
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
									<input 
										type="text" 
										id="name" 
										name="name" 
										onChange={handleOnChange}
										required
										value={inputs.name}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-red text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="company" class="leading-7 text-sm text-gray-600">Company</label>
									<input 
										type="text" 
										id="company" 
										name="company" 
										onChange={handleOnChange}
										required
										value={inputs.company}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-red text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>
									<input 
										type="email" 
										id="email" 
										name="email" 
										onChange={handleOnChange}
										required
										value={inputs.email}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-red text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
									/>
								</div>
							</div>
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="number" class="leading-7 text-sm text-gray-600">Phone Number</label>
									<input 
										type="text" 
										id="number" 
										name="number" 
										onChange={handleOnChange}
										required
										value={inputs.number}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-red text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
									/>
								</div>
							</div>
							<div class="p-2 w-full">
								<div class="relative">
									<label for="message" class="leading-7 text-sm text-gray-600">{message}</label>
									<textarea 
										id="message" 
										name="message" 
										onChange={handleOnChange}
										required
										value={inputs.message}
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-red h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
									</textarea>
								</div>
							</div>
							<div class="p-2 w-full">
								<button 
									class="flex mx-auto text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-dark rounded text-lg"
								>
									{!status.submitting
									? !status.submitted
										? 'Submit'
										: 'Sent!'
									: 'Sending...'}
								</button>
							</div>

							<div>
								{status.info.error && (
									<div className="error">Error: {status.info.msg}</div>
								)}
								{!status.info.error && status.info.msg && (
									<div className="success">{status.info.msg}</div>
								)}
							</div>
							
							<div class="flex flex-col p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
								<a class="text-gray-700" href="mailto:info@tmutla.com">info@tmutla.com</a>
								<a class="text-gray-700" href="tel:1-888-713-9896">1-888-713-9896</a>
								{/* <p class="leading-normal my-5">49 Smith St.
									<br />Saint Cloud, MN 56301
								</p> */}
							</div>
						</div>	
					</div>

				</form>

			</div>

		</section>

	)
}