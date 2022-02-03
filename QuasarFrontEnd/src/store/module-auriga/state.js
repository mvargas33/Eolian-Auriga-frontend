import alert_store from './alert-store.js'

export default function () {
  return {
    bms: new Array(391).fill(0.0), // ver csv del bms
    sevcon: new Array(32).fill(0.0), // ver csv del sevcon
    mppt1: new Array(8).fill(0.0), // ver csv del mppt1
    mppt2: new Array(8).fill(0.0), // ver csv del mppt2
    // Array(256 * 12 + 100).fill(0.00),
    gps: [0],
    sevcon_izq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Vbat, Ibat, sevcon T, torque, rpm, Imotor, Pin, Pout, Vacc, Vfreno, Torque actual, target Iq, Iq, velocidad
    sevcon_der: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Vbat, Ibat, sevcon T, torque, rpm, Imotor, Pin, Pout, Vacc, Vfreno, Torque actual, target Iq, Iq, velocidad
    bms_variable_info: alert_store
  }
}
