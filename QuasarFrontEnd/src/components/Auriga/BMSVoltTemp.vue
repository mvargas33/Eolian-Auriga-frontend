<template>
  <div class="row" style="width: 100%;padding-top:2%">
    <!-- MPPT1 data -->
    <div class="col" style="width:50%;display: flex; flex-direction: row;justify-content: space-between;align-items: center">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/battery.png"
        style="height: 60px;width: 80px"
        />
        <div class="biggertag">
          Voltajes
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[33]}}
        </div>
        <div class="biggertag">
          Id min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[35]}}
        </div>
        <div class="biggertag">
          Id max
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[32].toFixed(2)}}
        </div>
        <div class="biggertag">
          Min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{averageVolt}}
        </div>
        <div class="biggertag">
          Avg
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[34].toFixed(2)}}
        </div>
        <div class="biggertag">
          Max
        </div>
      </div>
    </div>

    <div style="width:50px"/>

    <!-- MPPT2 data -->
    <div class="col" style="width:50%;display: flex; flex-direction: row;justify-content: space-between;align-items: center">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/termometro.png"
        style="height: 60px;width: 80px"
        />
        <div class="biggertag">
          Temp
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[47]}}
        </div>
        <div class="biggertag">
          Id min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[49]}}
        </div>
        <div class="biggertag">
          Id max
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[46].toFixed(0)}}
        </div>
        <div class="biggertag">
          Min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[45].toFixed(0)}}
        </div>
        <div class="biggertag">
          Avg
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{bms[48].toFixed(0)}}
        </div>
        <div class="biggertag">
          Max
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BMSVoltTemp',
  computed: {
    ...mapState('auriga', ['bms']),
    averageVolt () {
      //  TODO: QUIZAS CAMBIAR ESTO AL HACER UPDATE EN EL STATE
      var avg_volt = 0.0
      var total = 0
      for (var i = 55; i < 83; i++) {
        if (this.$store.state.auriga.bms[i] > 0.0) {
          avg_volt += this.$store.state.auriga.bms[i]
          total += 1
        }
      }
      if (total > 1) {
        return (avg_volt / total).toFixed(2)
      } else {
        return 0
      }
    }
  }

}
</script>

<style>

</style>
