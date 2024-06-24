<script lang="ts">
	export let data;
	import { graphql } from '$houdini';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Emotions from './Emotions.svelte';

	const deleteEntry = graphql(`
		mutation deleteEntry($id: uuid!) {
			delete_entry_by_pk(id: $id) {
				id
			}
		}
	`);

	const id = $page.params.id;
	const updates = graphql(`
		subscription EntryUpdates($id: uuid!) {
			entry: entry_by_pk(id: $id) {
				id
				text
				date
				emotions {
					joy
					love
					optimism
					trust
					surprise
					sadness
					anger
					disgust
					fear
					pessimism
				}
			}
		}
	`);
	async function remove() {
		await goto('/');
		deleteEntry.mutate({ id: entry.id });
	}
	$: updates.listen({ id });
	$: entry = $updates?.data?.entry ? $updates.data.entry : data.data.entry;
</script>

<div class="card">
	<div class="flex p-4 border-b border-surface-500">
		<div class="grow flex gap-3">
			<span class="chip variant-filled">{new Date(entry.date).toISOString().split('T')[0]}</span>

			<Emotions emotions={entry.emotions} />
		</div>
		<div class="flex gap-2">
			<button class="btn btn-sm variant-filled-error" on:click={remove}>Delete</button>
			<button class="btn btn-sm variant-filled-primary" type="button">Save</button>
		</div>
	</div>
	<textarea
		class="textarea rounded-none rounded-b h-full focus:outline-none"
		name="text"
		value={entry.text}
	></textarea>
</div>

<style>
	.card {
		height: calc(100vh - 110px);
	}
	textarea {
		resize: none !important;
	}
</style>
