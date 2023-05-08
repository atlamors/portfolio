export default function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body;

	// Optional logging to see the responses
	// in the command line where next.js app is running.
	console.log('body: ', body);

	// Guard clause checks for required fields,
	// and returns early if they are not found
	if (
		!body.signOff ||
		!body.fullName ||
		!body.positionTitle ||
		!body.phoneNumber ||
		!body.companyName ||
		!body.websiteUrl
	) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: 'Please fill out all fields' });
	}

	// Found the data.
	// Sends a HTTP success code
	res.status(200).json({
		signOff: body.signOff,
		fullName: body.fullName,
		positionTitle: body.positionTitle,
		phoneNumber: body.phoneNumber,
		companyName: body.companyName,
		websiteUrl: body.websiteUrl,
	});
}