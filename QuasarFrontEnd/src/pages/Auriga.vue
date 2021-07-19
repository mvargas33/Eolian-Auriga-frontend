<template>
  <q-page class="flex flex-center topCenter-auriga">
    <div class="col">
      <div class="row">
        <Principal></Principal>
      </div>
      <div class="row">
        <Temperaturas></Temperaturas>
      </div>
      <div class="row">
        <Menu></Menu>
      </div>
      <div class="row">
        <Notificacion></Notificacion>
      </div>
    </div>
  </q-page>
</template>

<script>
import Principal from '../components/Auriga/Principal'
import Temperaturas from '../components/Auriga/Temperaturas'
import Menu from '../components/Auriga/Menu'
import Notificacion from '../components/Auriga/Notificaciones'

export default {
  name: 'Auriga',
  components: { Principal, Temperaturas, Menu, Notificacion }
}
</script>
