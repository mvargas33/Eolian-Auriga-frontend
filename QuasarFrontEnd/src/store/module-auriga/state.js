import alert_store from './alert-store.js'

export default function () {
  return {
    bms: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // Array(256 * 12 + 100).fill(0.00),
    bms_variable_info: alert_store
  }
}
