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
          {{20}}
        </div>
        <div class="biggertag">
          Id min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{6}}
        </div>
        <div class="biggertag">
          Id max
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{3.24}}
        </div>
        <div class="biggertag">
          Min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{4.01}}
        </div>
        <div class="biggertag">
          Avg
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{4.12}}
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
          {{6}}
        </div>
        <div class="biggertag">
          Id min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{23}}
        </div>
        <div class="biggertag">
          Id max
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{16}}
        </div>
        <div class="biggertag">
          Min
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{27}}
        </div>
        <div class="biggertag">
          Avg
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{34}}
        </div>
        <div class="biggertag">
          Max
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
