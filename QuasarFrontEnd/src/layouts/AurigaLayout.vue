<template>
<!-- Layout principal de monitoreo de eolian Áuriga -->
    <q-layout view="hHh Lpr lff" :class="darkModeClass(darkMode)">
        <!-- Header -->
        <q-header elevated class="bg-purple-10">
            <q-toolbar >
                <q-btn
                  flat
                  dense
                  round
                  icon="menu"
                  aria-label="Menu"
                  @click="leftDrawerOpen = !leftDrawerOpen"
                />
                <q-toolbar-title> Eolian Áuriga </q-toolbar-title>
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

        <!-- Left Drawer -->
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above="false"
            :breakpoint="0"
            elevated
            :content-class="darkModeClass(darkMode)"
        >
            <template v-for="(menuItem, index) in menuList">
                <q-item :to="menuItem.link" :key="index" clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{menuItem.label}}
                  </q-item-section>
                </q-item>
            </template>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script>
const menuList = [
  {
    icon: {
      icon: 'inbox',
      label: 'Inbox',
      size: 'xl',
      separator: true
    },
    label: 'Principal',
    link: 'auriga'
  },
  {
    icon: {
      icon: 'battery_charging_full',
      label: 'Outbox',
      separator: false
    },
    label: 'Baterías',
    link: 'aurigabaterias'
  },
  {
    icon: {
      icon: 'fas fa-solar-panel',
      label: 'Trash',
      separator: false
    },
    label: 'Paneles solares',
    link: 'paneles'
  },
  {
    icon: {
      icon: 'offline_bolt',
      label: 'Spam',
      separator: true
    },
    label: 'Motores',
    link: 'motores'
  },
  {
    icon: {
      icon: 'map',
      label: 'Explore',
      separator: false
    },
    label: 'Navegación',
    link: 'map'
  },
  {
    icon: {
      icon: 'fas fa-chart-bar',
      label: 'Graph',
      separator: false
    },
    label: 'Gráficos',
    link: 'graphs'
  },
  {
    icon: {
      icon: 'fas fa-exclamation-triangle',
      label: 'Warning',
      separator: false
    },
    label: 'Alarmas',
    link: 'alarmas'
  },
  {
    icon: {
      icon: 'fas fa-car',
      label: 'Car',
      separator: false
    },
    label: 'Escolta',
    link: 'escolta'
  }
]

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Auriga',
  data () {
    return {
      leftDrawerOpen: false,
      menuList
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
