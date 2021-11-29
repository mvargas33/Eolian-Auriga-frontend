<template>
  <q-page class="flex flex-center topCenter-auriga">
    <div class="row">
      <div class="col-12">
        <PrincipalResumen />
      </div>
      <DirectionsMap :visible="visible" @setDirections="setDirections" />
      <div class="col-12 map-container">
        <q-card style="height: 500px">
          <l-map
            ref="AurigaMap"
            style="height: 100%; width: 100%"
            :zoom="zoom"
            :center="center"
          >
            <l-tile-layer :url="url" :attribution="attribution">
              <slot v-if="ready"></slot>
            </l-tile-layer>
            <l-routing-machine
              :routeWhileDragging="true"
              :waypoints="waypoints"
              :language="language"
              :geocoder="geocoder"
              :icon="icon"
            />
            <template
              v-for="(item, index) in rechargeDirectionsMapping.ubication"
            >
              <l-marker
                :lat-lng="[item.lat, item.lng]"
                :icon="rechargeIcon"
                :key="index"
              ></l-marker>
            </template>

            <l-marker :lat-lng="[lat, lon]" :icon="icon"></l-marker>
            <l-control position="bottomleft">
              <div class="q-pa-md q-gutter-sm">
                <div class="q-gutter-sm">
                  <q-btn
                    round
                    color="brown-5"
                    @click="showDirectionsMaps"
                    icon="local_gas_station"
                  />
                </div>
                <div class="q-gutter-sm">
                  <q-btn
                    round
                    color="secondary"
                    icon="my_location"
                    @click="centerView"
                  />
                </div>
              </div>
            </l-control>
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
import { LMap, LTileLayer, LMarker, LControl } from 'vue2-leaflet'
import LRoutingMachine from '../components/LRoutingMachine'
import * as L from 'leaflet'
import 'leaflet-control-geocoder'
import 'leaflet/dist/leaflet.css'
import PrincipalResumen from '../components/Auriga/Principal_Resumen'
import DirectionsMap from '../components/Auriga/DirectionsMap'
import Menu from '../components/Auriga/Menu'
import iconCar from '../assets/Auriga/car.png'
import rechargeIcon from '../assets/Auriga/recharge.svg'
import rechargeDirections from '../assets/copec-vodex.json'
export default {
  name: 'Auriga',
  components: {
    PrincipalResumen,
    Menu,
    LMap,
    LTileLayer,
    LMarker,
    LRoutingMachine,
    LControl,
    DirectionsMap
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 17,
      ubication: {},
      icon: L.icon({
        iconUrl: iconCar,
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      }),
      rechargeIcon: L.icon({
        iconUrl: rechargeIcon,
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      }),
      lat: -33.5177302313585,
      lon: -70.67869255029777,
      center: L.latLng(-33.5177302313585, -70.67869255029777),
      staticAnchor: [16, 37],
      customText: 'Foobar',
      iconSize: 64,
      ready: false,
      waypoints: [],
      geocoder: L.Control.Geocoder.nominatim({
        geocodingQueryParams: { countrycodes: 'cl' }
      }),
      language: 'es',
      visible: false,
      rechargeDirectionsMapping: rechargeDirections
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject
    })
  },
  methods: {
    centerView () {
      this.$refs.AurigaMap.mapObject.panTo([
        -33.5177302313585, -70.67869255029777
      ])
      this.zoom = 17
    },
    showDirectionsMaps () {
      this.visible = !this.visible
    },
    cleanDirectionsMap () {
      // L.Routing.setWaypoints([]).addTo(this.$refs.AurigaMap.mapObject)
    },
    setDirections (data) {
      this.cleanDirectionsMap()
      this.showDirectionsMaps()
      L.Routing.control({
        waypoints: [
          L.latLng(-33.5177302313585, -70.67869255029777),
          L.latLng(data.lat, data.lng)
        ]
      }).addTo(this.$refs.AurigaMap.mapObject)
      this.centerView()
    }
  }
}
</script>
<style>
@import "./Map.scss";
</style>
