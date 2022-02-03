<template>
  <q-page class="justify-between items-start">
    <div class="row wrap">
      <!-- Velocímetro, motores y paneles -->
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <!-- Velocímetro y motores -->
        <MainData></MainData>
        <!-- Soc Bar -->
        <SocBar></SocBar>
        <!-- Motores [fases, ERR, Thr, Rev] -->
        <BMSInfo></BMSInfo>
      </div>

      <!-- Gráficos -->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <!-- Gráfico de Consumo -->
        <div class="padding-1">
          <ConsumoChart></ConsumoChart>
        </div>
        <!-- Gráfico de Temperaturas -->
        <div class="padding-1">
          <TempChart></TempChart>
        </div>
        <div class="padding-1">
          <PinChart></PinChart>
        </div>
      </div>
      <!-- Averages, Banco de baterías -->
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <!-- Info de módulos [max min temp/volt] -->
        <ModulosInfo></ModulosInfo>
        <!-- Banco de baterías -->
        <BancoBaterias></BancoBaterias>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import MainData from '../components/Fenix/MainData'
import SocBar from '../components/Fenix/SocBar'
import BMSInfo from '../components/Fenix/BMSInfo'

import ConsumoChart from '../components/Auriga/ConsumoChart'
import TempChart from '../components/Auriga/TempChart'
import PinChart from '../components/Auriga/PinChart'

import ModulosInfo from '../components/Fenix/ModulosInfo'
import BancoBaterias from '../components/Auriga/BancoBaterias'

export default {
  name: 'AurigaTemp',
  components: {
    MainData,
    SocBar,
    BMSInfo,
    ConsumoChart,
    TempChart,
    ModulosInfo,
    BancoBaterias,
    PinChart

  },
  computed: {
    ...mapState('fenix', ['mainData']),
    ...mapState(['recibiendoDatos'])
  },
  methods: {
    ...mapMutations('fenix', ['updateVelocidad', 'updatePotencia'])
  }
}
</script>
