<template>
  <div class="col">
    <!-- First row -->
    <div class="row" style="padding-top: 0%">
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                There is a hard wire contactor request
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/hard_wire_contactor_req-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[9]) === 1 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                High voltage B- leak to chassis
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/high_volt_b-_leak_chassis-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 10 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                High voltage B+ leak to chassis
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/high_volt_b+_leak_chassis-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 11 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Excessive precharge time
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/HNlheeyn48-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 17 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
            <!-- excessive precharge time -->
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Interlock is tripped
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/interlock_is_tripped-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 2 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                K1 shortened
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/k1_relay_shortened-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 12 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                K2 shortened
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/k2_relay_shortened-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 13 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Loss of CAN from HVFE
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/loss_of_cancon_hvfe-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 19 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                No battery voltage
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/no_battery_volt-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 9 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
    </div>
    <!-- Second row -->
    <div class="row" style="padding-top: 0%">
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Open K1, K3. Shorted K2
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/open_k1_k3__shorted_k2-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 15 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Overtemperature
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/overtemp-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 6 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Overvoltage
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/overvolt-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 8 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Power from load
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/power_from_load-removebg-preview.svg"
              :style="`width: 90%;filter: ${parseInt(bms[7]) === 1 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Power from source
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/power_from_source-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[6]) === 1 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Relay fault
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/relay_fault-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 1 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Relay K2 opened
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/relay_k2_opened-removebg-preview.svg"
              :style="`width: 80%;filter: ${parseInt(bms[4]) === 16 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
        <div class="col allCenter">
            <q-tooltip class="bg-purple" style="color: blue !important">
              <div style="font-size: 450%;">
                Undervoltage
              </div>
            </q-tooltip>
            <img
              src="~assets/Auriga/EolianIconsSVG/undervolt-removebg-preview.svg"
              :style="`width: 85%;filter: ${parseInt(bms[4]) === 7 ? 'grayscale(0%)' : 'grayscale(100%)'}`"
            >
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AlertasInferiores',
  computed: {
    ...mapState('auriga', ['bms'])
  },
  data () {
    return {
      hola: 0,
      musicON: true,
      gpsON: true,
      telemetryON: true
    }
  },
  methods: {
    estiloCondicional (marcha) {
      if (marcha === true) {
        return 'font-size: 35px; color: red'
      } else {
        return 'font-size: 25px; '
      }
    }
  }
}
</script>
