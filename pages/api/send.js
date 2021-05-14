const sendgrid = require('@sendgrid/mail')

export default async function(request, response) {

	sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

	const { name, company, email, phone, message } = request.body

	const content = {
		to: ['info@tmutla.com'],
		from: 'hello@joelcorey.com',
		subject: `${email} - Tmutla.com contact form!`,
		text: `${name} ${company} ${email} ${phone} ${message}`,
		html: 
			`
				<p>${name} has submitted the contact form through Tmutla.com/contact!</p>
				<p>Company: ${company}</p>
				<p>Email: ${email}</p>
				<p>Phone: ${phone}</p>
				<p>And there message is as follows:</p>
				<p>${message}</p>
			`
	}

	try {
    await sendgrid.send(content)
    response.status(200).send('Message sent successfully.')
  } catch (error) {
		if (error.response) {
			console.error(error);
			console.error(error.response.body)
		} 

    console.log('ERROR', error)
    response.status(400).send('Message not sent.')
  }
}