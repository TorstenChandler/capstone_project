import artifact from '$houdini/artifacts/EntryUpdates'
import { SubscriptionStore } from '../runtime/stores/subscription'

export class EntryUpdatesStore extends SubscriptionStore {
	constructor() {
		super({
			artifact,
		})
	}
}
