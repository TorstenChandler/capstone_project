import type { EntryUpdates$input, EntryUpdates$result, SubscriptionStore } from '$houdini'

export declare class EntryUpdatesStore extends SubscriptionStore<EntryUpdates$result | undefined, EntryUpdates$input> {
	constructor() {
		// @ts-ignore
		super({})
	}
}
