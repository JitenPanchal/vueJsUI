<template>
  <div >
     <!-- <master-page></master-page>
    <router-view></router-view>  -->
    <!-- <div class="alert alert-warning alert-dismissible app-alert" style="z-index:1000000 !important" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div> -->

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
        <!-- <nav id="sidebar" class="hidden-xs-down bg-faded sidebar pr-3" :class="{ active: isHidden }">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="input-group m-2 search-bar">
                        <input class="form-control p-1 mt-1 side-bar-search-box" v-model="searchText" @input="onSearchInput" @blur="onBlurSearchInput" type="text"
                            placeholder="Search">
                        <span class="input-group-append">
                            <button class="btn bg-dark mt-1" type="button">
                                <i class="fa fa-search text-white"></i>
                            </button>
                        </span>
                        <ul class="list-group d-none search-suggestion-box" id="suggestionBox">
                        </ul>
                    </div>
                </li>
                <li class="nav-item ml-2">
                    <a href="#" class="nav-link collapsed text-white" aria-expanded="true">
                        <i class="fas fa-home mr-2"></i>Home
                    </a>
                    <a href="#" class="nav-link collapsed text-white" data-toggle="collapse" data-target="#navbarNav" aria-expanded="true">
                        <i class="fas fa-cog mr-2"></i>Administration
                        <i class="fa fa-angle-left ml-2"></i>
                    </a>
                    <div class="navbar-collapse collapse" id="navbarNav">
                        <ul class="navbar-nav ml-2">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle  mr-2"></i>Roles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>Regions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>Countries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>Sources</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item ml-2">
                    <a href="#" class="nav-link collapsed text-white" data-toggle="collapse" data-target="#navbarNavCaseflow" aria-expanded="true">
                        <i class="fas fa-code-branch mr-2"></i>Caseflow
                        <i class="fa fa-angle-down ml-2"></i>
                    </a>
                    <div class="navbar-collapse collapse" id="navbarNavCaseflow">
                        <ul class="navbar-nav ml-2">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>????</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>????</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="far fa-dot-circle mr-2"></i>????</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav> -->
        <menu-control v-bind:is-hidden="isHidden"></menu-control>
        <div id="content" :class="{ active: isHidden }">
          <router-view></router-view> 
        </div>
    </div>
 </div>
</template>

<script>
import MenuControl from "./core/sidebar/menu.vue";

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
  }
};
</script>

<style scoped>
#content {
    background-color: #ecf0f5 !important;
}
</style>
