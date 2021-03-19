<template>
<!-- Layout pantalla piloto de eolian Áuriga -->
    <q-layout view="hHh Lpr lff" :class="darkModeClass(darkMode)">
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Auriga',

  computed: {
    ...mapState('general', ['darkMode'])
  },
  methods: {
    ...mapMutations('general', ['turnDarkMode']),
    darkModeClass (mode) {
      if (mode === true) {
        return 'dark'
      } else {
        return 'light'
      }
    }
  }
}
</script>
