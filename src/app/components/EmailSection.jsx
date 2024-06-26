import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
			<div>
				<h5 className="text-xl font-bold text-white my-2">
					Let's Connect!
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
				<form className="flex flex-col gap-4">
					<label htmlFor="email" className="text-white">
						Your Email:
					</label>
					<input
						type="email"
						id="email"
						required
						placeholder="example@example.com"
					/>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
