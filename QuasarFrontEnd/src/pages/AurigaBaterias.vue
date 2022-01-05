<template>
  <q-page class="flex flex-center topCenter-auriga">
    <div class="col">
      <div class="row">
        <PrincipalResumen></PrincipalResumen>
      </div>
      <!--
      <div class="row">
          <div class="col">
            <h5>{{ minBatteries }}</h5>
          </div>
          <div class="col">
            <h5>{{ meanBatteries }}</h5>
          </div>
          <div class="col">
            <h5>{{ maxBatteries }}</h5>
          </div>
      </div>
      -->
      <div class="" v-for='index in 28' :key="index" >
          <div class="row padding-1" v-if="index % 5 === 0">
            <div class="col">
              <div class="row">
                <div class="col-1">
                  {{ index + 1 }} <!-- Módulo Número (parte del 0, que es el módulo 1) -->
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+111-1])">
                      {{ bms[index+111-1] }} <!-- Primer Termistor son los pares (0 en a 58) -->
                    </div>
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+83-1])">
                      {{ bms[index+83-1] }} <!-- Segundo Termistor son los impares (1 a 59) -->
                    </div>
                  </div>
                  <div class="text-center numero" :style="rgbInterpolationVOLTAJE(bms[index+55-1])">
                    {{ bms[index+55-1] }} <!-- Módulo va a la par con el índice -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-1">
                  {{ (index + 1) + 1 }}
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+111-1+1])">
                      {{ bms[index+111-1+1] }}
                    </div>
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+83-1+1])">
                      {{ bms[index+83-1+1] }}
                    </div>
                  </div>
                  <div class="text-center numero" :style="rgbInterpolationVOLTAJE(bms[index+55-1+1])">
                    {{ bms[index+55-1+1] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-1">
                  {{ (index + 2) + 1 }}
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+111-1+2])">
                      {{ bms[index+111-1+2] }}
                    </div>
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+83-1+2])">
                      {{ bms[index+83-1+2] }}
                    </div>
                  </div>
                    <div class="text-center numero" :style="rgbInterpolationVOLTAJE(bms[index+55-1+2])">
                    {{ bms[index+55-1+2] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-1">
                  {{ (index + 3) + 1 }}
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+111-1+3])">
                      {{ bms[index+111-1+3] }}
                    </div>
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+83-1+3])">
                      {{ bms[index+83-1+3] }}
                    </div>
                  </div>
                  <div class="text-center numero" :style="rgbInterpolationVOLTAJE(bms[index+55-1+3])">
                    {{ bms[index+55-1+3] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-1">
                  {{ (index + 4) + 1 }}
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+111-1+4])">
                      {{ bms[index+111-1+4] }}
                    </div>
                    <div class="col allCenter" :style="hslInterpolationTEMPERATURA(bms[index+83-1+4])">
                      {{ bms[index+83-1+4] }}
                    </div>
                  </div>
                  <div class="text-center numero" :style="rgbInterpolationVOLTAJE(bms[index+55-1+4])">
                    {{ bms[index+55-1+4] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <Menu></Menu>
        </div>
    </div>
  </q-page>
</template>

<script>

// import AlertasSuperiores from '../components/Auriga/AlertasSuperiores'
// import AlertasInferiores from '../components/Auriga/AlertasInferiores'
// import Marcha from '../components/Auriga/Marcha'
import Menu from '../components/Auriga/Menu'
/* Métodos para interpolar colores en RGB o HSL. Source: https://codepen.io/njmcode/pen/axoyD/ */

// // Converts a #ffffff hex string into an [r,g,b] array
// var h2r = function (hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
//   return result ? [
//     parseInt(result[1], 16),
//     parseInt(result[2], 16),
//     parseInt(result[3], 16)
//   ] : null
// }

// // Inverse of the above
// var r2h = function (rgb) {
//   return '#' + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
// }

// // Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
// // Taken from the awesome ROT.js roguelike dev library at
// // https://github.com/ondras/rot.js
// var _interpolateRGB = function (color1, color2, factor) {
//   if (arguments.length < 3) { factor = 0.5 }
//   var result = color1.slice()
//   for (var i = 0; i < 3; i++) {
//     result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
//   }
//   return result
// }

var rgb2hsl = function (color) {
  var r = color[0] / 255
  var g = color[1] / 255
  var b = color[2] / 255

  var max = Math.max(r, g, b), min = Math.min(r, g, b)
  var h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = (l > 0.5 ? d / (2 - max - min) : d / (max + min))
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return [h, s, l]
}

function hue2rgb (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

var hsl2rgb = function (color) {
  var l = color[2]

  if (color[1] === 0) {
    l = Math.round(l * 255)
    return [l, l, l]
  } else {
    var s = color[1]
    var q = (l < 0.5 ? l * (1 + s) : l + s - l * s)
    var p = 2 * l - q
    var r = hue2rgb(p, q, color[0] + 1 / 3)
    var g = hue2rgb(p, q, color[0])
    var b = hue2rgb(p, q, color[0] - 1 / 3)
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }
}

var _interpolateHSL = function (color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5 }
  var hsl1 = rgb2hsl(color1)
  var hsl2 = rgb2hsl(color2)
  for (var i = 0; i < 3; i++) {
    hsl1[i] += factor * (hsl2[i] - hsl1[i])
  }
  return hsl2rgb(hsl1)
}

import { mapState, mapMutations } from 'vuex'
import PrincipalResumen from '../components/Auriga/Principal_Resumen.vue'

export default {
  data () {
    return {
      progress: '0.5'
    }
  },
  name: 'BancoBaterias',
  components: { PrincipalResumen, Menu },
  computed: {
    ...mapState('auriga', ['bms']),
    minBatteries () {
      return 'minimoBat'
    },
    meanBatteries () {
      return 'mediaBat'
    },
    maxBatteries () {
      return 'maximoBat'
    }
  },
  methods: {
    ...mapMutations('fenix', ['updateModulo']),
    rgbInterpolationVOLTAJE (valor) {
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
      return 'background-color: rgb(' + colorFinal[0] + ',' + colorFinal[1] + ',' + colorFinal[2] + ');'
    },
    hslInterpolationTEMPERATURA (valor) {
      var maxT = 50
      var minT = 5
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
      return 'background-color: rgb(' + colorFinal[0] + ',' + colorFinal[1] + ',' + colorFinal[2] + ');'
    }
  }
}
</script>
