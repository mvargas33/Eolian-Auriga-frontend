<template>
<div style="width: 100%;padding-top:3%">
  <!-- BMS data -->
  <!-- <div style="padding-top:1%;padding-bottom:0%;display: flex; flex-direction: row;justify-content: space-between;align-items: center">
    <div class="temperaturas" style="min-width: 30%;display:flex;align-items:center;justify-content: left">
      <div style="width: 60px;border-radius: 10px; border: 1px solid white;padding: 2px;display:flex;align-items:center;justify-content: center;margin: 5px 20px 5px 0px">
        {{14}}
      </div>
      <div style="width: 60px;display:flex;align-items:center;justify-content: center;margin: 5px 20px 5px 0px">
        {{ 3.42 }}ⱽ
      </div>
      <div style="width: 60px;border-radius: 10px; border: 1px solid white;padding: 2px;display:flex;align-items:center;justify-content: center;margin: 5px 20px 5px 0px">
        {{7}}
      </div>
      <div style="width: 60px;display:flex;align-items:center;justify-content: center;margin: 5px 20px 5px 0px">
        {{ 4.32 }}ⱽ
      </div>
      <div style="width: 33%;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 0px;flex-grow: 1">
        {{ 4.21 }}ⱽ
      </div>
    </div>
    <div class="temperaturas" style="min-width: 10%;display:flex;align-items:center;justify-content: center;flex-grow: 1;border-radius: 10px; border: 0px solid white;">

      <div style="width: 10%;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 0px;flex-grow: 1;font-size:60%">

      </div>

    </div>

    <div class="temperaturas" style="min-width: 30%;display:flex;align-items:center;justify-content: right">
      <div style="width: 33%;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 0px;flex-grow: 1">
        {{ 38 }}°
      </div>
      <div style="width: 60px;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 20px">
        {{ 24 }}°
      </div>
      <div style="width: 60px;border-radius: 10px; border: 1px solid white;padding: 2px;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 20px">
        {{14}}
      </div>
      <div style="width: 60px;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 20px">
        {{ 65 }}°
      </div>
      <div style="width: 60px;border-radius: 10px; border: 1px solid white;padding: 2px;display:flex;align-items:center;justify-content: center;margin: 5px 0px 5px 20px">
        {{7}}
      </div>
    </div>
  </div> -->
  <!-- Escala volt -->
  <div style=" margin-top:1%;margin-bottom:1%;width:100%;padding: 0% 0.5% 0% 0.5%;display:flex;justify-content:space-between;flex-direction:column">
    <div style=" margin-top:0%;margin-bottom:0%;width:100%;display:flex;justify-content:space-between;flex-direction:row">
      <div class="escala-etiqueta">
        3.4ⱽ
      </div>
      <div class="escala-etiqueta">
        3.6ⱽ
      </div>
      <div class="escala-etiqueta">
        Voltajes
      </div>
      <div class="escala-etiqueta">
        4.0ⱽ
      </div>
      <div class="escala-etiqueta">
        4.2ⱽ
      </div>
    </div>
    <canvas id="canvasVolt" style="width:100%;height: 10px;"/>
  </div>
  <!-- Mapa de calor de voltajes -->
  <div style="padding-top:0%;display: flex; flex-direction: row;justify-content: space-between">
      <!-- Banco delantero -->
      <div style="width: calc(50% - 1%);margin-right:1%;">
        <!-- Superior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[67])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[66])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[65])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[64])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[63])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[62])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[61])"/>
          <div class="col heatmapSquare" style="background-color: transparent"/> <!-- empty -->
        </div>
        <!-- Inferior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[68])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[69])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[70])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[71])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[72])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[73])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[74])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[75])"/>
        </div>

      </div>

      <!-- Banco trasero -->
      <div style="width: calc(50% - 1%);margin-left:1%;">
        <!-- Superior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[60])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[59])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[58])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[57])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[56])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[55])"/>
          <div class="col heatmapSquare" style="background-color: transparent"/> <!-- empty -->
        </div>
        <!-- Inferior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[76])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[77])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[78])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[79])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[80])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[81])"/>
          <div class="col heatmapSquare" :style="rgbInterpolationGreenRedBackground(bms[82])"/>
        </div>
      </div>
  </div>

  <!-- Temp -->
  <div style="padding-top:3%;display: flex; flex-direction: row;justify-content: space-between">
      <!-- Banco delantero -->
      <div style="width: calc(50% - 1%);margin-right:1%;">
        <!-- Superior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[95])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[94])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[93])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[92])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[91])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[90])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[89])"/>
          <div class="col heatmapSquare" style="background-color: transparent"/> <!-- empty -->
        </div>
        <!-- Inferior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[96])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[97])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[98])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[99])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[100])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[101])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[102])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[103])"/>
        </div>

      </div>

      <!-- Banco trasero -->
      <div style="width: calc(50% - 1%);margin-left:1%;">
        <!-- Superior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[88])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[87])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[86])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[85])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[84])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[83])"/>
          <div class="col heatmapSquare" style="background-color: transparent"/> <!-- empty -->
        </div>
        <!-- Inferior -->
        <div class="row" style="width: 100%">
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[104])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[105])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[106])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[107])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[108])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[109])"/>
          <div class="col heatmapSquare" :style="hslInterpolationBlueRedBackground(bms[110])"/>
        </div>
      </div>
  </div>
  <!-- Escala temp -->
  <div style=" margin-top:1%;margin-bottom:1%;width:100%;padding: 0% 0.5% 0% 0.5%;display:flex;justify-content:space-between;flex-direction:column">
    <canvas id="canvasTemp" style="width:100%;height: 10px;"/>
    <div style=" margin-top:1%;margin-bottom:1%;width:100%;display:flex;justify-content:space-between;flex-direction:row">
      <div class="escala-etiqueta">
        10°
      </div>
      <div class="escala-etiqueta">
        22.5°
      </div>
      <div class="escala-etiqueta">
        Temperaturas
      </div>
      <div class="escala-etiqueta">
        47.5°
      </div>
      <div class="escala-etiqueta">
        60°
      </div>
    </div>
  </div>

</div>

</template>

<script>
import { mapState } from 'vuex'
import { _interpolateHSL } from './utils'

export default {
  name: 'BancoBaterias',
  computed: {
    ...mapState('auriga', ['bms'])
  },
  mounted () {
    // Escla de temp
    var canvasTemp = document.getElementById('canvasTemp')
    canvasTemp.width = 800
    canvasTemp.height = 100
    var ctx = canvasTemp.getContext('2d')
    for (var i = 0; i < canvasTemp.width; i++) {
      ctx.fillStyle = this.hslInterpolationBlueRed(10 + (60 - 10) * (i / canvasTemp.width))
      ctx.fillRect(i, 0, 1, canvasTemp.height)
    }
    // Escla de volt
    var canvasVolt = document.getElementById('canvasVolt')
    canvasVolt.width = 800
    canvasVolt.height = 100
    var ctxTemp = canvasVolt.getContext('2d')
    for (var j = 0; j < canvasVolt.width; j++) {
      ctxTemp.fillStyle = this.rgbInterpolationGreenRed(3.4 + (4.2 - 3.4) * (j / canvasVolt.width))
      ctxTemp.fillRect(j, 0, 1, canvasVolt.height)
    }
  },
  methods: {
    // ...mapMutations('fenix', ['updateModulo']),
    rgbInterpolationGreenRed (valor) {
      var maxV = 4.2
      var minV = 3.4
      var factor = (valor - minV) / (maxV - minV) // [3.4, 4.2] -> [0, 1]
      var color1 = [255, 0, 0] // From Red
      var color2 = [0, 255, 0] // To Green
      var colorFinal
      if (valor <= minV) {
        colorFinal = color1
      } else if (valor >= maxV) {
        colorFinal = color2
      } else {
        colorFinal = _interpolateHSL(color1, color2, factor)
      }
      return (
        'rgb(' +
        colorFinal[0] +
        ',' +
        colorFinal[1] +
        ',' +
        colorFinal[2] +
        ')'
      )
    },
    rgbInterpolationGreenRedBackground (valor) {
      return 'background-color: ' + this.rgbInterpolationGreenRed(valor) + ';'
    },
    hslInterpolationBlueRed (valor) {
      var maxT = 60
      var minT = 10
      var factor = (valor - minT) / (maxT - minT)
      var color1 = [0, 150, 255] // From Light Blue
      var color2 = [255, 0, 0] // To Red
      var colorFinal
      if (valor <= minT) {
        colorFinal = color1
      } else if (valor >= maxT) {
        colorFinal = color2
      } else {
        colorFinal = _interpolateHSL(color1, color2, factor)
      }
      return (
        'rgb(' +
        colorFinal[0] +
        ',' +
        colorFinal[1] +
        ',' +
        colorFinal[2] +
        ')'
      )
    },
    hslInterpolationBlueRedBackground (valor) {
      return 'background-color: ' + this.hslInterpolationBlueRed(valor) + ';'
    }
  }

}
</script>

<style>

</style>
