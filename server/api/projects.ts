import { GraphQLClient } from 'graphql-request'

export default defineEventHandler(async (event) => {
    const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT!);

    const query = getQuery(event);

    type Projects = {
        projects: {
            title: string;
            slug: string;
            description: string;
            tags: Array<string>;
            thumbnail: {
                url: string;
            };
        }[];
    };

    const limitNumber = query.limit ? parseInt(query.limit as string) : undefined;    

    const { projects }: Projects = await client.request(`
        query Projects($limitNumber: Int) {
            projects(first: $limitNumber) {
                title
                slug
                description
                tags
                thumbnail {
                    url
                }
            }
        }
    `, {limitNumber});

    return projects;
})