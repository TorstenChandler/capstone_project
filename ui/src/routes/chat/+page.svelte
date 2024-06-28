<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { graphql } from '$houdini';
	let conversation = [];
	let question = '';
	let loading = false;
	function push(message) {
		question = '';
		conversation = [...conversation, { agent: 'user', message }];
		ask(message);
	}
	async function ask(question) {
		conversation = [...conversation, { agent: 'chat' }];
		await new Promise((r) => setTimeout(r, 1500));
		conversation[conversation.length - 1].message = 'Nibbles is your cat. Are you okay!?';
	}
</script>

<div class="h-full max-w-5xl mx-auto flex flex-col gap-5">
	<div class="w-full grow">
		{#each conversation as { agent, message }}
			<div class="mb-3">
				{#if agent == 'user'}
					<div class="grid grid-cols-[auto_1fr] gap-2 w-full">
						<div class="w-20 md:w-40 lg:w-96" />
						<div
							class="card p-4 variant-soft-tertiary shadow-lg !border-gray-300 rounded space-y-2"
						>
							<p>{message}</p>
						</div>
					</div>
				{:else}
					<div class="grid grid-cols-[1fr_auto] gap-2 w-full">
						<div
							class=" p-4 {message
								? 'card variant-soft-error  shadow-lg'
								: ''}  !border-gray-300 rounded space-y-2"
						>
							{#if message}
								{message}
							{:else}
								<ProgressRadial
									width="w-8"
									stroke={100}
									meter="stroke-primary-500"
									track="stroke-primary-500/30"
									strokeLinecap="round"
								/>
							{/if}
						</div>
						<div class="w-20 md:w-40 lg:w-96" />
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<form
		class="w-full flex gap-2 variant-soft-tertiary rounded-xl border border-transparent group focus-within:border-primary-500 transition-all duration-300"
	>
		<div class="grow p-2">
			<textarea
				bind:value={question}
				class="textarea resize-none !bg-transparent !border-0"
				name="question"
				placeholder="Ask your diary"
			/>
		</div>
		<div class="p-3">
			<button
				disabled={loading}
				class="btn-icon variant-filled-primary !text-white"
				on:click={(e) => {
					push(question);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.5em"
					height="1.5em"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="-rotate-90"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg
				>
			</button>
		</div>
	</form>
</div>
