import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Ask'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class AskStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "AskStore",
			variables: true,
		})
	}
}

export async function load_Ask(params) {
	await initClient()

	const store = new AskStore()

	await store.fetch(params)

	return {
		Ask: store,
	}
}
