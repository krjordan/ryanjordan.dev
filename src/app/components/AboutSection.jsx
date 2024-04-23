'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2'>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>Angular</li>
				<li>Next.js</li>
				<li>Redux</li>
				<li>Docker</li>
				<li>CSS</li>
				<li>Node.js</li>
				<li>Git</li>
				<li>RESTful APIs</li>
				<li>Jest</li>
				<li>Storybook</li>
			</ul>
		)
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-2'>
				<li>Bachelor of Science in Computer Science</li>

				<ul className='list-disc pl-2'>
					<li>Athens State University</li>
				</ul>

				<li>11 Years of On-the-Job Training</li>
				<ul className='list-disc pl-2'>
					<li>
						Over a decade of hands-on experience developing full-stack
						applications for diverse industries, utilizing leading technologies
						such as TypeScript, React, Angular, and Node.js
					</li>
					<li>
						Continued professional development through real-world applications,
						staying current with the latest technologies and best practives in
						web development.
					</li>
				</ul>
			</ul>
		)
	}
]

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useTransition()

	const handleTabChange = id => {
		startTransition(() => {
			setTab(id)
		})
	}

	return (
		<section
			className='text-white'
			id='about'
		>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.png'
					width={500}
					height={500}
					alt='about-me image'
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>
						I&apos;m a seasoned full-stack developer with a decade-long track
						record of transforming complex digital challenges into smooth,
						user-friendly solutions. My journey in tech began at Athens State
						University, where I earned my Bachelor&apos;s degree in Computer
						Science, and it has evolved through roles in startups, large
						corporations, and government projects. Today, my toolkit is rich
						with technologies like React, NextJS, Redux, and Tailwind CSS,
						always ready to tackle the next big problem.
					</p>
					<br />
					<p className='text-base lg:text-lg'>
						Beyond the code, I am a fervent participant in the tech community,
						contributing to open-source projects and mentoring emerging
						developers. My curiosity drives me to continually explore new
						technologies, ensuring that my contributions remain innovative and
						effective. Feel free to explore my portfolio to see the projects
						I&apos;m pround of and discover how we can callaborate on your next
						venture.
					</p>

					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							{' '}
							Education{' '}
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
