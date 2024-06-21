<script>
	let text = '';
</script>

<form class="card" method="POST">
	<div class="flex p-4 border-b border-surface-500">
		<div class="grow">
			<span class="chip variant-filled">{new Date().toISOString().split('T')[0]}</span>
		</div>
		<button class="btn btn-sm variant-filled-primary">Save</button>
	</div>
	<textarea
		class="textarea rounded-none rounded-b h-full focus:outline-none"
		name="text"
		value={text}
	></textarea>
</form>

<style>
	.card {
		height: calc(100vh - 110px);
	}
	textarea {
		resize: none !important;
	}
</style>
