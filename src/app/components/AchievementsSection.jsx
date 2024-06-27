'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
	() => {
		return import('react-animated-numbers');
	},
	{ssr: false}
);

const achievementsList = [
	{
		prefix: 'Projects',
		value: '000',
		postfix: '!',
	},
	{
		prefix: 'Users',
		value: '000',
		postfix: '!',
	},
	{
		prefix: 'Awards',
		value: '000',
		postfix: '!',
	},
	{
		prefix: 'Years',
		value: '000',
		postfix: '!',
	},
];

const AchievementsSection = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="border-[#33353f] border rouded-md py-8 px-16 flex flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4">
							<h2 className="text-white text-4xl font-bold flex flex-row">
								{achievement.prefix}
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(
										achievement.value
									)}
									locale="en-US"
									className="text-white text-4xl font-bold"
									configs={(_, index) => {
										return {
											mass: 1,
											friction: 100,
											tension: 140 * (index + 1),
										};
									}}
								/>
								{achievement.postfix}
								{/* {achievement.value} */}
							</h2>
							<p className="text-[#adb7be] text-base">
								{achievement.metric}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AchievementsSection;
