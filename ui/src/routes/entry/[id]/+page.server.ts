
import { EntryStore } from '$houdini'
export async function load(event) {
	const myQuery = new EntryStore()
	const { data } = await myQuery.fetch({ event, variables: { id: event.params.id } })
	return { data }
}