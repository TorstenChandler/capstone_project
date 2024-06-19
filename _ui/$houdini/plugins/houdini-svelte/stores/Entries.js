import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Entries'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EntriesStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EntriesStore",
			variables: false,
		})
	}
}

export async function load_Entries(params) {
	await initClient()

	const store = new EntriesStore()

	await store.fetch(params)

	return {
		Entries: store,
	}
}
