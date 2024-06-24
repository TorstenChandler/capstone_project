import artifact from '$houdini/artifacts/saveEntry'
import { MutationStore } from '../runtime/stores/mutation'

export class saveEntryStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
