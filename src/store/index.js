import {createStore} from 'vuex'
const colors = ['#c42525','#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
'#492970', '#f28f43', '#77a1e5' , '#a6c96a']
export default createStore({
    state:{
      searchResults: {},
      kipsMetrics:[
       {
          metric_type_id:1,
          name:"IFT Activity",
          background: "bg-indigo-800 nm-inset-indigo-800",
          
  
          KPI_metrics:[{
            id:1,
            title:"#Field Days",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:true,
           
          
          },
          {
            id:2,
            title:"# Contact days",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            
          },
          {
            id:3,
            title:"% Contact days",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
          },
          {
            id:4,
            title:"# Contacts per day",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:5,
            title:"# Contacts",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:6,
            title:"# Planned Contacts",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:7,
            title:"% Contacts on Planned Stakeholders",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:8,
            title:"% Contacts vs. Plan Contacts",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:9,
            title:"# Calendar days",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:10,
            title:"# Available working days",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          }

        ]
        
        },

        {
          metric_type_id:1,
          name:"Coverage",
          background: "bg-blue-800 nm-inset-blue-800",
  
          KPI_metrics:[
            {
            id:1,
            title:"# All Stakeholders",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
           
          
          },
          {
            id:2,
            title:"# Stakeholders with Contacts ",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,

          },
          {
            id:3,
            title:"# Planned Stakeholders",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-indigo-500",
          },
          {
            id:4,
            title:"% Coverage ",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:5,
            title:"% Frequency Coverage on Planned Stakeholders ",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:6,
            title:"# Stakeholders with missing contacts",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:7,
            title:"# Contacts missing",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          },
          {
            id:8,
            title:"# Frequency",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          }
        ]
        
        },
        {
          metric_type_id:1,
          name:"Messaging",
          background: "bg-emerald-800 nm-inset-emerald-800",
  
          KPI_metrics:[{
            id:1,
            title:"# Messages used",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
           
          
          },
          {
            id:2,
            title:"% Message coverage",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            
          },
          {
            id:3,
            title:"% CLM usage",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-indigo-500",
          }
        ]
        
        },
        {
          metric_type_id:1,
          name:"Direct Sales",
          background: "bg-slate-800 nm-inset-slate-800",
  
          KPI_metrics:[
            {
            id:1,
            title:"# Sales",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
           
          
          },
          {
            id:2,
            title:"# Sales growth",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            
          },
          {
            id:3,
            title:"% Sales growth",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-indigo-500",
          },
          {
            id:4,
            title:"Planned Packs",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          }
        ]
        
        },

        {
          metric_type_id:1,
          name:"IQVIA Sales",
          background: "bg-gray-800 nm-inset-gray-800",
  
          KPI_metrics:[{
            id:1,
            title:"% Sales vs. Plan",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
           
          
          },
          {
            id:2,
            title:"% Market Share",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            
          },
          {
            id:3,
            title:"% Market Growth",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-indigo-500",
          },
       
        ]
        
        }
    ],
   
    MetricCharts:[
        {      
              id:1,
              kipsMetricsID:1,
              highcharts:[
                  {
                    favorite:true,
                    chartOptions: {
                      plotOptions: {
                        column: {
                          borderRadius:4
                        }
                      },
                      chart:{
                      type: 'bar'
                       },
                       colors:colors,
                      title:  {
                      text: 'Field Days'
                  },
                      xAxis:{
                      categories: ['Apples', 'Bananas', 'Oranges']
                  },
                      yAxis: {
                      title: {
                          text: 'Fruit eaten'
                      }
                  },
                      series: [{
                      name: 'Jane',
                      data: [1, 0, 4]
                  }, {
                      name: 'John',
                      data: [5, 7, 3]
                  }]
                  }
                  },
                  {
                    favorite:true,
                    chartOptions: {
                      colors:colors,
                      chart:{
                      type: 'column'
                  },
                      title: {
                      text: '# Contact days'
                  },
                      
                      xAxis: {
                      categories: [
                          'Jan',
                          'Feb',
                          'Mar',
                          'Apr',
                          'May',
                          'Jun',
                          'Jul',
                          'Aug',
                          'Sep',
                          'Oct',
                          'Nov',
                          'Dec'
                      ],
                      crosshair: true
                  },
                      yAxis: {
                      min: 0,
                      title: {
                          text: 'Rainfall (mm)'
                      }
                  },
                   
                      plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                      series: [{
                      name: 'Tokyo',
                      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                  }, {
                      name: 'New York',
                      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                  }, {
                      name: 'London',
                      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                  }, {
                      name: 'Berlin',
                      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                  }]
                  }
                  },
                  {
                    favorite:true,
                    chartOptions: {
                      colors:colors,
                      chart:{
                      type: 'line'
                       },
                      title:  {
                      text: '# Contacts per day'
                  },
                      xAxis:{
                      categories: ['Computers', 'Desktops', 'Oranges']
                  },
                      yAxis: {
                      title: {
                          text: 'Fruit eaten'
                      }
                  },
                      series: [{
                      name: 'Jane',
                      data: [100, 200, 400]
                  }, {
                      name: 'John',
                      data: [5, 7, 3]
                  }]
                  }
                  },
                  {
                    favorite:true,
                    chartOptions: {
                      colors:colors,
                      chart:{
                      type: 'area'
                  },
                      title: {
                      text: '# Planned Contacts'
                  },
          
                      xAxis:{
                      allowDecimals: false,
                      labels: {
                          formatter: function () {
                              return this.value; // clean, unformatted number for year
                          }
                      }
                  },
                      yAxis: {
                      title: {
                          text: 'Nuclear weapon states'
                      },
                      labels: {
                          formatter: function () {
                              return this.value / 1000 + 'k';
                          }
                      }
                  },
                      tooltip:  {
                      pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                  },
                      plotOptions: {
                      area: {
                          pointStart: 1940,
                          marker: {
                              enabled: false,
                              symbol: 'circle',
                              radius: 2,
                              states: {
                                  hover: {
                                      enabled: true
                                  }
                              }
                          }
                      }
                  },
                      series: [{
                      name: 'USA',
                      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                          1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                          27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                          26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                          22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                          10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                  }, {
                      name: 'USSR/Russia',
                      data: [null, null, null, null, null, null, null, null, null, null,
                          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                          4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                          15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                          33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                          35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                          21000, 20000, 19000, 18000, 18000, 17000, 16000]
                  }]
                  }
                  }
              ],
          
        },
    ],
    enableEditing:false,
    enableChartEditing:false,
    openMobileMenu:false,
    openFilter:false,
    },

    getters:{

    },
    mutations: {
      SEARCH_METRICS(state, payload) {
        //Determine if cards contains the word
        state.searchResults.kipsMetrics=  state.kipsMetrics.filter((item) =>{
            return item.KPI_metrics.some(metric => metric.title?.toLowerCase().includes(payload?.toLowerCase()) )
        })

        // state.kipsMetrics  = (searchResult && searchResult.length>0) ? searchResult :  state.kipsMetrics


      },
      SET_OPEN_FILTER(state,payload) {
     state.openFilter = payload;
      },
      ENABLE_EDITING(state)  {
        state.enableEditing = true;
      },
  TOGGLE_MOBILE_MENU(state) {
          state.openMobileMenu = !state.openMobileMenu;
    },
      DISABLE_EDITING(state)  {
        state.enableEditing = false;
      },
      ENABLE_CHART_EDITING(state)  {
    
        state.enableChartEditing = true;
      },

      DISABLE_CHART_EDITING(state)  {
        state.enableChartEditing = false;
      },

      SET_CHART_FAVORITE(state, payload) {
   
           const selectedMetric = state.MetricCharts.filter(metricItem=> {
           
           return  metricItem.highcharts.some((item, index)=> index ===payload.favChartIndex)
           })[0]
           
           //change charts
           const charts = selectedMetric.highcharts.map((item,index)=> {
         
             if(index ===payload.favChartIndex) {
               item.favorite = !item.favorite;

             }
             return item; 
           })
       

           //Find the kips metric and replace
           state.kipsMetrics= state.kipsMetrics.map((item)=> {
             if(item.id ===payload.id) {
               item.highcharts = charts
             }
             return item;
           })
    
      },
      UPDATE_CHART_METRICS(state, payload) {
      //Find the index of the active
     let activeChartIndex  = null;
      const activeMetricChart=state.MetricCharts.filter((item,index)=> {
        if(item.kipsMetricsID === payload.activeID ) {
          activeChartIndex = index
        }
             return  item.kipsMetricsID === payload.activeID  
      })[0]
      activeMetricChart.highcharts = payload.value;
      state.MetricCharts = state.MetricCharts.map((item,index)=> {
        if(index ===activeChartIndex) {
          item = activeMetricChart
        }
        return item;
      })

      console.log(state.MetricCharts);
   
        
      },

      SET_FAVORITE(state, payload) {
       
        state.kipsMetrics[payload.metric_type_index].KPI_metrics= state.kipsMetrics[payload.metric_type_index].KPI_metrics.map(item=> {
          if(item.id ===payload.id) {
            item.favorite = !item.favorite
          }
          return item;
        })
      },
      updateMetrics(state, payload) {
        //Find the  active
        state.kipsMetrics =payload
        console.log(payload);

     },

    },
    actions:{
      save(context) {
       // context.commit('UPDATE_STATE')
      context.commit('DISABLE_EDITING')
       
      },

      saveChart(context) {
        // context.commit('UPDATE_STATE')
       context.commit('DISABLE_CHART_EDITING')
        
       },
      setFavorite(context, payload) {
        // context.commit('UPDATE_STATE')

        if(payload.type ==='chart') {
          context.commit('SET_CHART_FAVORITE', payload)
        }else {
          context.commit('SET_FAVORITE', payload)
        }

        
       },
    }
  })