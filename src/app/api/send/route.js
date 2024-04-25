import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import EmailTemplate from '@/app/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = 'me@ryanjordan.dev'

export async function POST(req, res) {
	const { email, subject, message } = await req.json()
	console.log('Received', { email, subject, message })
	try {
		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: [toEmail, email],
			subject: subject,
			react: EmailTemplate({ email, subject, message })
		})

		if (error) {
			console.log('Error sending email:', error)
			return NextResponse.json({ error: error.message || error.toString() })
		}
		console.log('Success', data)
		return NextResponse.json(data || { success: true })
	} catch (error) {
		console.error('Catch Error:', error)
		return NextResponse.json({
			error: JSON.stringify(error, Object.getOwnPropertyNames(error))
		})
	}
}
