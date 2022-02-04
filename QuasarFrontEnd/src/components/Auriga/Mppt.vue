<template>
  <div class="row" style="width: 100%;padding-top:2%">
    <!-- MPPT1 data -->
    <div class="col" style="width:50%;display: flex; flex-direction: row;justify-content: space-between;align-items: center">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/solar-panel.png"
        style="height: 60px;width: 80px"
        />
        <div class="biggertag">
          Techo
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ (mppt1[0] * mppt1[1]).toFixed(0) }}
        </div>
        <div class="biggertag">
          W
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ mppt1[0].toFixed(1)}}
        </div>
        <div class="biggertag">
          V in
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{mppt1[1].toFixed(1)}}
        </div>
        <div class="biggertag">
          I in
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{mppt1[2].toFixed(1)}}
        </div>
        <div class="biggertag">
          V out
        </div>
      </div>
      <!-- <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          BVLR
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          OVT
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          NC
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          UNDV
        </div>
      </div> -->
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{mppt1[7].toFixed(0)}}
        </div>
        <div class="biggertag">
          T °C
        </div>
      </div>
    </div>

    <div style="width:50px"/>

    <!-- MPPT2 data -->
    <div class="col" style="width:50%;display: flex; flex-direction: row;justify-content: space-between;align-items: center">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/solar-panel.png"
        style="height: 60px;width: 80px"
        />
        <div class="biggertag">
          Cola
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ (mppt2[0] * mppt2[1]).toFixed(0) }}
        </div>
        <div class="biggertag">
          W
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ mppt2[0].toFixed(1) }}
        </div>
        <div class="biggertag">
          V in
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ mppt2[1].toFixed(1) }}
        </div>
        <div class="biggertag">
          I in
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ mppt2[2].toFixed(1) }}
        </div>
        <div class="biggertag">
          V out
        </div>
      </div>
      <!-- <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          BVLR
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          OVT
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          NC
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{1}}
        </div>
        <div class="biggertag">
          UNDV
        </div>
      </div> -->
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{ mppt2[7].toFixed(0) }}
        </div>
        <div class="biggertag">
          T °C
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Mppt',
  computed: {
    ...mapState('auriga', ['mppt1', 'mppt2'])
  }
}
</script>

<style>

</style>
