<template>
  <div >
    <div class="position-absolute app-alert">
        <div class="alert alert-warning fade alert-dismissible app-alert-content" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    </div>
    <nav class="navbar fixed-top header">
        <span class="col-md-2 col-sm-2 brand-title text-nowrap pl-0 ml-0"><i class="fab fa-slack fa-lg brand-icon pr-2"></i>e-Commerce</span>
        <div class="col-md-8 col-sm-8">
            <button type="button" class="btn btn-default bg-light rounded-0" id="sidebarCollapse" @click="isHidden = !isHidden">
                <i class="fa fa-bars"></i>
            </button>
        </div>
        <div class="col-md-2 col-sm-2">
            <a class="nav-link text-white text-right pr-0" href="#" @click.prevent='$store.dispatch("logout")'>
            <i class="fas fa-sign-out-alt mr-1"></i>Logout</a>
        </div>
    </nav>
    <div>
        <menu-control v-bind:is-hidden="isHidden"></menu-control>
        <div id="content" :class="{ active: isHidden }">
          <div class="overlay" id="overlay" style="display: none;"><i class="fa fa-spinner fa-spin fa-5x overlay-content"></i></div>
          <router-view></router-view> 
        </div>
    </div>
 </div>
</template>

<script>
import MenuControl from "./core/sidebar/menu.vue";
import { EventBus } from '../main.js'
import $ from "jquery";

export default {
  components: {
    'menu-control':MenuControl
  },
  data() {
    return {
      isHidden: false
    };
  },
  methods: {
  },
  created() {
      EventBus.$on("onBeforeApiRequest", () => {
          $('#overlay').show();
      });
      EventBus.$on("onAfterApiRequest", () => {
          $('#overlay').hide();
      });
  }
};
</script>

<style scoped>
#content {
    background-color: #ecf0f5 !important;
}
</style>
