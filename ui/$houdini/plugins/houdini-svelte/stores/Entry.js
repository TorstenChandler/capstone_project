import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Entry'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EntryStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EntryStore",
			variables: true,
		})
	}
}

export async function load_Entry(params) {
	await initClient()

	const store = new EntryStore()

	await store.fetch(params)

	return {
		Entry: store,
	}
}
