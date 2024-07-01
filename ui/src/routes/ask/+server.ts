import { json } from '@sveltejs/kit'
import { AskStore } from '$houdini'

/* @type { import('./$types').RequestHandler } */
export const POST = async (event) => {
    const { question } = await event.request.json();
    const myQuery = new AskStore()
    const { data } = await myQuery.fetch({ event, variables: { question } })
    return json(data)
}