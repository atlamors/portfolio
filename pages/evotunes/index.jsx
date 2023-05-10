import { useState, useEffect } from "react";

import Section from "../../components/structure/section";
import Container from "../../components/structure/container";

import css from "../../styles/sections/icons/iconForm.module.scss";
import formCss from "../../styles/sections/evotunes/forms.module.scss";

export default function PageWithJSbasedForm() {

	const [generatedHtml, setGeneratedHtml] = useState("");

	// Handles the submit event on form submit.
	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		// Get data from the form.
		const data = {
			signOff: event.target.signOff.value,
			fullName: event.target.name.value,
			positionTitle: event.target.positionTitle.value,
			phoneNumber: event.target.phoneNumber.value,
			companyName: event.target.companyName.value,
		};

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data);

		// API endpoint where we send form data.
		const endpoint = "/api/evotunes-signature";

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options);

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json();

		console.log(result);

		// Generate the HTML using the submitted data
		const html = generateHtml(data);

		// Update the state with the new generated HTML
		setGeneratedHtml(html);
	};

	useEffect(() => { }, []);

	const generateHtml = (data) => {

		switch (data.companyName) {
			case "Evo Tunes Inc.":
				data.companyLogo = "https://cdn.evotunes.ca/email/logos/evo-tunes-logo@200px.png";
				data.companyUrl = false;
				data.logoWidth = 200;
				break;
			case "Black Bandit":
				data.companyLogo = "https://cdn.evotunes.ca/email/logos/black-bandit-logo@200px.png";
				data.companyUrl = 'https://www.blackbandit.com/';
				data.logoWidth = 200;
				break;
			case "Evo Performance":
				data.companyLogo = "https://cdn.evotunes.ca/email/logos/evo-performance-logo@300px.png";
				data.companyUrl = 'https://www.evoauto.com/';
				data.logoWidth = 300;
				break;
			case "Tuner Depot":
				data.companyLogo = "https://cdn.evotunes.ca/email/logos/tuner-depot-logo@200px.png";
				data.companyUrl = 'https://www.tunerdepot.com/';
				data.logoWidth = 200;
				break;
		}

		if ( data.companyUrl ) {
			data.companyLink = `<svg style="margin-right: 6px;" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="link-simple" class="svg-inline--fa fa-link-simple " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M160 256c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"></path><path class="fa-primary" fill="currentColor" d="M160 96C71.6 96 0 167.6 0 256s71.6 160 160 160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-53 0-96-43-96-96s43-96 96-96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H160zm256 0H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96 43 96 96s-43 96-96 96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c88.4 0 160-71.6 160-160s-71.6-160-160-160z"></path></g></svg><a href="${data.companyUrl}" style="color:#131217">${data.companyName}</a>`;
		} else {
			data.companyLink = ``;
		}

		let generatedHtml = 
		`<div>Regards,
			<table cellpadding="0" cellspacing="0" style="color:#000;vertical-align:-webkit-baseline-middle;font-family:Arial;0;padding-top:23px;background-color:rgba(0,0,0,0)">
				<tbody>
					<tr>
						<td>
							<table cellpadding="0" cellspacing="0" height="109" style="margin:24px;vertical-align:-webkit-baseline-middle;width:400px">
								<tbody>
									<tr>
										<td style="vertical-align:top;width:101px">
											<table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle">
												<tbody>
													<tr style="display:block;width:${data.logoWidth/2}px;height:100px">
														<td style="text-align:center">
															<img src="${data.companyLogo}" alt="Evo Tunes Inc." role="presentation" width="${data.logoWidth/2}" height="100">
														</td>
													</tr>
												</tbody>	
											</table>
										</td>
										<td style="width:18px">
										</td>
										<td style="padding:0 0 0 23px;vertical-align:middle;border-left:1px solid #c3c2c7;width:215px">
											<h3 style="margin:0;font-size:18px;color:#131217">${data.fullName}</h3>
											<p style="margin:0;color:#888;font-size:14px;line-height:22px">${data.positionTitle}</p>
											<p style="margin:0;color:#131217;font-size:14px;line-height:22px">
												<a href="tel:${data.phoneNumber}" style="color:#131217"><svg style="margin: 0 6px -1px 0; height: 14px;" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="phone" class="svg-inline--fa fa-phone " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M497.3 447.1l9.786-42.41l-175.1-70.4l-27.1 33.18L497.3 447.1zM144.5 207.1L177.6 180.8L107.3 4.884L64.88 14.67L144.5 207.1z"></path><path class="fa-primary" fill="currentColor" d="M507.1 404.7l4.086-17.7c3.405-14.69-4.207-29.69-18.12-35.79L384.6 304.7c-12.78-5.436-27.69-1.774-36.47 8.975l-16.98 20.62L507.1 404.7zM0 54.5c-.0014 252.2 205.2 457.5 457.5 457.5c14.65 0 27.21-9.969 30.46-24.22l9.378-40.66l-193.3-79.63C234.8 333.5 178.5 277.2 144.5 207.1L64.88 14.67L24.22 24.05C9.967 27.32-.0014 39.83 0 54.5zM198.3 163.9c10.78-8.687 14.51-23.67 8.98-36.45L160.8 18.92C154.8 5.017 139.6-2.568 124.1 .8048L107.3 4.884L177.6 180.8L198.3 163.9z"></path></g></svg>${data.phoneNumber}</a>
											</p>
											<p style="margin:0;color:#131217;font-size:14px;line-height:22px">${data.companyLink}</p>
										</td>
									</tr>
								</tbody>
							</table>
							<table style="vertical-align:-webkit-baseline-middle;padding-top:23px">
								<tbody>
									<tr>
										<td width="425" style="width:425px;">
											<p style="font-size:8px">Confidentiality Notice: This document is confidential and may contain proprietary information and intellectual property of ${data.companyName}. Neither this document nor any of the information contained herein may be reproduced or disclosed under any circumstances without the express written permission of ${data.companyName}. Please be aware that disclosure, copying, distribution, or use of this document and the information contained therein is strictly prohibited.</p>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>`;

		return generatedHtml.replace(/[\t\n]+/g, '');

	};

	return (
		<Section classProp={`${css.section} borderBottom`}>
			<br /><br />
			<Container spacing={["verticalXLrg"]}>
				<h3>Email Signature Generator</h3>
				<form onSubmit={handleSubmit} className={`${formCss.form}`}>
					<ul>
						<li className={formCss.companySelect}>
							<select id="companyName" name="companyName" required>
								<option value="">Select a company</option>
								<option value="Evo Tunes Inc.">Evo Tunes Inc.</option>
								<option value="Black Bandit">Black Bandit</option>
								<option value="Evo Performance">Evo Performance</option>
								<option value="Tuner Depot">Tuner Depot</option>
							</select>
						</li>
						<li>
							<label htmlFor="signOff">Email sign-off:</label>
							<input
								placeholder="Regards,"
								type="text"
								id="signOff"
								name="signOff"
								defaultValue="Regards, "
								required
							/>
						</li>
						<li>
							<label htmlFor="fullName">Name:</label>
							<input
								placeholder="Jon Doe"
								type="text"
								id="name"
								name="name"
								required
							/>
						</li>
						<li>
							<label htmlFor="positionTitle">Position title:</label>
							<input
								placeholder="Senior Latte Engineer"
								type="text"
								id="positionTitle"
								name="positionTitle"
								required
							/>
						</li>
						<li>
							<label htmlFor="phoneNumber">Phone number</label>
							<input
								placeholder="+1-555-555-5555"
								type="text"
								id="phoneNumber"
								name="phoneNumber"
								required
							/>
						</li>
					</ul>
					<button className={`${css.button} button`} type="submit">
						Submit
					</button>
				</form>
				<div className={formCss.results} dangerouslySetInnerHTML={{ __html: generatedHtml }}>
				</div>
				<div className={`${css.results} ${formCss.code}`}>
					<pre>
						{generatedHtml}
					</pre>
				</div>
			</Container>
		</Section>
	);
}
