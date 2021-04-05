export default function () {
  return {
    bms: Array(256*12+100).fill(0.00),
    bms_alert_text:
    {
      "Relay fault" : "While attempting to turn on the contactors, the tests detected a fault, and the contactors were turned off.",
      "Contactor K3 is on" : "K3 LED is on and K3 output is grounded in COILS connector on BMS master; K3 output of HVFE is grounded.",
      "Contactor K2 is on" : "K2 LED is on and K3 output is grounded in COILS connector on BMS master; K2 output of HVFE is grounded.",
      "Contactor K1 is on" : "K1 LED is on and K3 output is grounded in COILS connector on BMS master; K1 output of HVFE is grounded.",
      "Fault state" : "BMS master is in the Fault State.",
      "Byte of flags" : 
      {
          "The LLIM is set" : "Cannot discharge.",
          "The HLIM is set" : "Cannot charge.",
          "Interlock is tripped" : "Interlock is tripped.",
          "Power from load and source" : "Power from load and source.",
      },
      "Fault code" : 
      {
          1 : "Driving off while plugged in.",
          2 : "Interlock is tripped.",
          3 : "Communication fault with a bank or cell.",
          4 : "Charge overcurrent.",
          5 : "Discharge overcurrent.",
          6 : "Over-temperature.",
          7 : "Under voltage.",
          8 : "Over voltage.",
          9 : "No battery voltage.",
          10 : "High voltage B- leak to chassis.",
          11 : "High voltage B+ leak to chassis.",
          12 : "Relay K1 is shorted.",
          13 : "Contactor K2 is shorted.",
          14 : "Contactor K3 is shorted.",
          15 : "Open K1 or K3, or shorted K2.",
          16 : "Open K2.",
          17 : "Excessive precharge time.",
          18 : "EEPROM stack overflow.",
          19 : "Loss of CAN from HVFE.",
      },
      "Level fault flags" :
      {
          7 : "Over voltage.",
          6 : "Under voltage.",
          5 : "Over-temperature.",
          4 : "Discharge overcurrent.",
          3 : "Charge overcurrent.",
          2 : "Communication fault with a bank or cell.",
          1 : "Interlock is tripped.",
          0 : "Driving off while plugged in.",
      },
      "Voltage of least charged cell under limit" : "Voltage of least charged cell under limit:",
      "Voltage of most charged cell above limit" : "Voltage of most charged cell above limit:",
      "Temperature of coldest sensor under limit" : "Temperature of coldest sensor under limit:",
      "Temperature of hottest sensor above limit" : "Temperature of hottest sensor above limit:",
      "Resistance of lowest resistance cell under limit" : "Resistance of lowest resistance cell under limit:",
      "Resistance of highest resistance cell above limit" : "Resistance of highest resistance cell above limit:",
      "Warning flags" : 
      {
          7 : "Isolation fault.",
          6 : "Low SOH.",
          5 : "Hot temperature.",
          4 : "Cold temperature.",
          3 : "Discharge overcurrent.",
          2 : "Charge overcurrent.",
          1 : "High voltage.",
          0 : "Low voltage.",
      },
      "Cell alert" : {
          0 : "The voltage reading from this cell board is OK.",
          1 : "The temperature reading from this cell board is OK.",
          2 : "The resistance reading from this cell board is OK.",
          3 : "The cell board reports its load is on.",
          4 : "The cell board reports a voltage sensor fault.",
          5 : "The cell board reports a temperature sensor fault.",
          6 : "The cell board reports a resistance calculation fault.",
          7 : "The cell board reports a load fault.",
      },
      "Limites":
      {
          "Voltaje_Max": 4.2,
          "Voltaje_Min": 3.6,
          "Temp_Max": 50.0,
          "Temp_Min": 10.0,
          "Resistencia_Max": 0.1,
      }
    }
  }
}
  