<template>
     <div class="q-pa-md">
        <q-toolbar class="bg-purple-10 text-white shadow-2 absolute-bottom">
            <q-space />
            <q-btn size="30px" flat round dense icon="inbox" type="a" href="/auriga" />
            <q-space />
            <q-btn size="30px" flat round dense icon="battery_charging_full" href="/baterias" />
            <q-space />
            <q-btn size="30px" flat round dense icon="fas fa-solar-panel" href="/paneles" />
            <q-space />
            <q-btn size="30px" flat round dense icon="offline_bolt" href="/motores" />
            <q-space />
            <q-btn size="30px" flat round dense icon="map" type="a" href="/map" />
            <q-space />
            <q-btn size="30px" flat round dense icon="fas fa-chart-bar"  type="a" href="/graphs" />
            <q-space />
            <q-btn size="30px" flat round dense icon="fas fa-exclamation-triangle"  type="a" href="/alarmas" />
            <q-space />
            <q-btn size="30px" flat round dense icon="fas fa-car"  type="a" href="/escolta" />
            <q-space />
        </q-toolbar>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {},
  data () {
    return { hola: 0 }
  }
}
</script>
