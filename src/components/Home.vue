<template>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-white" href="#">businessDNA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link :to="{ name: 'Home' }" class="nav-link text-white">Home</router-link>
      </li>
       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Caseflow
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">????</a>
          <a class="dropdown-item" href="#">????</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Administration
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link :to="{ name: 'Users' }" class="dropdown-item">Users</router-link>
          <router-link :to="{ name: 'Roles' }" class="dropdown-item">Roles</router-link>
          <router-link :to="{ name: 'Regions' }" class="dropdown-item">Regions</router-link>
          <router-link :to="{ name: 'Countries' }" class="dropdown-item">Countries</router-link>
          <div class="dropdown-divider"></div>
          <router-link :to="{ name: 'Sources' }" class="dropdown-item">Sources</router-link>
        </div>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item">
        <a class="nav-link text-white" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
    }
  }
};
</script>