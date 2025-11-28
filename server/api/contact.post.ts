import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    const { name, email, message } = await readBody(event);

    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['chafikdevelopper@gmail.com'],
            subject: 'New Contact from Portfolio',
            html: `
                ${name}, wants to send you an email <br>

                ${message} <br>

                using: ${email}
            `,
        });

        return data;
    } catch (error) {
        return { error };
    }
})