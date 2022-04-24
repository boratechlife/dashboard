<template>


         <!-- START CONTENT -->

<div class="content py-6">
<BreadCrumb />

<!-- START CARDS SECTION -->
<div class="w-full px-4">
<StatisticsHeader />

<draggable 
  v-model="metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4  justify-between"
  item-key="id">
  <template #item="{element}">
   <StatisticCard  :metric="element" />
  
   </template>
</draggable>
</div>
</div>
</template>

<script>

  import draggable from 'vuedraggable'
import StatisticsHeader from '../components/StatisticsHeader.vue'
import StatisticCard from '../components/StatisticCard.vue'
import BreadCrumb from '../components/BreadCrumb.vue'


import  { mapState } from 'vuex'

export default {
       components: {
           StatisticsHeader,
           StatisticCard,
           BreadCrumb,
           draggable
           
       },

       data() {
         return {
           drag: true,
         }
       },

       computed: {
         ...mapState(['kipsMetrics','enableEditing']),
         metrics: {
            get() {
            if( this.kipsMetrics.some(item=>item.favorite ===true) && !this.enableEditing) {
             return this.kipsMetrics.filter(item=> item.favorite ===true)
            }
           return  this.kipsMetrics;
        },
        set(value) {
            this.$store.commit('updateMetrics', value)
        }

         }
       },

       mounted() {
         console.log(this.kipsMetrics.some(item=>item.favorite ===true));
       }
}
</script>

<style>

</style>