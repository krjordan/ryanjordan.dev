'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
	{
		id: 1,
		title: 'Huntsville Search Dog Unit Website',
		description:
			'Website for the Huntsville Search Dog Unit, a local Search and Rescue organization.',
		image: '/images/projects/hsdu.jpg',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://huntsvillesearchdogs.com'
	},
	{
		id: 2,
		title: 'A. Thatcher Photography Website',
		description: 'Personal portfolio website for A. Thatcher Photography.',
		image: '/images/projects/athatcherphotography-big.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/'
	},
	{
		id: 3,
		title: 'Gentle Hands Massage Therapist',
		description: 'A massage therapist website for a massage business.',
		image: '/images/projects/ghmt.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://gentlehandsmassagetherapy.com'
	},
	{
		id: 4,
		title: 'Real Estate Landing Page',
		description:
			'Real Estate landing page to display contact info and testimonials.',
		image: '/images/projects/dear_dena.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://www.deardena.com'
	},
	{
		id: 5,
		title: 'Americas Army Website',
		description:
			'The official website of the Americas Army game. The game itself was shutdown in 2022.',
		image: '/images/projects/aa.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://en.wikipedia.org/wiki/America%27s_Army'
	},
	{
		id: 6,
		title: 'GoArmy Edge',
		description:
			'A website developed for the GoArmy Edge suite of free-to-use apps designed to help athletes and coaches.',
		image: '/images/projects/edge.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://goarmyedge.com'
	},
	{
		id: 7,
		title: 'Stars',
		description: 'A Landing page for US Army STEM mobile app project.',
		image: '/images/projects/stars.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/'
	},
	{
		id: 8,
		title: 'Operation Overmatch',
		description: `A landing page developed for a video game that didn't last very long.`,
		image: '/images/projects/operation-overmatch.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/'
	},
	{
		id: 9,
		title: 'Vanilla Forums Theme',
		description: `This was custom theme originally developed for the America's Army Game Forum that was then open-sourced.`,
		image: '/images/projects/vanilla.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/'
	}
]

const ProjectsSection = () => {
	const [tag, setTag] = useState('All')
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const handleTagChange = newTag => {
		setTag(newTag)
	}

	const filteredProjects = projectsData.filter(project =>
		project.tag.includes(tag)
	)

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 }
	}

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				My Projects
			</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web'
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Mobile'
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<ul
				ref={ref}
				className='grid md:grid-cols-3 gap-8 md:gap-12'
			>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default ProjectsSection
