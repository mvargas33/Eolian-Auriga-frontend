<template>
  <q-page class="flex flex-center topCenter-auriga">
    <div class="row">
      <div class="col-12">
        <PrincipalResumen />
      </div>
      <div class="col-12 map-container">
        <q-card style="height: 500px;">
          <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution">
              <slot v-if="ready"></slot>
            </l-tile-layer>
            <l-routing-machine :waypoints="waypoints" :language="language"/>
            <l-marker :lat-lng="[lat, lon]" :icon="icon"> </l-marker>
          </l-map>
        </q-card>
      </div>
      <div class="col-12">
        <Menu />
      </div>
    </div>
  </q-page>
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import LRoutingMachine from '../components/LRoutingMachine'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import PrincipalResumen from '../components/Auriga/Principal_Resumen'
import Menu from '../components/Auriga/Menu'

export default {
  name: 'Auriga',
  components: {
    PrincipalResumen,
    Menu,
    LMap,
    LTileLayer,
    LMarker,
    LRoutingMachine
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 17,
      ubication: {},
      lat: -33.5177302313585,
      lon: -70.67869255029777,
      center: L.latLng(-33.5177302313585, -70.67869255029777),
      staticAnchor: [16, 37],
      customText: 'Foobar',
      iconSize: 64,
      ready: false,
      waypoints: [
        { lat: -33.5177302313585, lng: -70.67869255029777 },
        { lat: -33.4578215, lng: -70.6650448 }
      ],
      language: 'es'
    }
  }
}
</script>
<style>
  @import "./Map.scss";
</style>
