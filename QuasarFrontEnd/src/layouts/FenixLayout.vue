<template>
    <q-layout view="lHh Lpr lFf">
        <!-- Header -->
        <q-header elevated >
            <q-toolbar>
                <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
                />
                <q-toolbar-title>
                Eolian Fénix
                </q-toolbar-title>
                <q-btn
                to="/auriga">
                    A
                </q-btn>
            </q-toolbar>
        </q-header>

        <!-- Left Drawer -->
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <q-item-label
                    header
                    class="text-grey-8"
                >
                Navegación
                </q-item-label>

            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'Fenix',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
