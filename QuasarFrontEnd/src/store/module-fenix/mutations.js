import Vue from 'vue'
/* Mutations para debug, test y pruebas */
export function SOCKET_CHAT_MESSAGE (state, message) {
  console.log('mutation called')
}

export function SOCKET_updateData (context, data) {
  console.log('Action triggered! socket_updateMainData\n')
  console.log(data)
}

export function updateVelocidad (state) {
  Vue.set(state.mainData, 0, state.mainData[0] + 1) // state.mainData[0]++ No funciona, usar Vue.set https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
}

export function replaceMainData (state) {
  var a = [100, 3, 0.98, 80, 3.7, 3.6, 38, 20.5] // 8 [velocidad, potencia, mppt_in, soc, max_volt, min_volt, max_temp, min_temp]
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = a.length
  while (x < l) {
    a[x] = Math.round(a[x] * decimales) / decimales
    x++
  }
  Vue.set(state, 'mainData', [...a]) // [..myArray] will prevent changes to the object from other source to change your source, so it's a good idea to implement in getters too. https://stackoverflow.com/questions/50767191/vuex-update-an-entire-array/50767787
}

export function updatePotencia (state) {
  console.log(state.mainData)
  state.mainData[1]++
  console.log(state.mainData)
}

export function updateModulo (state, index) {
  var newVal = Math.round((state.bms_temp[index] + 1) * 10) / 10
  Vue.set(state.bms_temp, index, newVal)
}

export function sumsoc (state) {
  Vue.set(state.mainData, 3, state.mainData[3] + 1) // state.mainData[0]++ No funciona, usar Vue.set https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
}

export function updateTemps (state) {
  Vue.set(state.bms, 11, state.bms[11] + 1)
  Vue.set(state.data_grafico_2, 0, state.bms[11])

  Vue.set(state.kelly_der, 11, state.kelly_der[11] + 2)
  Vue.set(state.data_grafico_2, 1, state.kelly_der[11])

  Vue.set(state.kelly_izq, 11, state.kelly_izq[11] + 3)
  Vue.set(state.data_grafico_2, 2, state.kelly_izq[11])
}

/* Mutations reales de update de arreglos de componentes en el store */

export function updateMainData (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E1
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'mainData', [...array]) // [...array] Copiamos para prevenir cambios de terceros

  // Update del gráfico
  Vue.set(state.data_grafico_1, 0, state.mainData[0]) // Velocidad
  Vue.set(state.data_grafico_1, 1, state.mainData[1]) // Potencia (Consumo)
  Vue.set(state.data_grafico_1, 2, state.mainData[2]) // Paneles IN (MPPT)
}

export function updateKellyDer (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'kelly_der', [...array]) // [...array] Copiamos para prevenir cambios de terceros

  // Update del gráfico
  console.log(state.kelly_izq[10])
  Vue.set(state.data_grafico_2, 1, state.kelly_der[10]) // Temp Kelly Der
}

export function updateKellyIzq (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'kelly_izq', [...array]) // [...array] Copiamos para prevenir cambios de terceros

  // Update del gráfico
  Vue.set(state.data_grafico_2, 2, state.kelly_izq[10]) // Temp Kelly Izq
}

export function updateBms (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E1
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'bms', [...array]) // [...array] Copiamos para prevenir cambios de terceros

  // Update del gráfico
  Vue.set(state.data_grafico_2, 0, state.bms[11]) // Average Temp BMS
}

export function updateBmsAuriga (state, array) {
  /*
    bms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // 15 [SOC, current, inst_volt, open_volt, abs_current, max_volt, min_volt, max_temp, max_temp_id, min_temp, min_temp_id, avg_temp, internal_temp, max_volt_id, min_volt_id]
    bms_temp: [0, 70, 60, 50, 40, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 60
    bms_volt: [3.4, 3.5, 3.65, 3.75, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.666, 0, 0, 0, 0] 30
    data_grafico_1: [0, 0, 0], // 3 [Velocidad, Consumo, Paneles IN]
    data_grafico_2: [0, 0, 0] // 3 [Temp BMS, Temp Kelly_Der, Temp Kelly_Izq]
    mainData: [56, 3.4, 1.024, 33, 4.048, 3.876, 34.5, 27.9], // 8 [velocidad, potencia, mppt_in, soc, max_volt, min_volt, max_temp, min_temp]
  */

  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E3
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // // TODO: borrar este monstruo
  // // ta todo hardcodeao pls no me odien
  Vue.set(state.bms, 0, array[41]) // SOC
  Vue.set(state.bms, 1, array[36]) // current
  // state.bms[2] = array[]; // inst_volt
  Vue.set(state.bms, 3, array[31]) // open_volt
  Vue.set(state.bms, 4, array[36]) // abs_current
  Vue.set(state.bms, 5, array[34]) // max_volt
  Vue.set(state.bms, 6, array[32]) // min_volt
  Vue.set(state.bms, 7, array[48]) // max_temp
  Vue.set(state.bms, 8, array[49]) // max_temp_id
  Vue.set(state.bms, 9, array[46]) // min_temp
  Vue.set(state.bms, 10, array[47]) // min_temp_id
  let avg_temp = []
  for (let i = 0; i < 28; i++) {
    avg_temp.push(array[i + 83]) // temp all time
  }
  avg_temp = avg_temp.reduce((a, b) => a + b, 0) / avg_temp.length
  avg_temp = Math.round(avg_temp * 100.0) / 100.0
  Vue.set(state.bms, 11, avg_temp) // avg_temp
  // // state.bms[12] = array[]; // internal_temp
  Vue.set(state.bms, 13, array[35]) // max_volt_id
  Vue.set(state.bms, 14, array[33]) // min_volt_id
  // // ...
  // // state.mainData[0] = array[] // velocidad
  // // state.mainData[1] = array[] // potencia
  // // state.mainData[2] = array[] // mppt_int
  Vue.set(state.mainData, 3, array[41]) // soc
  Vue.set(state.mainData, 4, array[34]) // max_volt
  Vue.set(state.mainData, 5, array[32]) // min_volt
  Vue.set(state.mainData, 6, array[48]) // max_temp
  Vue.set(state.mainData, 7, array[46]) // min_temp
  // // state.data_grafico_1[0] = array[] // velocidad
  // // state.data_grafico_1[1] = array[] // consumo
  // // state.data_grafico_1[2] = array[] // paneles IN
  Vue.set(state.data_grafico_2, 0, array[45]) // tempBMS
  // // state.data_grafico_2[1] = array[] // tempKellyder
  // // state.data_grafico_2[2] = array[] // tempkellyizq
  for (let i = 0; i < 28; i++) {
    Vue.set(state.bms_volt, i, array[i + 55])
    Vue.set(state.bms_temp, 2 * i, array[i + 111]) // temp when balancing off
    Vue.set(state.bms_temp, 2 * i + 1, array[i + 83]) // temp all time
  }
}

export function updateSevconDer (state, array) {
  /*
    bms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // 15 [SOC, current, inst_volt, open_volt, abs_current, max_volt, min_volt, max_temp, max_temp_id, min_temp, min_temp_id, avg_temp, internal_temp, max_volt_id, min_volt_id]
    bms_temp: [0, 70, 60, 50, 40, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 60
    bms_volt: [3.4, 3.5, 3.65, 3.75, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.666, 0, 0, 0, 0] 30
    data_grafico_1: [0, 0, 0], // 3 [Velocidad, Consumo, Paneles IN]
    data_grafico_2: [0, 0, 0] // 3 [Temp BMS, Temp Kelly_Der, Temp Kelly_Izq]
    mainData: [56, 3.4, 1.024, 33, 4.048, 3.876, 34.5, 27.9], // 8 [velocidad, potencia, mppt_in, soc, max_volt, min_volt, max_temp, min_temp]
    kelly_izq [ia, ib, ic, va, vb, vc, rpm, err_code, pwm, emr, motor_temp, kelly_temp, throttle, reverse]
    kelly_der [ia, ib, ic, va, vb, vc, rpm, err_code, pwm, emr, motor_temp, kelly_temp, throttle, reverse]
  */

  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E3
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }
  // desde el back potin = 6, potout = 7, ttoruqe=10, atorque=3,
  // Vue.set(state.kelly_izq, 11, array[10])
  // Vue.set(state.kelly_izq, 8, array[3])
  Vue.set(state.kelly_der, 13, array[3]) // Torque demand
  Vue.set(state.kelly_der, 6, array[4]) // rpm
  Vue.set(state.kelly_der, 11, array[6]) // Pin
  Vue.set(state.kelly_der, 8, array[7]) // Pout
  Vue.set(state.kelly_der, 12, array[10]) // Torque actual
  Vue.set(state.kelly_der, 10, array[13]) // vel
  Vue.set(state.kelly_der, 0, array[2]) // vel
  // Vue.set(state.kelly_izq, 6, array[4])
  // Vue.set(state.kelly_izq, 10, array[2])
  Vue.set(state.data_grafico_1, 0, array[13]) // velocidad
  Vue.set(state.data_grafico_2, 1, array[2])
  Vue.set(state.data_grafico_3, 2, array[6])
  Vue.set(state.data_grafico_3, 3, array[7])
  // // // TODO: borrar este monstruo
  // // // ta todo hardcodeao pls no me odien
  // Vue.set(state.bms, 0, array[41]) // SOC
  // Vue.set(state.bms, 1, array[36]) // current
  // // state.bms[2] = array[]; // inst_volt
  // // state.bms[3] = array[]; // open_volt
  // // state.bms[4] = array[]; // abs_current
  // Vue.set(state.bms, 5, array[34]) // max_volt
  // Vue.set(state.bms, 6, array[32]) // min_volt
  // Vue.set(state.bms, 7, array[48]) // max_temp
  // Vue.set(state.bms, 8, array[49]) // max_temp_id
  // Vue.set(state.bms, 9, array[46]) // min_temp
  // Vue.set(state.bms, 10, array[47]) // min_temp_id
  // // // state.bms[11] = array[]; // avg_temp
  // // // state.bms[12] = array[]; // internal_temp
  // Vue.set(state.bms, 13, array[35]) // max_volt_id
  // Vue.set(state.bms, 14, array[33]) // min_volt_id
  // // // ...
  // Vue.set(state.mainData, 0, array[13]) // velocidad
  // // // state.mainData[1] = array[] // potencia
  // // // state.mainData[2] = array[] // mppt_int
  // Vue.set(state.mainData, 3, array[41]) // soc
  // Vue.set(state.mainData, 4, array[34]) // max_volt
  // Vue.set(state.mainData, 5, array[32]) // min_volt
  // Vue.set(state.mainData, 6, array[48]) // max_temp
  // Vue.set(state.mainData, 7, array[46]) // min_temp
  // // // state.data_grafico_1[1] = array[] // consumo
  // // // state.data_grafico_1[2] = array[] // paneles IN
  // Vue.set(state.data_grafico_2, 0, array[45]) // tempBMS
  // // // state.data_grafico_2[1] = array[] // tempKellyder
  // // // state.data_grafico_2[2] = array[] // tempkellyizq
}

export function updateSevconIzq (state, array) {
  /*
    bms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // 15 [SOC, current, inst_volt, open_volt, abs_current, max_volt, min_volt, max_temp, max_temp_id, min_temp, min_temp_id, avg_temp, internal_temp, max_volt_id, min_volt_id]
    bms_temp: [0, 70, 60, 50, 40, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 60
    bms_volt: [3.4, 3.5, 3.65, 3.75, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.666, 0, 0, 0, 0] 30
    data_grafico_1: [0, 0, 0], // 3 [Velocidad, Consumo, Paneles IN]
    data_grafico_2: [0, 0, 0] // 3 [Temp BMS, Temp Kelly_Der, Temp Kelly_Izq]
    mainData: [56, 3.4, 1.024, 33, 4.048, 3.876, 34.5, 27.9], // 8 [velocidad, potencia, mppt_in, soc, max_volt, min_volt, max_temp, min_temp]
    kelly_izq [ia, ib, ic, va, vb, vc, rpm, err_code, pwm, emr, motor_temp, kelly_temp, throttle, reverse]
    kelly_der [ia, ib, ic, va, vb, vc, rpm, err_code, pwm, emr, motor_temp, kelly_temp, throttle, reverse]
  */

  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E3
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }
  // desde el back potin = 6, potout = 7, ttoruqe=10, atorque=3,
  Vue.set(state.kelly_izq, 13, array[3]) // Torque demand
  Vue.set(state.kelly_izq, 6, array[4]) // rpm
  Vue.set(state.kelly_izq, 11, array[6]) // Pin
  Vue.set(state.kelly_izq, 8, array[7]) // Pout
  Vue.set(state.kelly_izq, 12, array[10]) // Torque actual
  Vue.set(state.kelly_izq, 10, array[13]) // vel
  Vue.set(state.kelly_izq, 0, array[2]) // vel
  // Vue.set(state.kelly_izq, 6, array[4])
  // Vue.set(state.kelly_izq, 10, array[2])
  Vue.set(state.data_grafico_1, 1, array[13]) // velocidad
  Vue.set(state.data_grafico_2, 2, array[2])
  Vue.set(state.data_grafico_3, 0, array[6])
  Vue.set(state.data_grafico_3, 1, array[7])
  // // // TODO: borrar este monstruo
  // // // ta todo hardcodeao pls no me odien
  // Vue.set(state.bms, 0, array[41]) // SOC
  // Vue.set(state.bms, 1, array[36]) // current
  // // state.bms[2] = array[]; // inst_volt
  // // state.bms[3] = array[]; // open_volt
  // // state.bms[4] = array[]; // abs_current
  // Vue.set(state.bms, 5, array[34]) // max_volt
  // Vue.set(state.bms, 6, array[32]) // min_volt
  // Vue.set(state.bms, 7, array[48]) // max_temp
  // Vue.set(state.bms, 8, array[49]) // max_temp_id
  // Vue.set(state.bms, 9, array[46]) // min_temp
  // Vue.set(state.bms, 10, array[47]) // min_temp_id
  // // // state.bms[11] = array[]; // avg_temp
  // // // state.bms[12] = array[]; // internal_temp
  // Vue.set(state.bms, 13, array[35]) // max_volt_id
  // Vue.set(state.bms, 14, array[33]) // min_volt_id
  // // // ...
  Vue.set(state.mainData, 0, array[13]) // velocidad
  // // // state.mainData[1] = array[] // potencia
  // // // state.mainData[2] = array[] // mppt_int
  // Vue.set(state.mainData, 3, array[41]) // soc
  // Vue.set(state.mainData, 4, array[34]) // max_volt
  // Vue.set(state.mainData, 5, array[32]) // min_volt
  // Vue.set(state.mainData, 6, array[48]) // max_temp
  // Vue.set(state.mainData, 7, array[46]) // min_temp
  // // // state.data_grafico_1[1] = array[] // consumo
  // // // state.data_grafico_1[2] = array[] // paneles IN
  // Vue.set(state.data_grafico_2, 0, array[45]) // tempBMS
  // // // state.data_grafico_2[1] = array[] // tempKellyder
  // // // state.data_grafico_2[2] = array[] // tempkellyizq
}

export function updateBmsTemp (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E1
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'bms_temp', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateBmsVolt (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E3
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'bms_volt', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateMppt1 (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'mppt1', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateMppt2 (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'mppt2', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateMppt3 (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'mppt3', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updateMppt4 (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E0
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'mppt4', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

export function updatePotenciaMppt (state, array) {
  // Formateamos a tres decimales para visualizar bien
  var decimales = 1E1
  var x = 0
  var l = array.length
  while (x < l) {
    array[x] = Math.round(array[x] * decimales) / decimales
    x++
  }

  // Cambiamos el state
  Vue.set(state, 'potencia_mppt', [...array]) // [...array] Copiamos para prevenir cambios de terceros
}

/* Update de data_grafico_1 y data_grafico_2 en mutaciones que contienen esos datos (mainData, kelly_der, kelly_izq, bms) */
