import artifact from '$houdini/artifacts/SubscriptionEmotionsTimeline'
import { SubscriptionStore } from '../runtime/stores/subscription'

export class SubscriptionEmotionsTimelineStore extends SubscriptionStore {
	constructor() {
		super({
			artifact,
		})
	}
}
