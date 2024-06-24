import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/EmotionsTimeline'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EmotionsTimelineStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EmotionsTimelineStore",
			variables: false,
		})
	}
}

export async function load_EmotionsTimeline(params) {
	await initClient()

	const store = new EmotionsTimelineStore()

	await store.fetch(params)

	return {
		EmotionsTimeline: store,
	}
}
