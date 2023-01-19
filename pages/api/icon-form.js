export default function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body
	
	// Optional logging to see the responses
	// in the command line where next.js app is running.
	console.log('body: ', body)
	
	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body.prefix || !body.icon) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: 'Please fill out both fields' })
	}
	
	// Found the name.
	// Sends a HTTP success code
	res.status(200).json({ prefix: body.prefix, icon: body.icon })
}