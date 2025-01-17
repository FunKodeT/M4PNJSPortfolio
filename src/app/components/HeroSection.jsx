'use client';
import React from 'react';
import Image from 'next/image';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';

/* const ExampleComponent = () => {
	return (
		<TypeAnimation
			sequence={[
                // SAME SUBSTRING AT THE START WILL ONLY BE TYPED OUT ONCE, 
				'We produce food for Mice',
				1000, 
                // WAIT 1S BEFORE REPLACEING 'MICE' WITH 'HAMSTERS'
				'We produce food for Hamsters',
				1000,
				'We produce food for Guinea Pigs',
				1000,
				'We produce food for Chinchillas',
				1000,
			]}
			wrapper="span"
			speed={50}
			style={{fontSize: '2em', display: 'inline-block'}}
			repeat={Infinity}
		/>
	);
}; */

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				{/* lg:grid-cols-12 */}
				<motion.div
					initial={{opactiy: 0, scale: 0.5}}
					animate={{opactiy: 1, scale: 1}}
					transition={{duration: 0.5}}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I am{' '}
						</span>
						{/* Matthew */}
						<br />
						<TypeAnimation
							sequence={[
								'Matthew',
								1000,
								'a Web Developer',
								1000,
								'a Mobile Developer',
								1000,
								'a UI/UX Designer',
								1000,
								'a Veteran',
								1000,
								'an Analyst',
								1000,
								'a Leader',
								1000,
								'a Brother',
								1000,
								'a Husband',
								1000,
								'a Son',
								1000,
							]}
							wrapper="span"
							speed={50}
							// style={{fontSize: '2em', display: 'inline-block'}}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
						{/* text-lg */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sed maiores mollitia officia ducimus debitis at iure
						saepe quidem dolor, officiis eaque eius odit et deserunt
						odio laborum enim soluta omnis?
					</p>
					<div>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
							{/* bg-white text-black */}
							Hire Me
						</button>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
							{/* px-6 py-3 bg-transparent border border-white*/}
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{opactiy: 0, scale: 0.5}}
					animate={{opactiy: 1, scale: 1}}
					transition={{duration: 0.5}}
					className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/businessman-1280x.png"
							alt="businessman"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
