import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/UserEmotions'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class UserEmotionsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "UserEmotionsStore",
			variables: false,
		})
	}
}

export async function load_UserEmotions(params) {
	await initClient()

	const store = new UserEmotionsStore()

	await store.fetch(params)

	return {
		UserEmotions: store,
	}
}
