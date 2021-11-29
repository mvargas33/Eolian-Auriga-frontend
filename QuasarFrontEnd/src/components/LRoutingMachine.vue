<template >
  <div style="display: none">
    <slot v-if="ready" class="container-route-map"></slot>
  </div>
</template>
<script>
import L from 'leaflet'
import { IRouter, IGeocoder, LineOptions } from 'leaflet-routing-machine'
import { findRealParent } from 'vue2-leaflet'
import iconCar from '../assets/Auriga/car.png'
const props = {
  visible: {
    type: Boolean,
    default: true
  },
  waypoints: {
    type: Array,
    required: true
  },
  language: {
    type: String,
    requied: false
  },
  router: {
    type: IRouter
  },
  plan: {
    type: L.Routing.Plan
  },
  geocoder: {
    type: IGeocoder
  },
  fitSelectedRoutes: {
    type: [String, Boolean],
    default: 'smart'
  },
  lineOptions: {
    type: LineOptions
  },
  routeLine: {
    type: Function
  },
  autoRoute: {
    type: Boolean,
    default: true
  },
  routeWhileDragging: {
    type: Boolean,
    default: false
  },
  routeDragInterval: {
    type: Number,
    default: 500
  },
  waypointMode: {
    type: String,
    default: 'connect'
  },
  useZoomParameter: {
    type: Boolean,
    default: false
  },
  showAlternatives: {
    type: Boolean,
    default: false
  },
  altLineOptions: {
    type: LineOptions
  },
  icon: {
    type: L.icon,
    default: L.icon({
      iconUrl: iconCar,
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    })
  }
}
export default {
  props,
  name: 'LRoutingMachine',
  data () {
    return {
      parentContainer: null,
      ready: false,
      layer: null
    }
  },
  mounted () {
    this.parentContainer = findRealParent(this.$parent)
    this.add()
    this.ready = true
  },
  beforeDestroy () {
    return this.layer ? this.layer.remove() : null
  },
  methods: {
    add () {
      if (this.parentContainer._isMounted) {
        const {
          waypoints,
          language,
          fitSelectedRoutes,
          autoRoute,
          routeWhileDragging,
          routeDragInterval,
          waypointMode,
          useZoomParameter,
          showAlternatives,
          geocoder,
          visible,
          icon
        } = this
        const options = {
          waypoints,
          language,
          fitSelectedRoutes,
          autoRoute,
          routeWhileDragging,
          routeDragInterval,
          waypointMode,
          useZoomParameter,
          showAlternatives,
          geocoder,
          visible,
          icon
        }
        const { mapObject } = this.parentContainer
        const routingLayer = L.Routing.control(options)
        mapObject.icon = icon
        routingLayer.addTo(mapObject)
        this.layer = routingLayer
      }
    }
  }
}
</script>

<style>
@import "../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";
@import "./LRoutingMachine.scss";
</style>
