<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import '../app.postcss';
	import { AppRail, AppRailTile, AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';
	export let data
</script>
{#if data.session?.user}
<div class="flex">
	<AppRail class="h-screen">
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/">
				<Avatar src={data.session?.user?.image ? data.session?.user?.image:""} width="w-12" class="mx-auto"/>
			</AppRailAnchor>
			<AppRailAnchor href="/entry/new">
				<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024" class="mx-auto"><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"/><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"/><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/></svg>
			</AppRailAnchor>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<AppRailAnchor title="signOut" on:click={e=>{signOut({callbackUrl:"/signin"})}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024" class="mx-auto"><path fill="currentColor" d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128"/><path fill="currentColor" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"/></svg>
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
	<div class="grow p-5">
		<slot/>
	</div>
</div>
{:else}
	<slot />
{/if}