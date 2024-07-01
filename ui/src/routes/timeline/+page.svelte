<script>
	import { graphql } from '$houdini';
	import TimeLine from './TimeLine.svelte';
	// will start listening onMount (browser only)
	const updates = graphql(`
		subscription SubscriptionEmotionsTimeline {
			timeline: emotions_timeline {
				entries
				love
				joy
				surprise
				sadness
				fear
				anger
			}
		}
	`);
	let show = false;
	$: updates.listen();
	$: $updates, render();
	$: input = $updates?.data?.timeline[0];
	async function render() {
		show = !show;
		await delay(100);
		if (show == false) {
			render();
		}
	}
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));
</script>

{#if show && input !== undefined}
	<TimeLine {input} />
{/if}
