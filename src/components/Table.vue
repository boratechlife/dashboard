<template>
      <!-- START TABLE -->
      <table class="table w-full bg-white wrapper rounded-xl">
        <thead class="bg-white">
          <tr class="hidden lg:table-row bg-white w-full">
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

        <tbody class="text-sm">
          <tr class="w-full font-light" v-for="(item, index) in tableData" :key="index">
            <td class="lg:hidden">
              <div class="w-full divide-y ">
            <div class="py-2">
              <span class="font-bold">Part Vendor:</span>
              <span>
            {{item.part_vendor}}
              </span>
           </div>
            <div class="py-2">
              <span class="font-bold">KPI Type:</span>
              <span>
              {{item.KPI_type}}
              </span>
           </div>
            <div class="py-2">
              <span class="font-bold">Created By:</span>
              <span>
              {{item.created_by}}
              </span>
           </div>
            <div></div>
            <div class="py-2">
              <span class="font-bold">Start Date:</span>
              <span>
              {{item.start_date}}
              </span>
           </div>
           
            <div class="py-2">
              <span class="font-bold">End Date:</span>
              <span>
              {{item.end_date}}
              </span>
           </div>
           
            <div class="py-2">
              <span class="font-bold">Created Date:</span>
              <span>
                {{item.create_date}}
              </span>
           </div>
            <div class="flex flex-col">
              <span class="font-bold">KPI Progress:</span>
              <span>
                 <progress class="progress progress-primary w-56" :value="item.progress" max="100"></progress>
              </span>

            </div>
        </div>
            </td>

            <td class="hidden lg:table-cell">
              {{item.part_vendor}}
              
              </td>
            <td class="hidden lg:table-cell"> {{item.KPI_type}}</td>
            <td class="hidden lg:table-cell">  {{item.created_by}}</td>
            <td class="hidden lg:table-cell"></td>
            <td class="hidden lg:table-cell">{{item.start_date}}</td>
            <td class="hidden lg:table-cell"> {{item.end_date}}</td>
            <td class="hidden lg:table-cell"> {{item.create_date}}</td>
            <td class="hidden lg:table-cell">
              <progress class="progress progress-secondary w-56" :value="item.progress" max="100"></progress>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- END TABLE -->  
</template>

<script>
export default {
data() {
    return {
        tableData: [
            {
                part_vendor:" Total Watch Time",
                KPI_type:" New KPI",
                created_by:"Kenya",
                start_date: "02/05/2022",
                end_date:" 02/05/2022",
                create_date:" 06-11-2019",
                progress:80,
            },
            {
                part_vendor:" Total Watch Time",
                KPI_type:" New KPI",
                created_by:"Kenya",
                start_date: "02/05/2022",
                end_date:" 02/05/2022",
                create_date:" 06-11-2019",
                 progress:70,
            },
            {
                part_vendor:" Total Watch Time",
                KPI_type:" New KPI",
                created_by:"Kenya",
                start_date: "02/05/2022",
                end_date:" 02/05/2022",
                create_date:" 06-11-2019",
                 progress:60,
            },
            {
                part_vendor:" Total Watch Time",
                KPI_type:" New KPI",
                created_by:"Kenya",
                start_date: "02/05/2022",
                end_date:" 02/05/2022",
                create_date:" 06-11-2019",
                 progress:50,
            }
        ]
    }
}
}
</script>

<style>

</style>