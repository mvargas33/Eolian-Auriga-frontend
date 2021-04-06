<template>
<!-- Layout principal de monitoreo de eolian Áuriga -->
    <q-layout view="hHh Lpr lff" :class="darkModeClass(darkMode)">
        <!-- Header -->
        <q-header elevated class="bg-purple-10">
            <q-toolbar >
                <q-avatar>
                </q-avatar>
                <q-toolbar-title>
                Eolian Áuriga
                </q-toolbar-title>
                <q-btn
                  to="/pilot">
                  P
                </q-btn>
                <q-btn
                :loading="loading2"
                :percentage="percentage2"
                round
                :color="darkMode ? 'purple-10' : 'purple-10'"
                @click="turnDarkMode()"
                :icon="darkMode ? 'o_dark_mode' : 'dark_mode'"
                >
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Auriga',
  data () {
    return {
    }
  },
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
