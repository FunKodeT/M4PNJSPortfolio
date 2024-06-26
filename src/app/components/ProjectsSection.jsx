'use client';
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
	{
		id: 'portalProject',
		title: 'JavaScript Portfolio Portal',
		description: 'desc',
		image: '/images/projects/portalProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'studentsAPIProject',
		title: 'API Familiarization Project: Students',
		description: 'desc',
		image: '/images/projects/studentsAPIProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'final1700Project',
		title: 'NodeJS Final Project',
		description: 'desc',
		image: '/images/projects/final1700Project.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'stretch1700Project',
		title: 'NodeJS Swagger Familiarization Project',
		description: 'desc',
		image: '/images/projects/stretch1700Project.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'introReactProject',
		title: 'ReactJS Familiarization Project',
		description: 'desc',
		image: '/images/projects/introReactProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'recipeReactProject',
		title: 'ReactJS Recipe Application Project',
		description: 'desc',
		image: '/images/projects/recipeReactProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'fntEndReactProject',
		title: 'ReactJS Front-end Application Design Project',
		description: 'desc',
		image: '/images/projects/fntEndReactProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 'expenseAppReactProject',
		title: 'ReactJS Expense Tracker Application Project',
		description: 'desc',
		image: '/images/projects/expenseAppReactProject.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const handleTagChange = (newTag) => {
		setTag(newTag);
	};
	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === 'Mobile'}
				/>
				{/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
					All
				</button>
				<button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
					Web
				</button> */}
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{/* {projectsData.map((project) => ( */}
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						// tags={project}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsSection;
