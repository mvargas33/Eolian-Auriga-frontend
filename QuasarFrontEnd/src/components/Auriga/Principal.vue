<template>
    <div  style="width:100%;padding: 0% 1% 0% 1%">
        <!-- <div>
            <AlertasSuperiores></AlertasSuperiores>
        </div> -->
        <div class="row" style="padding-bottom: 2%">
            <div style="padding-right: 1%;width: 50%">
                <div class="row justify-center full-width text-center">
                <q-linear-progress stripe size="50px" :value="600/800"
                :color="'green'"
                :track-color="'grey'"
                class="q-mt-sm"
                :rounded="true"
                :style="'color: rgbInterpolation(0.5)'"
                >
                    <div class="absolute-full flex flex-center">
                    <!-- <q-badge trasparent text-color="black" :label="progressLabelPotenciaPaneles" style="font-size: 70%"/> -->
                    <div class="allCenter" :style="darkMode ? 'font-size:80%;color: white' : 'font-size:80%;color: black'">
                        {{progressLabelPotenciaPaneles}}
                    </div>
                    </div>
                </q-linear-progress>
                </div>
            </div>
            <div style="padding-left: 1%;width: 50%">
                <div class="row justify-center full-width text-center">
                <q-linear-progress stripe size="50px" :value="33.0/100.0"
                :color="'red'"
                :track-color="'grey'"
                class="q-mt-sm"
                :rounded="true">
                    <div class="absolute-full flex flex-center">
                    <!-- <q-badge trasparent text-color="black" :label="progressLabel2" style="font-size: 70%"/> -->
                    <div class="allCenter" :style="darkMode ? 'font-size:80%;color: white' : 'font-size:80%;color: black'">
                        {{progressLabel2}}
                    </div>
                    </div>
                </q-linear-progress>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="allCenter" :style="'display: flex;flex-direction: column;align-items: center;justify-content: space-between'">
                    <div :style="'width:100%;height:100%;display:flex;flex-direction:row;align-items:start;justify-content:space-evenly;padding: 0px 0px 0px 0px'">
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{42}}
                            </div>
                            <div class="allCenter">
                                Max °C
                            </div>
                        </div>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 26 }}
                            </div>
                            <div class="allCenter">
                                Avg °C
                            </div>
                        </div>
                        <hr :style="'height: 50%;margin: 20px'"/>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 12 }}
                            </div>
                            <div class="allCenter">
                                Km
                            </div>
                        </div>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{54}}
                            </div>
                            <div class="allCenter">
                                Eficiencia %
                            </div>
                        </div>
                    </div>
                    <VueSvgGauge
                    :min="0"
                    :max="300"
                    :start-angle="-100"
                    :end-angle="100"
                    :value="121"
                    :separator-step="50"
                    :scale-interval="100"
                    :inner-radius="65"
                    :gaugeColor="[{ offset: 0, color: '#b0f542' }, { offset: 100, color: '#42f55d' }]"
                    :transitionDuration="10"
                    :style=" 'height: fit-content'"
                    >
                    <div class="col">
                        <div style="padding-top:30%">
                            <div class="allCenter numero">
                                {{ 121 }}
                            </div>
                            <div class="allCenter">
                                Nm
                            </div>
                        </div>
                    </div>
                    </VueSvgGauge>
                    <!-- {{ mainData[0] }} Velocidad -->
                </div>
            </div>
            <div class="col-4">
                <div class="allCenter" >
                    <VueSvgGauge
                    :min="0"
                    :max="100"
                    :start-angle="-145"
                    :end-angle="145"
                    :value="50"
                    :separator-step="10"
                    :scale-interval="5"
                    :inner-radius="85"
                    :gaugeColor="[{ offset: 0, color: '#4248f5' }, { offset: 100, color: '#f54242' }]"
                    :transitionDuration="10"
                    >
                    <div class="col">
                        <div style="padding-top:40%">
                            <div class="allCenter velocimetroNumero">
                                {{ 50 }}
                            </div>
                            <div class="allCenter">
                                km/hr
                            </div>
                        </div>
                    </div>
                    </VueSvgGauge>
                    <!-- {{ mainData[0] }} Velocidad -->
                </div>
            </div>
            <!-- <div class="col-2">
                <Marcha></Marcha>
                <KmRecorridos></KmRecorridos>
            </div> -->
            <div class="col-4">
                <div class="allCenter" :style="'display: flex;flex-direction: column;align-items: center;justify-content: space-between'">
                    <div :style="'width:100%;height:100%;display:flex;flex-direction:row;align-items:start;justify-content:space-between;padding: 0px 0px 0px 0px'">
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 67 }}
                            </div>
                            <div class="allCenter">
                                Sevcon °C
                            </div>
                        </div>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 76 }}
                            </div>
                            <div class="allCenter">
                                Motor °C
                            </div>
                        </div>
                        <hr :style="'height: 50%;margin: 20px'"/>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 61 }}
                            </div>
                            <div class="allCenter">
                                Sevcon °C
                            </div>
                        </div>
                        <div class="col">
                            <div class="allCenter biggernumero">
                                {{ 61 }}
                            </div>
                            <div class="allCenter">
                                Motor °C
                            </div>
                        </div>
                    </div>
                    <VueSvgGauge
                    :min="0"
                    :max="10"
                    :start-angle="-100"
                    :end-angle="100"
                    :value="7.2"
                    :separator-step="2"
                    :scale-interval="1"
                    :inner-radius="65"
                    :gaugeColor="[{ offset: 0, color: '#f59542' }, { offset: 100, color: '#f5424b' }]"
                    :transitionDuration="10"
                    :style=" 'height: fit-content'"
                    >
                    <div class="col">
                        <div style="padding-top:30%">
                            <div class="allCenter numero">
                                {{ 7.2 }}
                            </div>
                            <div class="allCenter">
                                kW
                            </div>
                        </div>
                    </div>
                    </VueSvgGauge>
                    <!-- {{ mainData[0] }} Velocidad -->
                </div>
            </div>
        </div>
        <HeatMap/>

        <div>
            <AlertasInferiores/>
        </div>

        <div>
            <Mppt/>
        </div>
        <div>
            <BMSVoltTemp/>
        </div>
        <!-- <div>
            <Sevcon/>
        </div> -->
        <div style="margin-top: 2%">
            <ConsumoChart/>
        </div>
        <div class="row">
          <Menu/>
        </div>
    </div>
</template>

<script>
import { VueSvgGauge } from 'vue-svg-gauge'
// import Marcha from './Marcha'
// import KmRecorridos from './KmRecorridos'
// import AlertasSuperiores from './AlertasSuperiores'
import AlertasInferiores from './AlertasInferiores'
import HeatMap from './HeatMap.vue'
import ConsumoChart from './ConsumoChart.vue'
import Mppt from './Mppt.vue'
import BMSVoltTemp from './BMSVoltTemp.vue'
import Menu from './Menu.vue'
import { mapState } from 'vuex'

export default {
  name: 'Principal',
  components: { VueSvgGauge, HeatMap, AlertasInferiores, ConsumoChart, Mppt, BMSVoltTemp, Menu },
  computed: {
    ...mapState('general', ['darkMode']),
    progressLabel2 () {
      return (this.$store.state.fenix.mainData[3]).toFixed(0) + ' %'
    },
    progressLabelPotenciaPaneles () {
      return '570' + ' W'
    }
  },
  data () {
    return { hola: 0 }
  },
  methods: {
    componentToHex (c) {
      var hex = c.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    },

    rgbToHex (r, g, b) {
      return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b)
    },

    rgbInterpolation (valor) {
      var maxV = 1.0
      var minV = 0.0
      var middle = (maxV + minV) / 2

      var amount = 255 / (middle - minV)

      var r = 0
      var g = 0
      var b = 0

      if (valor <= minV) {
        r = 255
        console.log('Hola')
      } else if (valor >= maxV) {
        g = 255
      } else if (valor < middle) {
        r = 255
        g = (valor - minV) * amount
      } else {
        r = 255 - (valor - middle) * amount
        g = 255
      }
      r = Math.floor(r)
      g = Math.floor(g)
      b = Math.floor(b)

      return this.rgbToHex(r, g, b)
      // return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
  }
}
</script>
