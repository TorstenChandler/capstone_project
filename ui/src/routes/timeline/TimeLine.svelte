<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	export let input;
	$: datasets = Object.keys(input)
		.filter((k) => k !== 'entries')
		.map((emotion) => {
			return { label: emotion, data: input[emotion] };
		});
	let chart;

	onMount(() => {
		const ctx = document.getElementById('myChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: input.entries,
				datasets: datasets
			},
			events: ['click'],
			options: {
				responsive: true,
				plugins: {
					tooltip: {
						enabled: false
					},
					legend: {
						position: 'right'
					}
				},
				scales: {
					x: {
						display: false
					},
					y: {
						display: false
					}
				},
				onHover: (event, clickedElements) => {
					const target = event.native ? event.native.target : event.target;
					target.style.cursor = clickedElements.length ? 'pointer' : 'default';
				},
				onClick: (event, clickedElements) => {
					if (clickedElements.length === 0) return;
					const { dataIndex } = clickedElements[0].element.$context;
					goto('/entry/' + input.entries[dataIndex]);
				}
			}
		});

		return () => {
			// Cleanup the chart instance on component unmount
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

<canvas id="myChart" class="w-full m-10"></canvas>

<style>
	canvas {
		display: block;
		position: absolute;

		height: 400px;
	}
</style>
