<template>
  <div style="width: 100%;padding-top:0%;flex-wrap:wrap">
    <!-- Sevcon der data -->
    <div class="col" style="width:100%;display: flex; flex-direction: row;justify-content: space-between;align-items: center;">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/wheel.png"
        style="height: 60px;width: 60px"
        />
        <div class="biggertag">
          Izquierdo
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{22}}
        </div>
        <div class="biggertag">
          Ef %
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{6.3}} <!-- der_battery_V * der_battery_I -->
        </div>
        <div class="biggertag">
          B. kW
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{4.3}} <!-- der_battery_V * der_motor_I -->
        </div>
        <div class="biggertag">
          M. kW
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{80}}
        </div>
        <div class="biggertag">
          T. dem
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{92}}
        </div>
        <div class="biggertag">
          T. Nm
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{526}}
        </div>
        <div class="biggertag">
          RPM
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{50}}
        </div>
        <div class="biggertag">
          Iq t.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{63}}
        </div>
        <div class="biggertag">
          Iq
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{70}}
        </div>
        <div class="biggertag">
          Vq
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{96}}
        </div>
        <div class="biggertag">
          I t.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{73}}
        </div>
        <div class="biggertag">
          I d.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{96}}
        </div>
        <div class="biggertag">
          V d.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{77}}
        </div>
        <div class="biggertag">
          T t. %
        </div>
      </div>
    </div>

    <!-- Sevcon izq data -->
    <div class="col" style="width:100%;display: flex; flex-direction: row;justify-content: space-between;align-items: center;margin-top:1%">
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <img
        src="~assets/Auriga/wheel.png"
        style="height: 60px;width: 60px"
        />
        <div class="biggertag">
          Izquierdo
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{22}}
        </div>
        <div class="biggertag">
          Ef %
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{6.3}} <!-- der_battery_V * der_battery_I -->
        </div>
        <div class="biggertag">
          B. kW
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{4.3}} <!-- der_battery_V * der_motor_I -->
        </div>
        <div class="biggertag">
          M. kW
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{80}}
        </div>
        <div class="biggertag">
          T. dem
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{92}}
        </div>
        <div class="biggertag">
          T. Nm
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{526}}
        </div>
        <div class="biggertag">
          RPM
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{50}}
        </div>
        <div class="biggertag">
          Iq t.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{63}}
        </div>
        <div class="biggertag">
          Iq
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{70}}
        </div>
        <div class="biggertag">
          Vq
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{96}}
        </div>
        <div class="biggertag">
          I t.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{73}}
        </div>
        <div class="biggertag">
          I d.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{96}}
        </div>
        <div class="biggertag">
          V d.
        </div>
      </div>
      <div style="display:flex;flex-direction: column;alignItems: center;justify-content: center;font-size:18px;">
        <div style="height: 60px;" class="numero">
          {{77}}
        </div>
        <div class="biggertag">
          T t. %
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
