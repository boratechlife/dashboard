<template>
  <div class="w-full">
            <apexchart width="500" height="300" type="polarArea" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>

export default {
  data() {
      return {
          series: [520, 1200, 400],
          options: {
          chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['New Kip', 'Total Kip', 'Total Cancel KIP'],
        fill: {
          opacity: 1
        },
          legend: {
              show:false,
          horizontalAlign: 'right',
          position: 'top'
         },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },

        }
      }
  }
}
</script>

<style>

</style>