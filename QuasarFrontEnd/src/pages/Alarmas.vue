<template>
  <div class="row alarmas_div q-pt-sm">
    <div class="flex flex-center q-px-xs"
      v-for="(item, index) in alarmas" :key="index">
      <q-item-section class="col flex flex-center">
        <div style="font-size:1.5vh">{{item.nombre}}</div>
        <q-icon size="30px" :class="item.estado ? 'green ' : 'red' " :name="item.estado ? 'circle' : 'error'"></q-icon>
      </q-item-section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auriga',
  data () {
    return {
    // 240 alarmas de prueba
      alarmas: [
        { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }, { nombre: 'Alarma #1', estado: 1 }, { nombre: 'Alarma #2', estado: 0 }, { nombre: 'Alarma #3', estado: 1 },
        { nombre: 'Alarma #4', estado: 1 }, { nombre: 'Alarma #5', estado: 0 }, { nombre: 'Alarma #6', estado: 1 },
        { nombre: 'Alarma #7', estado: 0 }, { nombre: 'Alarma #9', estado: 1 }, { nombre: 'Alarma #10', estado: 1 },
        { nombre: 'Alarma #11', estado: 0 }, { nombre: 'Alarma #12', estado: 1 }, { nombre: 'Alarma #13', estado: 1 },
        { nombre: 'Alarma #14', estado: 1 }, { nombre: 'Alarma #15', estado: 1 }, { nombre: 'Alarma #16', estado: 1 },
        { nombre: 'Alarma #17', estado: 0 }, { nombre: 'Alarma #18', estado: 1 }, { nombre: 'Alarma #19', estado: 1 },
        { nombre: 'Alarma #20', estado: 0 }
      ]
    }
  }
}
</script>

<style>
  .green{
    color : green;
  }
  .red{
    color: red;
  }
</style>
