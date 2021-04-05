import Vue from 'vue'

export function updateBms (state, array) {
    // Formateamos a tres decimales para visualizar bien
    var decimales = 1E3
    var x = 0
    var l = array.length
    while (x < l) {
      array[x] = Math.round(array[x] * decimales) / decimales
      x++
    }
  
    // Cambiamos el state
    Vue.set(state, 'bms', [...array]) // [...array] Copiamos para prevenir cambios de terceros
  
    // Update del gráfico
    //Vue.set(state.data_grafico_2, 0, state.bms[11]) // Average Temp BMS
  }