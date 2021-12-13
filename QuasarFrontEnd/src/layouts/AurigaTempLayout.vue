<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar class="bg-purple-10">
        <q-toolbar-title> Eolian Áuriga </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AurigaTemp',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
