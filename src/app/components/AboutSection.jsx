'use client';
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>ReactJS</li>
				<li>NextJS</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className="list-disc pl-2">
				<li>Olympus High School; Holladay, Utah</li>
				<li>
					Signals Intelligence Analyst; Goodfellow Airforce Base,
					Texas
				</li>
				<li>Basic Leader Course; Schofield Barracks, Hawaii</li>
				<li>
					Tactical and Strategic Analyst Training; Joint Base
					Lewis-McChord, Washington
				</li>
				<li>Software Development; Tooele Technical College, Utah</li>
			</ul>
		),
	},
	{
		title: 'Certifications',
		id: 'certifications',
		content: (
			<ul className="list-disc pl-2">
				<li>Security Clearance; TS//SCI</li>
				<li>Note: Unable to provide more information at this time</li>
			</ul>
		),
	},
];
const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image src="/images/computer.png" width={500} height={500} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">
						About Me
					</h2>
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vitae rerum dignissimos aliquam perferendis ipsa
						exercitationem corrupti quis! Velit vel qui quasi rem
						quod, error enim quidem excepturi beatae laboriosam
						quia!
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certifications')}
							active={tab === 'certifications'}>
							{' '}
							Certifications{' '}
						</TabButton>
						{/* <span className="mr-3 font-semibold hover:text-white text-[#adb7be] border-primary-500">
							Skills
						</span>
						<span>Education</span>
						<span>Experience</span> */}
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
