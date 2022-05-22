<template>
    <div class="w-full flex justify-end items-center gap-4 bg-transparent  py-2 px-3 relative">
    <div class="flex items-center gap-4">
      <span @click="openFilterFunc">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
</svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
      </span>
      <template v-if="$route.path==='/details'">
              <button v-if="!enableChartEditing" @click.prevent="ENABLE_CHART_EDITING()" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></span>
        <span class="text-sm">Edit</span>
      </button>
       <button v-else  @click.prevent="saveChart" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span class="text-sm">Save</span>
      </button>
       </template>
      <template v-else>

      <button v-if="!enableEditing" @click="edit" class="btn btn-outline btn-indigo-500 btn-sm gap-2 py-0 text-sm">
        <span><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></span>
        <span class="text-sm">Edit</span>
      </button>
       <button v-else  @click.prevent="()=>{save(); $router.push('/')}" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span class="text-sm">Save</span>
      </button>
      </template>

    </div>
  </div>
</template>

<script>
import  { mapState, mapActions, mapMutations } from 'vuex'
export default {
  props: {
  type: {
    type:String,
    default:"metric",
  }
  },
      computed: {
        ...mapState(['enableEditing','openFilter','enableChartEditing'])

      },
      methods: {
        edit() {
          this.ENABLE_EDITING();
          this.$router.push('/metrics/edit');
        },
        openFilterFunc() {
          this.SET_OPEN_FILTER(true)
       //   console.log(document.getElementById("filter-item").focus());
         this.$refs.filter.focus();
        },
        closeFilter() {
          this.SET_OPEN_FILTER(false)
         // this.$refs.filter.focus();
        },
        ...mapMutations(['ENABLE_EDITING', 'SET_OPEN_FILTER','ENABLE_CHART_EDITING']),
        ...mapActions([
            'save',
            'saveChart'
        ])
      },
     mounted() {
        if(this.$route.path == '/metrics/edit') {
          this.ENABLE_EDITING(true)
        }
       }
}
</script>

<style>

</style>