import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body

        if (!email || typeof email !== 'string') {
            return res.status(400).json({ message: 'Invalid email address' })
        }

        try {
            const transporter = createTransport({
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASS,
                },
            })

            await transporter.sendMail({
                to: email,
                from: process.env.EMAIL_SERVER_FROM,
                subject: 'Test Email',
                text: 'This is a test email.',
            })

            res.status(200).json({ message: 'Email sent successfully' })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).json({ message: 'Failed to send email' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: 'Method not allowed' })
    }
};

export default sendEmail
