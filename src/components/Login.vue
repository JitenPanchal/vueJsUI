<template>
<div class="back">
  <div class="div-center">
    <div class="content">
      <h3>businessDNA Login</h3>
      <hr />
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="inputUserName">Username</label>
          <input id="inputUserName" @input="$v.username.$touch()" v-model="username" class="form-control" placeholder="username" autocomplete="off">
          <p v-if="$v.username.$error" class="invalid-label">Username is required</p>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input id="inputPassword" @input="$v.password.$touch()" type="password" v-model="password" class="form-control" placeholder="password" autocomplete="off" >
          <p v-if="$v.password.$error" class="invalid-label">Password is required</p>
        </div>
        <button type="submit" id="buttonLogin" data-loading-text="<i class='fa fa-spinner fa-spin '></i> Login" :disabled="$v.$invalid" @click.prevent="login" class="btn btn-primary">Login</button>
        <p v-if="invalidLoginResponse" class="invalid-label">{{invalidLoginResponse}}</p>
        <hr />
        <button type="button" class="btn btn-link">Reset Password</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { loginService } from "./../services/security";
import { mapActions } from "vuex";
import $ from "jquery";

export default {
  data() {
    return {
      username: "systemadmin",
      password: "Password123",
      invalidLoginResponse: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    login(event) {
      this.invalidLoginResponse = "";
      let $buttonLogin = $(event.currentTarget);
      var loadingText = event.currentTarget.dataset.loadingText;
      if ($buttonLogin.html() !== loadingText) {
        $buttonLogin.data("original-text", $buttonLogin.html());
        $buttonLogin.html(loadingText);
      }

      loginService(this.username, this.password).then(
        response => {
          var result = response.body;
          $buttonLogin.html($buttonLogin.data("original-text"));
          if (!result.isSuccess) {
            this.invalidLoginResponse = result.message;
          } else {
            this.$store.dispatch("login", response.body);
            this.$router.replace("/home");
          }
        },
        error => {
          console.log(error);
          $buttonLogin.html($buttonLogin.data("original-text"));
        }
      );
    }
  }
};
</script>

<style scoped>
.invalid-input {
  border: 1px solid red;
}

.invalid-label {
  color: red;
}

.back {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.div-center {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}

div.content {
  display: table-cell;
  vertical-align: middle;
}
</style>