import { hygraph } from "../lib/hygraphClient"

export default defineEventHandler(async (event) => {
    const client = hygraph();

    const query = getQuery(event);

    type Project = {
        project: {
            title: string;
            content: {
                html: string;
            }
        };
    };

    const slug = query.slug;

    const { project }: Project = await client.request(`
        query Project($slug: String) {
            project(where: {slug: $slug}) {
                title
                content {
                    html
                }
            }
        }
    `, {slug});

    return project;
})