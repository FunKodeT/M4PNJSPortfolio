import React from 'react';

const achievementsList = [
	{
		metric: 'Projects',
		value: 'None!',
	},
	{
		metric: 'Users',
		value: 'None!',
	},
	{
		metric: 'Awards',
		value: 'None!',
	},
	{
		metric: 'Years',
		value: 'None!',
	},
];

const AchievementsSection = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="border-[#33353f] border rouded-md py-8 px-17 flex flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4">
							<h2 className="text-white text-4xl font-bold">
								{achievement.value}
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
