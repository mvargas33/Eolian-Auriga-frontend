<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  sockets: {
    // Auriga
    bms (data) {
      console.log(data)
      this.$store.dispatch('auriga/updateBms', data)
    },
    sevcon (data) {
      console.log(data)
      this.$store.dispatch('auriga/updateSevcon', data)
    },
    mppt1 (data) {
      console.log(data)
      this.$store.dispatch('auriga/updateMppt1', data)
    },
    mppt2 (data) {
      console.log(data)
      this.$store.dispatch('auriga/updateMppt2', data)
    }

    // Fenix
    // mainData (data) {
    //   console.log('broadcast event listened\n')
    //   // console.log(this.$store)
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateMainData', data)
    // },
    // kelly_der (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateKellyDer', data)
    // },
    // kelly_izq (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateKellyIzq', data)
    // },
    // bms (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateBms', data)
    // },
    // sevcon_izq (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateSevconIzq', data)
    // },
    // sevcon_der (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateSevconDer', data)
    // },
    // bms_temp (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateBmsTemp', data)
    // },
    // bms_volt (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateBmsVolt', data)
    // },
    // mppt1 (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateMppt1', data)
    // },
    // mppt2 (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateMppt2', data)
    // },
    // mppt3 (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateMppt3', data)
    // },
    // mppt4 (data) {
    //   console.log(data)
    //   this.$store.dispatch('fenix/updateMppt4', data)
    // },
    // potencia_mppt (data) {
    //   this.$store.dispatch('fenix/updatePotenciaMppt', data)
    // },
    // hola (data) {
    //   console.log(data)
    // }
  }
}
</script>
