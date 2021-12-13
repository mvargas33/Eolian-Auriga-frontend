export default function () {
  return {
    bms: Array(256 * 12 + 100).fill(0.00),
    bms_alert_text:
      {
        'Relay fault': 'While attempting to turn on the contactors, the tests detected a fault, and the contactors were turned off',
        'Contactor K3 on': 'K3 LED is on and K3 output is grounded in COILS connector on BMS master; K3 output of HVFE is grounded',
        'Fault codes ':
        {
          0: 'aas',
          1: 'asdd'
        },
        Limites:
        {
          Voltaje_Max: 4.2,
          Voltaje_Min: 3.6,
          Temp_Max: 50.0,
          Temp_Min: 10.0,
          Resistencia_Max: 0.0
        }
      }
  }
}
