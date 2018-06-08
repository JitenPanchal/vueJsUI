<template>
  <div>
      <menu-control></menu-control>
      <!-- <router-view name="masterpage"></router-view> -->
  </div>
</template>

<script>

import MenuControl from './core/menu.vue'

export default {
    components:{
        'menu-control':MenuControl
    }
 }

</script>