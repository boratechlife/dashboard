<template>
    <div class="w-full flex justify-end items-center gap-4 bg-white py-2 px-3 border-l-4 border-blue-500 relative">
    <div class="flex items-center gap-4">
      <span @click="openFilterFunc">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
      </span>
      <template v-if="type==='details'">
              <button v-if="!enableChartEditing" @click.prevent="ENABLE_CHART_EDITING()" class="btn btn-outline btn-accent btn-sm gap-2 py-0 text-sm">
        <span><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></span>
        <span class="text-sm">Edit</span>
      </button>
       <button v-else  @click.prevent="saveChart" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span class="text-sm">Save</span>
      </button>
       </template>
      <template v-else>

      <button v-if="!enableEditing" @click="ENABLE_EDITING" class="btn btn-outline btn-accent btn-sm gap-2 py-0 text-sm">
        <span><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></span>
        <span class="text-sm">Edit</span>
      </button>
       <button v-else  @click.prevent="save" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span class="text-sm">Save</span>
      </button>
      </template>

    </div>
    <div v-show="openFilter"  ref="filter" tabindex="1" id="filter-item" class="absolute  z-50 right-0 left-0 w-full top-0 flex items-center bg-white h-64 px-6">
      <div class="flex gap-4  items-end w-full">
        <div class="w-1/4 text-left space-y-2">
          <label class="font-bold text-lg">Month</label>
          <select class="form-select  px-3 py-2 w-full rounded border border-gray-100">
            <option></option>
          </select>
        </div>

         <div class="w-1/4 text-left  space-y-2">
          <label class="font-bold text-lg">KIP</label>
          <select class="form-select  px-3 py-2 w-full rounded border border-gray-100">
            <option></option>
          </select>
        </div>

        <div class="mb-1">
          <button type="button" @click="closeFilter" class="px-3 py-2 bg-red-500 rounded text-white">Submit</button>
        </div>
      </div>
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
      }
}
</script>

<style>

</style>