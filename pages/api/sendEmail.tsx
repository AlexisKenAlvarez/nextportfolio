import { NextApiRequest, NextApiResponse } from 'next';
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import { Email } from '../../utils/email';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

    try {
        const { email, message } = req.body

        const emailHtml = render(<Email email={email} message={message} />);

        const options = {
            from: 'alexisken1432@gmail.com',
            to: 'alexisken1432@gmail.com',
            subject: 'Portfolio',
            html: emailHtml,
        };

        await sendgrid.send(options).then(() => {
            console.log('Email sent')
        })
            .catch((error) => {
                console.error(error)
            });

        res.status(200).json({ message: "SUCCESS" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }


}