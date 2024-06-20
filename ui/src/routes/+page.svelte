<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import TimeLine from "./TimeLine.svelte";

	export let data
	$: ({ UserEmotions } = data)
</script>

	<TimeLine data={$UserEmotions.data.emotions}/>

