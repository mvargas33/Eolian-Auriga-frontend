<template>
    <div class="padding-5">
        <div class="allCenter">
            <!-- Main Data -->
        </div>

        <div class="row">
            <!-- Panel izquierdo -->
            <div class="col">
                <div class="">
                    <div class="allCenter etiqueta">
                        Master
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[6] }} <!-- RPM -->
                    </div>
                    <div class="allCenter etiqueta">
                        RPM
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[10] }} <!-- Velocidad -->
                    </div>
                    <div class="allCenter etiqueta">
                        Velocidad
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[0] }} <!-- Motor_temp -->
                    </div>
                    <div class="allCenter etiqueta">
                        Temperatura
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[11] }} <!-- PIN -->
                    </div>
                    <div class="allCenter etiqueta">
                        P-in
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[8] }} <!-- POUT -->
                    </div>
                    <div class="allCenter etiqueta">
                        P-out
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[12] }} <!-- Torque -->
                    </div>
                    <div class="allCenter etiqueta">
                        Torque Actual
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_izq[13] }} <!-- Torque -->
                    </div>
                    <div class="allCenter etiqueta">
                        Torque Demand
                    </div>
                </div>
            </div>
            <!-- Velocímetro -->
            <div class="col-6">
                <div class="allCenter" >
                    <VueSvgGauge
                    :min="0"
                    :max="150"
                    :start-angle="-145"
                    :end-angle="145"
                    :value=mainData[0]
                    :separator-step="20"
                    :scale-interval="5"
                    :inner-radius="75"
                    :gaugeColor="[{ offset: 0, color: '#347AB0' }, { offset: 100, color: '#8CDFAD' }]"
                    :transitionDuration="10"
                    >
                    <div class="col">
                        <div style="padding-top:60%">
                            <div class="allCenter numero">
                                {{ mainData[0] }}
                            </div>
                            <div class="allCenter">
                                Km/Hr
                            </div>
                        </div>
                    </div>
                    </VueSvgGauge>
                    <!-- {{ mainData[0] }} Velocidad -->
                </div>
            </div>
            <!-- Panel derecho -->
            <div class="col">
                <div class="">
                    <div class="allCenter etiqueta">
                        Slave
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[6] }} <!-- RPM -->
                    </div>
                    <div class="allCenter etiqueta">
                        RPM
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[10] }} <!-- Motor_temp -->
                    </div>
                    <div class="allCenter etiqueta">
                        Velocidad
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[0] }} <!-- Motor_temp -->
                    </div>
                    <div class="allCenter etiqueta">
                        Temperatura
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[11] }} <!-- Kelly_temp -->
                    </div>
                    <div class="allCenter etiqueta">
                        P-in
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[8] }} <!-- PWM -->
                    </div>
                    <div class="allCenter etiqueta">
                        P-out
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[12] }} <!-- EMR -->
                    </div>
                    <div class="allCenter etiqueta">
                        Torque Actual
                    </div>
                </div>
                <div class="">
                    <div class="allCenter numero">
                        {{ kelly_der[13] }} <!-- EMR -->
                    </div>
                    <div class="allCenter etiqueta">
                        Torque Demand
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VueSvgGauge } from 'vue-svg-gauge'

export default {
  name: 'MainData',
  components: { VueSvgGauge },
  data () {
    return { hola: 0 }
  },
  computed: {
    ...mapState('fenix', ['mainData', 'kelly_der', 'kelly_izq'])
  },
  methods: {
    ...mapActions('fenix', ['addSpeed', 'replaceData', 'sumsoc', 'updateTemps'])
  }
}
</script>
