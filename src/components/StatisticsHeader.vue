<template>
    <div class="w-full flex justify-end items-center gap-4 bg-white py-2 px-3">
    <div class="flex items-center gap-4">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
      </span>
      <button v-if="!enableEditing" @click="ENABLE_EDITING" class="btn btn-outline btn-accent btn-sm gap-2 py-0 text-sm">
        <span><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></span>
        <span class="text-sm">Edit</span>
      </button>
       <button v-else  @click.prevent="save" class="btn btn-outline btn-primary btn-sm gap-2 py-0 text-sm">
        <span class="text-sm">Save</span>
      </button>
    </div>
  </div>
</template>

<script>
import  { mapState, mapActions, mapMutations } from 'vuex'
export default {
      computed: {
        ...mapState(['enableEditing'])

      },
      methods: {
        ...mapMutations(['ENABLE_EDITING']),
        ...mapActions([
            'save'
        ])
      }
}
</script>

<style>

</style>