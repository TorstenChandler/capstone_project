<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	export let data
	const {session} = data
</script>

<div class="flex flex-cols gap-10 p-5">
	<div class="w-20">
		<a href="/" class="mx-auto">
			<Avatar src={session?.user?.image} width="w-12" class="shadow-lg"/>
		</a>
		
		<a href="/entry/new" class="btn-icon variant-filled shadow-lg mt-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"/></svg>		
		</a>
	</div>
</div>
<slot />

