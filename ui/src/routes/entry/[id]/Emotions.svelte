<script lang="ts">
	export let emotions: Object;
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	$: sorted = emotions
		? Object.entries(emotions)
				.sort(([, a], [, b]) => a - b)
				.reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
		: {};
</script>

{#if emotions}
	{#each Object.entries(sorted) as [emotion, score]}
		{#if emotion != 'id' && score > 0.5}
			<span class="chip variant-filled">{emotion}</span>
		{/if}
	{/each}
{:else}
	<ProgressRadial
		width="w-8"
		stroke={100}
		meter="stroke-white"
		track="stroke-surface-400/30"
		strokeLinecap="round"
	/>
{/if}
