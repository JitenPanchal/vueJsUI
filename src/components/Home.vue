<template>
<div>
  <master-page></master-page>
  <router-view></router-view>
</div>
</template>

<script>
import masterPage from "./master-page";

export default {
  methods: {},
  components: {
    masterPage
  }
};

</script>