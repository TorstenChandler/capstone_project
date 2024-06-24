import artifact from '$houdini/artifacts/deleteEntry'
import { MutationStore } from '../runtime/stores/mutation'

export class deleteEntryStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
