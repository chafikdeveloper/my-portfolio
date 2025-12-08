import { hygraph } from '../lib/hygraphClient';

export default defineEventHandler(async () => {
    const client = hygraph();
    type Testimonials = {
        testimonials: {
            name: string;
            role: string;
            message: string;
        }[];
    };

    const { testimonials }: Testimonials = await client.request(`
        query Testimonials {
            testimonials {
                name
                role
                message
            }
        }
    `);

    return testimonials;
    
})