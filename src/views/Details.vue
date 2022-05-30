<template>
  <div class="content py-6 px-4">
    <BreadCrumb title="Details" :crumbs="['Dashboard', 'Details']"/>
    <div class="bg-transparent">
     
<div class="flex flex-wrap lg:flex-nowrap items-top gap-4 p-3">

  <div class="flex-grow">

     <draggable 
  v-model="metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4  justify-between"
  item-key="id">
  <template #item="{element,index}">
   <div>
   
  <ChartComponent  :chartMetric="getMetricByID(activeDetailsMetric.parentId)" :chartData="element" :chartOptions="element.chartOptions" :index="index"  v-if="element.favorite || enableChartEditing " />
   </div>
   </template>
</draggable>

       <!-- START TABLE SECTION -->
    <div class="bg-white shadow-sm rounded mt-10">
      <!-- START TOP -->
      <div class="top rounded-t flex bg-primary  flex-wrap justify-between bg-gray-300 py-1 px-2 lg:px-3 text-gray-200">
        <h4 class="text-lg font-bold">KIP Type</h4>
         <span class="btn btn-primary outline-primary h btn-sm">
            <img src="../assets/excel-4.svg" class="h-5 w-5" alt />
          </span>
      </div>
      <!-- END TOP -->

      <!-- START TABLE -->
<Table />

      <!-- END TABLE -->
    </div>

    <!-- END TABLE SECTION --> 
  </div>
</div>
     </div>



    <!-- END TABLE SECTION -->
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
import ChartComponent from "../components/ChartComponent.vue";
import HighChart from "../components/HighChart.vue"
import BreadCrumb from "../components/BreadCrumb.vue"
import Table from "../components/Table.vue"
import DetailsSideBar from "../components/DetailsSideBar.vue"


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
    StatisticsHeader,
    Table,
    DetailsSideBar
  },
computed: {
  ...mapState(['MetricCharts','enableChartEditing','activeDetailsMetric']),
    metrics: {
            get() {
             return  this.getMetricByID(this.activeDetailsMetric.parentId)?.highcharts
        },
        set(value) {
            this.$store.commit('UPDATE_CHART_METRICS', {activeID:this.activeDetailsMetric.parentId,value:value})
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