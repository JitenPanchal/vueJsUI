<template>
    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-sm-6 col-md-6">
                    <h2 class="d-inline">Create User</h2> <router-link :to="{ name: 'Users' }" class="back-link ml-3">
                    <i class="fa fa-arrow-circle-left mr-1"></i>back to users
                </router-link>
            </div>
            <div class="col-sm-6 col-md-6 text-right">
                <button type="button" class="btn btn-primary" @click="onSaveClick"><i class="fa fa-save mr-2"></i>Save</button>
                <button type="button" class="btn btn-primary" @click="onSaveNewClick"><i class="fa fa-save mr-2"></i>Save &amp; new</button>
            </div>
        </div>
        <div class="bg-white p-4 mt-2"> 
            <form class="needs-validation">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input class="form-control" @input="$v.username.$touch()" type="text" placeholder="User" v-model="username">
                        <p class="invalid-label" v-if="$v.username.$error">Username is required</p>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input class="form-control" @input="$v.emailValue.$touch()" type="text" placeholder="Email" v-model="email">
                    <p class="invalid-label" v-if="$v.emailValue.$error">Email is required</p>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" @input="$v.password.$touch()" class="form-control" v-model="password" placeholder="Password">
                    <p class="invalid-label" v-if="$v.password.$error">Password is required</p>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                    <div class="col-sm-10">
                    <input type="password" @input="$v.confirmPassword.$touch()" class="form-control" v-model="confirmPassword" placeholder="Confirm Password">
                    <p class="invalid-label" v-if="$v.confirmPassword.$error">Confirm Password is required</p>
                    </div>
                </div>
            </form> 
        </div>
    </div>
</template>


<script>
import { required, email } from "vuelidate/lib/validators";
import $ from "jquery";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      invalidLoginResponse: ""
    };
  },
  validations: {
    username: {
      required
    },
    emailValue: {
      required,
      email
    },
    password: {
      required
    },
    confirmPassword: {
      required
    }
  },
  methods: {
      isValidEmail(v){
        return v.emailValue.required && v.emailValue.email;
      },
      save(){
      },
      onSaveClick(){
        $(".alert").css("display", "");
        $(".alert").removeClass("fade");
        $(".alert").addClass("show");
        $(".alert").delay(3000).addClass("fade").fadeOut(2000);
        // this.$v.$touch();        
      },
      onSaveNewClick(){

      }
  }
};
</script>
