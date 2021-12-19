<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="visible">
      <q-carousel
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        style="width: 700px; max-width: 80vw"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        arrow
        padding
      >
        <template v-for="(item, index) in rechargeDirectionsMapping.ubication">
          <q-carousel-slide
            :name="index"
            class="no-wrap flex-left"
            :key="index"
          >
            <div class="row justify-center">
              <q-img :src="item.image" :id="index" style="height: 170px">
                <div
                  class="absolute-bottom-right"
                  style="border-top-left-radius: 5px"
                >
                  <div class="q-gutter-sm">
                    <q-btn round color="primary" icon="edit_location" />
                  </div>
                </div>
              </q-img>
            </div>
            <div class="row justify-left">
              <div class="col text-h6 ellipsis">
                {{ rechargeDirectionsMapping.branch }}
              </div>
            </div>
            <div class="row justify-left">
              <div class="text-subtitle1">{{ item.direction }}</div>
            </div>
            <div class="row justify-left">
              <q-btn
                flat
                color="primary"
                padding="0"
                @click="setDirections({'lat': item.lat, 'lng': item.lng})"
              > Fijar en el mapa </q-btn>
            </div>
          </q-carousel-slide>
        </template>
      </q-carousel>
    </q-dialog>
  </div>
</template>
<script>
import rechargeDirections from '../../assets/copec-vodex.json'
const props = {
  visible: {
    type: Boolean,
    default: true
  }
}
export default {
  name: 'directionsMap',
  props: props,
  data () {
    return {
      card: false,
      rechargeDirectionsMapping: rechargeDirections,
      controlType: 'flat',
      slide: 1
    }
  },
  mounted () {
    this.card = props.visible.visible
  },
  methods: {
    setDirections (params) {
      this.card = false
      this.$emit('setDirections', params)
    }
  }
}
</script>
