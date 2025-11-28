import projects from '../lib/projects.json'

export default defineEventHandler(async () => {
    return projects;
})