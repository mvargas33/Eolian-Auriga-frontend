<template>
    <div class="q-pa-md q-gutter-y-sm column items-center">
        <div>
            <div class="row q-gutter-sm">
                <q-btn no-caps unelevated color="negative" @click="testBMS()" label="Test" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Notificaciones',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('auriga', ['bms', 'bms_variable_info'])
  },
  watch: {
    bms: {
      deep: true,
      immediate: true,
      handler: function () {
        var context = this
        this.check_bms_variables(context)
      }
    }
  },
  methods: {
    ...mapMutations('auriga', ['testBMS']),
    check_bms_variables (context) {
      var bms = context.bms
      var bms_variable_info = context.bms_variable_info
      var i
      for (i = 0; i < 15; i++) {
        var value = bms[i]
        if (!this.in_limits(bms_variable_info[i], value)) {
          var msg = this.get_message(bms_variable_info[i], i, value)
          var color = bms_variable_info[i].color
          this.triggerWarning(msg, color)
        }
      }
    },
    in_limits (bms_variable_info, value) { // Deberíamos chequear que sea != al default Y al valor anterior (porque si no se repite la misma alarma, cuando cambia el valor en otro indice)
      if (bms_variable_info.alert) {
        if (bms_variable_info.its_binary && value !== bms_variable_info.default) {
          return false
        }
        if (!bms_variable_info.its_binary && (value < bms_variable_info.limit_inferior || value > bms_variable_info.limit_superior)) {
          return false
        }
      }
      return true
    },
    get_message (bms_variable_info, index, value) {
      if (index !== 14) {
        return bms_variable_info.message
      }
      return bms_variable_info.message + bms_variable_info.caption[value]
    },
    triggerWarning (msg, color) {
      this.$q.notify({
        position: 'top',
        type: 'warning', // Cuando hayamos agregado todas las variables, dependiendo de la cantidad de colores podrimos definir una cantidad de opciones para type, icon y color, textColor
        icon: 'warning',
        message: msg.split(':')[0] + ':',
        caption: msg.split(':')[1],
        multiLine: true,
        color: color,
        textColor: 'white'
        // actions: [
        //    { label: 'Ir al banco', color: 'white', handler: () => { /* ... */ } } Para ir a la vista asociada al error y cambiarle el css al elemento HTML del error (getElementById)
        //  ]
        // group: '' Se supone que las que son iguales se están agrupando por default, pero si queremos ser más específicos podemos ocupar estas propiedades
        // badgeColor: '',
        // badgeTextColor: '',
        // badgeClass: ''
      })
    }
  }
}
// Comparar con array bms anterior
// Action --> handler
// Agregar todas las variables (quedé en la variable 14)
// Terminar la estética (urgente: tamaño)
// Iconos --> Revisar el bms y mantener prendido/apagado (por mientras usar cualquier SVG)
</script>
