<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  export let data  = []
  $: cleaned_data = data.series.map((d)=>{return {"label":d.name, data:d.data}})
  let chart;

  onMount(() => {
      const ctx = document.getElementById('myChart').getContext('2d');
      chart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: data.entries,
              datasets: cleaned_data
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      position: 'right'
                  },
                 
              },
              scales: { 
                x: { 
                    display: false
                },
                y: { 
                  display: false
                }
              }
          }
          
      });

      return () => {
          // Cleanup the chart instance on component unmount
          if (chart) {
              chart.destroy();
          }
      }
  });
</script>

<canvas id="myChart" class="w-full"></canvas>

<style>
  canvas {
      display: block;
      
      height: 400px;
  }
</style>
