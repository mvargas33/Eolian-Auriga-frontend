<template>
  <q-page class="flex flex-center topCenter-auriga">
    <div class="col">
      <div class="row">
        <Principal></Principal>
      </div>
    </div>
  </q-page>
</template>

<script>
import Principal from '../components/Auriga/Principal'

export default {
  name: 'Auriga',
  components: { Principal }
}
</script>
