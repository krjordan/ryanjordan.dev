export const EmailTemplate = ({ email, subject, message }) => (
	<div
		style={{
			backgroundColor: '#f4f4f4',
			padding: '20px',
			fontFamily: 'Arial, sans-serif'
		}}
	>
		<div
			style={{
				backgroundColor: '#fff',
				padding: '20px',
				borderRadius: '5px',
				color: '#333'
			}}
		>
			<h1>{subject}</h1>
			<p style={{ color: '#555' }}>Thank you for contacting me!</p>
			<p style={{ color: '#555' }}>
				Your message has been received and I will get back to you soon.
			</p>
			<hr />
			<p>
				<strong>Message Details:</strong>
			</p>
			<blockquote
				style={{
					color: '#555',
					borderLeft: '4px solid #ccc',
					paddingLeft: '10px',
					margin: '10px 0'
				}}
			>
				{message}
			</blockquote>
		</div>
	</div>
)

export default EmailTemplate
