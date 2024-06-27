'use client';
import React, {useState} from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	// const [submitFailure, setSubmitFailure] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = '/api/send';
		// FORM THE REQUEST FOR SENDING DATA TO THE SERVER
		const options = {
			// THE METHOD IS 'POST' BECAUSE WE ARE SENDING DATA
			method: 'POST',
			// TELL THE SERVER WE ARE SENDING 'JSON'
			headers: {
				'Content-Type': 'application/json',
			},
			// THE BODY OF THE REQUEST IS THE 'JSON' DATA WE CREATED ABOVE
			body: JSONdata,
		};
		const response = await fetch(endpoint, options);
		const resData = await response.json();
		console.log(resData);
		if (response.status === 200) {
			console.log('Message Sent');
			setEmailSubmitted(true);
		} /* else {
			console.log('Message failed to send');
			setSubmitFailure(true);
		} */
	};
	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect!
				</h5>
				<p className="text-[#adb7be] mb-4 max-w-md">
					{' '}
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Aliquid totam, in, eos fugit voluptatibus a voluptatum culpa
					harum aperiam eum nam sapiente, minus praesentium
					perspiciatis iusto eaque! Tenetur, nostrum sequi!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/FunKodeT">
						<Image src={GithubIcon} alt="github_icon" />
					</Link>
					<Link href="https://linkedin.com">
						<Image src={LinkedInIcon} alt="linkedin_icon" />
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium">
							Your Email:
						</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="example@example.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium">
							Subject:
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Just saying hello!"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium">
							Message:
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="What would you like to talk about?"></textarea>
					</div>
					<button
						type="submit"
						className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
						Send Message
					</button>
					{emailSubmitted && (
						<p className="text-green-500 text-sm mt-2">
							Email successfully sent!
						</p>
					)}
					{/* 					<span>
						{emailSubmitted && (
							<p className="text-green-500 text-sm mt-2">
								Email successfully sent!
							</p>
						)}
						{submitFailure && (
							<p className="text-red-500 text-sm mt-2">
								Something went wrong
							</p>
						)}
					</span> */}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
