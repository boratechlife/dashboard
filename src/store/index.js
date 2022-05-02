import {createStore} from 'vuex'
export default createStore({
    state:{
      kipsMetrics:[
       {
          metric_type_id:1,
          name:"IFT Activity",
  
          KPI_metrics:[{
            id:1,
            title:"Total Watch Time",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-yellow-500",
          
          },
          {
            id:2,
            title:"Total Watch Time",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-red-500",
          },
          {
            id:3,
            title:"Total Watch Time",
            metric:"31K",
            percent:-6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-indigo-500",
          },
          {
            id:4,
            title:"Total Watch Time",
            metric:"31K",
            percent:6.08,
            period:'Vs Previous Month',
            favorite:false,
            classes:" border-blue-500",
          }]
        
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
                      series: [{
                        data: [1,2,3] // sample data
                      }]
                    }
                  },
                  {
                    favorite:true,
                    chartOptions: {
                      series: [{
                        data: [1,2,3,5,6,6,7] // sample data
                      }]
                    }
                  }
              ],
              charts:[
                {
                  type:'line',
                  favorite:true,
                  series: [{
                      name: "Desktops",
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                  }],
                  chartOptions: {
                    chart: {
                      height: 350,
                      type: 'line',
                      toolbar: {
                        show: false,
                      },
                      zoom: {
                        enabled: false
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'straight'
                    },
                    title: {
                      text: 'Product Trends by Month',
                      align: 'left'
                    },
                    grid: {
                      row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                      },
                    },
                    xaxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    }
                  },
                  
                  
                },
                {
                  type:'area',
                  favorite:false,
                  series: [{
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100]
                  }, {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34, 52, 41]
                  }],
                  chartOptions: {
                    chart: {
                      height: 350,
                      type: 'area',
                      toolbar: {
                        show: false,
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth'
                    },
                    title: {
                      text: 'Product Trends by Month',
                      align: 'left',
                      style: {
                        fontSize:  '12px',
                      }
                    },
                    xaxis: {
                      type: 'datetime',
                      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yy HH:mm'
                      },
                    },
                  },
                  
                  
                },
                {
                  type:"bar",
                  favorite:false,
                  series: [{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                  }],
                  chartOptions: {
                    chart: {
                      type: 'bar',
                      height: 350,
                      toolbar: {
                        show: false,
                      }
                    },
                    title: {
                      text: 'Traffic Sources'
                    },
                    plotOptions: {
                      bar: {
                        borderRadius: 4,
                        horizontal: true,
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    xaxis: {
                      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                      ],
                    }
                  },
                  
                  
                },
                {
                 type:'line',
                 favorite:false,
                  series: [{
                    name: 'Website Blog',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                  }, {
                    name: 'Social Media',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                  }],
                  chartOptions: {
                    chart: {
                      height: 350,
                      type: 'line',
                      toolbar: {
                        show: false,
                      }
                    },
                    stroke: {
                      width: [0, 4]
                    },
                    title: {
                      text: 'Traffic Sources'
                    },
                    dataLabels: {
                      enabled: true,
                      enabledOnSeries: [1]
                    },
                    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                    xaxis: {
                      type: 'datetime'
                    },
                    yaxis: [{
                      title: {
                        text: 'Website Blog',
                      },
                    
                    }, {
                      opposite: true,
                      title: {
                        text: 'Social Media'
                      }
                    }]
                  },
                  
                  
                },
              ]
        },
    ],
    enableEditing:true,
    enableChartEditing:false,
    openMobileMenu:false,
    },

    getters:{},
    mutations: {
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