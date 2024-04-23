import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: `Ryan Jordan's Portfolio`,
	description:
		'Explore a decade of innovation in full-stack web development with Ryan Jordan. From captivating landing pages to robust enterprise apps, discover a portfolio enriched by expertise in React, NextJS, Redux, and Tailwind CSS, alongside a strong foundation in Angular. Showcasing projects across diverse sectors, including private and government roles, Ryan’s work illustrates a commitment to excellence and adaptability in the ever-evolving tech landscape.'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
