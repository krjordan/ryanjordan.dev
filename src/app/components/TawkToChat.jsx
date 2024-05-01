'use client'
import React, { useEffect } from 'react'

function TawkToChat() {
	useEffect(() => {
		const script = document.createElement('script')
		script.async = true
		script.src = 'https://embed.tawk.to/66326a7a1ec1082f04e9e648/1hsqevs5n'
		script.charset = 'UTF-8'
		script.setAttribute('crossorigin', '*')

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return null
}

export default TawkToChat
