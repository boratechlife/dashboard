<template>
                 <!-- START BREADCRUMB -->
<div class="w-full flex justify-between px-4 lg:pl-16 py-2 text-xs md:text-base">
  <h4 class="font-bold">{{title}}</h4>
  <ul class="font-light flex items-center ">
    <li v-for="(item, index) in crumbs" :key="index">
      <router-link :to="item.toLowerCase() ==='dashboard' ? '/' : item.toLowerCase()" :class="($route.path ==='/' || $route.path ===`/${item.toLowerCase()}`) ? 'text-blue-500' : ''" class="hover:text-blue-500">{{item}}</router-link>
      <span v-if="index !== crumbs.length - 1" class="mx-2 text-sm">/</span>
      
    </li>

  </ul>
</div>
               <!-- END BREADCRUMB -->
</template>

<script>
export default {
  props: {
    title: {
       type:String,
       required:true,
    },
    crumbs: {
      type:Array,
      required:true,
    }
  },
  name:"BreadCrumb",
}
</script>

<style>

</style>