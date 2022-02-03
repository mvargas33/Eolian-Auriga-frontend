<template>
  <div class="col">
    <!-- First row -->
    <div class="row" style="padding-top: 0%">
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/hard_wire_contactor_req-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/high_volt_b-_leak_chassis-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/high_volt_b+_leak_chassis-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/HNlheeyn48-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/interlock_is_tripped-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/k1_relay_shortened-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/k2_relay_shortened-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/loss_of_cancon_hvfe-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/no_battery_volt-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
    </div>
    <!-- Second row -->
    <div class="row" style="padding-top: 0%">
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/open_k1_k3__shorted_k2-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/overtemp-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/overvolt-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/power_from_load-removebg-preview.svg"
              style="width: 100%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/power_from_source-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/relay_fault-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/relay_k2_opened-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div>
        <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/undervolt-removebg-preview.svg"
              style="width: 95%;filter: grayscale(100%)"
            >
        </div>
        <!-- <div class="col allCenter">
            <img
              src="~assets/Auriga/EolianIconsSVG/no_battery_volt-removebg-preview.svg"
              style="width: 90%;filter: grayscale(100%)"
            >
        </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlertasInferiores',
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
