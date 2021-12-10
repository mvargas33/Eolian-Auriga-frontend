const alert_store = {
  0: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Fault state: BMS master is in the Fault State.',
    color: 'red',
    view: 'bms',
    element_id: null
  },
  1: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Contactor K1 is on: K1 LED is on and K3 output is grounded in COILS connector on BMS master; K1 output of HVFE is grounded.',
    color: null,
    view: 'bms',
    element_id: ['iconoK1', 'iconoK2']
  },
  2: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Contactor K2 is on: K2 LED is on and K3 output is grounded in COILS connector on BMS master; K2 output of HVFE is grounded.',
    color: null
  },
  3: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Contactor K3 is on: K3 LED is on and K3 output is grounded in COILS connector on BMS master; K3 output of HVFE is grounded.',
    color: null
  },
  4: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Relay fault: While attempting to turn on the contactors, the tests detected a fault, and the contactors were turned off.',
    color: 'red'
  },
  5: {
    alert: false,
    its_binary: false,
    default: 0,
    limit_inferior: 0,
    limit_superior: 65535,
    message: 'Power-up Time.',
    color: null
  },
  6: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Power from Source.',
    color: null
  },
  7: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Power from Load.',
    color: null
  },
  8: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Interlock is tripped.',
    color: 'red'
  },
  9: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Hardwire contactor request.',
    color: null
  },
  10: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'CAN contactor request.',
    color: null
  },
  11: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'The HLIM is set: Cannot charge.',
    color: 'green'
  },
  12: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'The LLIM is set: Cannot discharge.',
    color: 'green'
  },
  13: {
    alert: false,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Fan on.',
    color: null
  },
  14: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: 1,
    limit_superior: 19,
    message: 'Fault code: ',
    caption:
    {
      1: 'Driving off while plugged in.',
      2: 'Interlock is tripped.',
      3: 'Communication fault with a bank or cell.',
      4: 'Charge overcurrent.',
      5: 'Discharge overcurrent.',
      6: 'Over-temperature.',
      7: 'Under voltage.',
      8: 'Over voltage.',
      9: 'No battery voltage.',
      10: 'High voltage B- leak to chassis.',
      11: 'High voltage B+ leak to chassis.',
      12: 'Relay K1 is shorted.',
      13: 'Contactor K2 is shorted.',
      14: 'Contactor K3 is shorted.',
      15: 'Open K1 or K3, or shorted K2.',
      16: 'Open K2.',
      17: 'Excessive precharge time.',
      18: 'EEPROM stack overflow.',
      19: 'Loss of CAN from HVFE.'
    },
    color: 'red'
  },
  15: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Driving off while plugged in.',
    color: 'red'
  },
  16: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Interlock is tripped.',
    color: 'red'
  },
  17: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Communication fault with a bank or cell.',
    color: 'red'
  },
  18: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Charge overcurrent.',
    color: 'red'
  },
  19: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Over-temperature.',
    color: 'red'
  },
  20: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Under voltage.',
    color: 'red'
  },
  21: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Over voltage.',
    color: 'red'
  },
  22: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Low voltage.',
    color: 'red'
  },
  23: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'High voltage.',
    color: 'red'
  },
  24: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Charge overcurrent.',
    color: 'red'
  },
  25: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Discharge overcurrent.',
    color: 'red'
  },
  26: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Cold temperature.',
    color: 'red'
  },
  27: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Hot temperature.',
    color: 'red'
  },
  28: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Low SOH.',
    color: 'red'
  },
  29: {
    alert: true,
    its_binary: true,
    default: 0,
    limit_inferior: null,
    limit_superior: null,
    message: 'Isolation fault.',
    color: 'red'
  },
  bms_alert_text: {
    'Byte of flags':
        {
        },
    'Level fault flags':
        {
          7: 'Over voltage.',
          6: 'Under voltage.',
          5: 'Over-temperature.',
          4: 'Discharge overcurrent.',
          3: 'Charge overcurrent.',
          2: 'Communication fault with a bank or cell.',
          1: 'Interlock is tripped.',
          0: 'Driving off while plugged in.'
        },
    'Voltage of least charged cell under limit': 'Voltage of least charged cell under limit:',
    'Voltage of most charged cell above limit': 'Voltage of most charged cell above limit:',
    'Temperature of coldest sensor under limit': 'Temperature of coldest sensor under limit:',
    'Temperature of hottest sensor above limit': 'Temperature of hottest sensor above limit:',
    'Resistance of lowest resistance cell under limit': 'Resistance of lowest resistance cell under limit:',
    'Resistance of highest resistance cell above limit': 'Resistance of highest resistance cell above limit:',
    'Warning flags':
        {
          7: 'Isolation fault.',
          6: 'Low SOH.',
          5: 'Hot temperature.',
          4: 'Cold temperature.',
          3: 'Discharge overcurrent.',
          2: 'Charge overcurrent.',
          1: 'High voltage.',
          0: 'Low voltage.'
        },
    'Cell alert':
        {
          0: 'The voltage reading from this cell board is OK.',
          1: 'The temperature reading from this cell board is OK.',
          2: 'The resistance reading from this cell board is OK.',
          3: 'The cell board reports its load is on.',
          4: 'The cell board reports a voltage sensor fault.',
          5: 'The cell board reports a temperature sensor fault.',
          6: 'The cell board reports a resistance calculation fault.',
          7: 'The cell board reports a load fault.'
        },
    Limites:
        {
          Voltaje_Max: 4.2,
          Voltaje_Min: 3.6,
          Temp_Max: 50.0,
          Temp_Min: 10.0,
          Resistencia_Max: 0.1
        }
  }
}

export default alert_store
