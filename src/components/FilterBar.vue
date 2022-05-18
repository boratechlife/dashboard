<template>
      <div   ref="filter" tabindex="1" id="filter-item" class="  w-11/12 mx-auto relative flex items-center bg-gray-50 h-64 px-6">
      <div class="absolute flex items-end right-2 top-1 text-gray-500 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" @click="SET_OPEN_FILTER(false)"  class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      </div>
      <div class="flex gap-4  items-end w-full">
        <div class="w-1/4 text-left space-y-2">
          <label class="font-bold text-lg">Month</label>
          <select class="form-select   px-3 py-2 w-full rounded-2xl  outline outline-blue-500">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

         <div class="w-1/4 text-left  space-y-2">
          <label class="font-bold text-lg">KIP</label>
          <select class="form-select   px-3 py-2 w-full rounded-2xl  outline outline-blue-500">
            <option>IFT Activity</option>
            <option>Coverage</option>
            <option>Message</option>
            <option>Direct Sales</option>
            <option>IQVA Sales</option>
          </select>
        </div>

        <div class="mb-1">
          <button type="button" @click="SET_OPEN_FILTER(false)" class="px-3 py-2 bg-red-500 rounded text-white">Submit</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
methods: {
  ...mapMutations(['SET_OPEN_FILTER'])
}
}
</script>

<style>

</style>