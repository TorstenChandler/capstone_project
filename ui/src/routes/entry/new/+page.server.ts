import { graphql } from '$houdini'
import { redirect } from '@sveltejs/kit'

/* @type { import('./$types').Actions } */
export const actions = {
    default: async (event) => {

        const data = await event.request.formData()
        const text = data.get('text')?.toString()
        const date = data.get('date')?.toString()
        const actionMutation = graphql(`
             mutation saveEntry($entry: entry_insert_input!) {
                 insert_entry_one(object: $entry) {
                     id
                 }
             }
         `)

        const result = await actionMutation.mutate({ entry: { date, text } }, { event })
        console.log(result)
        return redirect(302, "/entry/" + result.data?.insert_entry_one?.id)

    }
}