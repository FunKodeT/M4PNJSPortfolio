/* import {NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// USE YOUR API KEY FROM RESEND AND MAKE SURE IT IS IN A STRING
const fromEmail = process.env.FROM_EMAIL;
// USE A STRING EMAIL FOR THIS -> 'test@example.com'

export async function POST(req, res) {
	const {email, subject, message} = await req.json();
	console.log(email, subject, message);
	await resend.sendEmail({
		from: 'Matthew <cooteybug@gmail.com>',
		to: [fromEmail, email],
		subject: subject,
		react: (
			<>
				<p>If this works, I coded it!</p>
			</>
		),
	});
	return NextResponse.json({
		status: 'ok',
	});
} */

// import {EmailTemplate} from '';
import {NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const {body} = await req.json();
	const {email, subject, message} = body;
	try {
		const data = await resend.emails.send({
			from: fromEmail,
			to: ['Sabrina <sabrinaechols2010@gmail.com>', email],
			subject: subject,
			react: (
				<>
					<h1>{subject}</h1>
					<p>Thank you for contacting us!</p>
					<p>New messaged submitted:</p>
					<p>{message}</p>
				</>
			),
			// react: EmailTemplate({firstName: 'John'}),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({error});
	}
}

/* import * as react from 'react'

interface EmailTemplateProps {
    firstName: string
}

export const EmailTemplate: React.FC<Rea
    firstName,
}) => (
    <div>
        <h1>Welcome, {firstName}</h1>
    </div>
)

export default EmailTemplate */
