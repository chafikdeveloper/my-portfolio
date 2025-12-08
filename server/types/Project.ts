export type Project = {
    title: string;
    slug: string;
    description: string;
    tags: Array<string>;
    thumbnail: {
        url: string;
    };
};