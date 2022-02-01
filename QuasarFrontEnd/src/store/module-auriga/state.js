import alert_store from './alert-store.js'

export default function () {
  return {
    bms: new Array(391).fill(0), // ver csv del bms
    // Array(256 * 12 + 100).fill(0.00),
    gps: [0],
    sevcon_izq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Vbat, Ibat, sevcon T, torque, rpm, Imotor, Pin, Pout, Vacc, Vfreno, Torque actual, target Iq, Iq, velocidad
    sevcon_der: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Vbat, Ibat, sevcon T, torque, rpm, Imotor, Pin, Pout, Vacc, Vfreno, Torque actual, target Iq, Iq, velocidad
    bms_variable_info: alert_store
  }
}
