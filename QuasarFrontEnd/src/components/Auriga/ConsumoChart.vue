<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming'
import { mapState } from 'vuex'

var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}

export default {
  extends: Line,
  computed: {
    ...mapState('fenix', ['data_grafico_3']),
    ...mapState('general', ['darkMode'])
  },
  watch: {
    darkMode: function (newValue, oldValue) {
      this.$data._chart.options.title.fontColor = newValue ? 'white' : 'black'
      this.$data._chart.options.scales.xAxes[0].ticks.fontColor = newValue ? 'white' : 'black'
      this.$data._chart.options.scales.yAxes[0].ticks.fontColor = newValue ? 'white' : 'black'
      this.$data._chart.options.scales.yAxes[0].scaleLabel.fontColor = newValue ? 'white' : 'black'
      this.$data._chart.options.legend.labels.fontColor = newValue ? 'white' : 'black'
    },
    // Cada vez que cambia el store se cambia el onRefresh que se queda pegado con el último valor del Store que se le dió a onRefresh,
    // de esta forma, el gráfico mustra el valor anterior hasta que cambie el store y se vuelva a cambiar el onRefresh con el nuevo valor
    data_grafico_3: function (newValue, oldValue) {
      var now = Date.now()
      this.$data._chart.config.data.datasets[0].data.push({
        x: now,
        y: newValue[0]
      })
      this.$data._chart.config.data.datasets[1].data.push({
        x: now,
        y: newValue[1]
      })
      this.$data._chart.config.data.datasets[2].data.push({
        x: now,
        y: newValue[2]
      })
      this.$data._chart.config.data.datasets[3].data.push({
        x: now,
        y: newValue[3]
      })

      // this.$data._chart.options.scales.xAxes[0].realtime.onRefresh = (chart) => {
      //   chart.config.data.datasets[0].data.push({
      //     x: now,
      //     y: newValue[0]
      //   })
      //   chart.config.data.datasets[1].data.push({
      //     x: now,
      //     y: newValue[1]
      //   })
      //   chart.config.data.datasets[2].data.push({
      //     x: now,
      //     y: newValue[2]
      //   })
      //   chart.config.data.datasets[3].data.push({
      //     x: now,
      //     y: newValue[3]
      //   })
      // }
    }
  },
  // Configuración inicial antes que lleguen los datos
  mounted () {
    this.renderChart(
      // Data
      {
        datasets: [
          {
            label: 'P-in Master',
            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0, // No point
            data: []
          },
          {
            label: 'P-out Master',
            backgroundColor: chartColors.green,
            borderColor: chartColors.green,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0, // No point
            data: []
          },
          {
            label: 'P-in Slave',
            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0, // No point
            data: []
          },
          {
            label: 'P-out Slave',
            backgroundColor: chartColors.yellow,
            borderColor: chartColors.yellow,
            fill: false,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0, // No point
            data: []
          }
        ]
      },
      // Options
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Potencia [kW]',
          fontColor: 'white',
          fontSize: 20
        },
        scales: {
          xAxes: [
            {
              type: 'realtime',
              realtime: {
                duration: 20000, // Ventana de tiempo
                refresh: 1, // Cada cuanto agregar un punto
                delay: 100, // Corrimiento a la derecha del grafico. Deve ser mayor que el refresh
                onRefresh: function (chart) {
                  // console.log(chart)
                  chart.config.data.datasets.forEach(function (dataset) {
                    dataset.data.push({
                      x: Date.now(),
                      y: 10
                    })
                  })
                }
              },
              ticks: {
                fontColor: 'white',
                fontSize: 10,
                stepSize: 1,
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: false,
                labelString: '[W]',
                fontColor: 'white',
                fontSize: 16
              },
              ticks: {
                fontColor: 'white',
                fontSize: 10,
                stepSize: 2,
                beginAtZero: true
              },
              gridLines: {
                display: true,
                color: 'grey'
              }
            }
          ]
        },
        tooltips: {
          mode: 'nearest',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: this.$store.darkmode ? 'black' : 'white',
            fontSize: 16
          }
        }
      } // End Options
    ) // End renderChart
  } // End Mounted
}
</script>
