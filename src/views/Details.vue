<template>
  <div class="content py-6 px-4">
    <BreadCrumb title="Details" :crumbs="['Dashboard', 'Details']"/>
    <div class="bg-white">
      <StatisticsHeader type="details"/>
    <HighChart />
 

      <draggable 
  v-model="metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4  justify-between"
  item-key="id">
  <template #item="{element,index}">
   <div>
   
  <ChartComponent  :chartMetric="getMetricByID(activeID)" :chartData="element" :chartOptions="element.chartOptions" :index="index"  v-if="element.favorite || enableChartEditing " />
   </div>
   </template>
</draggable>
    </div>

    <!-- START TABLE SECTION -->
    <div class="bg-white border shadow mt-10">
      <!-- START TOP -->
      <div class="top flex  flex-wrap justify-between bg-gray-300 py-1 px-2 lg:px-3">
        <h4 class="text-lg font-bold">KIP Type</h4>
        <div class="flex flex-col md:flex-row items-center gap-4">
          <span class="btn btn-outline outline-primary h btn-sm">
            <img src="../assets/excel-4.svg" class="h-5 w-5" alt />
          </span>

          <span class="rounded w-11/12 flex btn-outline outline-primary bg-gray-700 text-xs sm:text-base btn-sm">
            <input
              type="date"
              name
              class="bg-transparent text-white outline-none"
              value="01/05/2022"
              id
            /> -
            <input
              type="date"
              name
              value="01/05/2022"
              class="bg-transparent text-white outline-none"
              id
            />
          </span>
          <div class="rounded-2xl bg-white flex text-gray-500 items-center px-2 py-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              class="flex-auto px-2 appearance-none outline-none rounded-2xl bg-tranparent border-none"
            />
          </div>

          <div
            class="rounded-2xl bg-gray-500 text-gray-100 flex text-gray-500 items-center px-2 py-1 items-center gap-3 px-2 text-sm"
          >
            <span>Sort By</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <!-- END TOP -->

      <!-- START TABLE -->
      <table class="table w-full bg-green-100">
        <thead>
          <tr class="hidden lg:table-row w-full">
            <th>Part Vendor</th>
            <th>KPI Type</th>
            <th>Created By</th>
            <th></th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Created Date</th>
            <th>KPI Progress</th>
          </tr>
        </thead>

        <tbody>
          <tr class="w-full font-light">
            <td class="lg:hidden">
              <div class="w-full divide-y ">
            <div class="py-2">
              <span class="font-bold">Part Vendor:</span>
              <span>
             Total Watch Time
              </span>
           </div>
            <div class="py-2">
              <span class="font-bold">KPI Type:</span>
              <span>
              New KPI
              </span>
           </div>
            <div class="py-2">
              <span class="font-bold">Created By:</span>
              <span>
              Kenya
              </span>
           </div>
            <div></div>
            <div class="py-2">
              <span class="font-bold">Start Date:</span>
              <span>
               02/05/2022
              </span>
           </div>
           
            <div class="py-2">
              <span class="font-bold">End Date:</span>
              <span>
               02/05/2022
              </span>
           </div>
           
            <div class="py-2">
              <span class="font-bold">Created Date:</span>
              <span>
                06-11-2019
              </span>
           </div>
            <div class="flex flex-col">
              <span class="font-bold">KPI Progress:</span>
              <span>
                 <progress class="progress progress-secondary w-56" value="80" max="100"></progress>
              </span>

            </div>
        </div>
            </td>

            <td class="hidden lg:table-cell">
              Total Watch Time
              
              </td>
            <td class="hidden lg:table-cell">New KPI</td>
            <td class="hidden lg:table-cell">Kenya</td>
            <td class="hidden lg:table-cell"></td>
            <td class="hidden lg:table-cell">02/05/2022</td>
            <td class="hidden lg:table-cell">02/05/2022</td>
            <td class="hidden lg:table-cell">06-11-2019</td>
            <td class="hidden lg:table-cell">
              <progress class="progress progress-secondary w-56" value="80" max="100"></progress>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- END TABLE -->
    </div>

    <!-- END TABLE SECTION -->
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
import ChartComponent from "../components/ChartComponent.vue";
import HighChart from "../components/HighChart.vue"
import BreadCrumb from "../components/BreadCrumb.vue"
import StatisticsHeader from '../components/StatisticsHeader.vue'
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
data() {
  return  {
    activeID:1,
       drag: true,
  }
},
  components: {
    ChartComponent,
    draggable,
    HighChart,
    BreadCrumb,
    StatisticsHeader
  },
computed: {
  ...mapState(['MetricCharts','enableChartEditing']),
    metrics: {
            get() {
             return  this.getMetricByID(this.activeID).highcharts
        },
        set(value) {
            this.$store.commit('UPDATE_CHART_METRICS', {activeID:this.activeID,value:value})
        }

         }


},

methods: {
  ...mapMutations(['ENABLE_CHART_EDITING']),
  ...mapActions(['saveChart']),
  getMetricByID(id) {
    return this.MetricCharts.filter(item=>item.kipsMetricsID ===id)[0]
  },
},

};
</script>

<style>
</style>