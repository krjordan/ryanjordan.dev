import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = 'me@ryanjordan.dev'

export async function POST(req, res) {
	const { email, subject, message } = await req.json()
	console.log(email, subject, message)
	try {
		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			subject: subject,
			react: EmailTemplate({ email, subject, message })
		})

		if (error) {
			return NextResponse.json({ error })
		}

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
