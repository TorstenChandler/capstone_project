import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './Ask'
export * from './deleteEntry'
export * from './EmotionsTimeline'
export * from './Entry'
export * from './EntryUpdates'
export * from './saveEntry'
export * from './SubscriptionEmotionsTimeline'