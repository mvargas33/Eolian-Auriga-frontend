import Vue from 'vue'

function updateComponent (state, array, n_dec, component_name) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = n_dec
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, component_name, [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateBms (state, array) {
  updateComponent(state, array, 1E3, 'bms')
}

export function updateSevcon (state, array) {
  updateComponent(state, array, 1E1, 'sevcon')
  Vue.set(state.data_grafico_3, 0, array[16] * array[19]) // [Pin_izq, Pout_izq, Pin_der, Pout_der]
  Vue.set(state.data_grafico_3, 1, array[16] * array[19])
  Vue.set(state.data_grafico_3, 2, array[0] * array[3])
  Vue.set(state.data_grafico_3, 3, array[0] * array[3])
}

export function updateMppt1 (state, array) {
  updateComponent(state, array, 1E1, 'mppt1')
}

export function updateMppt2 (state, array) {
  updateComponent(state, array, 1E1, 'mppt2')
}

export function testBMS (state) {
  var new_val = Math.round(Math.random())
  var new_val2 = Math.round(Math.random() * 19)
  Vue.set(state.bms, 0, new_val)
  Vue.set(state.bms, 14, new_val2)
  // console.log(state.bms)
}
