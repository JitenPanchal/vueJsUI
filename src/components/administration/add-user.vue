<template>
    <div class="container-fluid p-3">
        <div class="clearfix">
            <h2 class="float-left">Create User</h2>
            <router-link :to="{ name: 'Users' }" class="back-link ml-3">
                <i class="fa fa-arrow-circle-left mr-1"></i>back to users
            </router-link>
            <div class="float-right">
                <button type="button" class="btn btn-primary" @click="onSaveClick"><i class="fa fa-save mr-2"></i>Save</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-primary" @click="onSaveNewClick"><i class="fa fa-save ml-2 mr-2"></i>Save &amp; new</button>
            </div>
        </div>
        <div class="bg-white p-4 mt-2"> 
            <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input class="form-control" @input="$v.username.$touch()" type="text" placeholder="User" v-model="username">
                <p class="invalid-label" :class="[{ visible: $v.username.$error }, { invisible: !$v.username.$error } ]">Username is required</p>
                </div>
            </div>
             <div class="form-group row">
                <label  class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input class="form-control" @input="$v.email.$touch()" type="text" placeholder="Email" v-model="email">
                <p class="invalid-label" :class="[{ visible: $v.email.$error }, { invisible: !$v.email.$error } ]">Email is required</p>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" @input="$v.password.$touch()" class="form-control" v-model="password" placeholder="Password">
                <p class="invalid-label" :class="[{ visible: $v.password.$error }, { invisible: !$v.password.$error } ]">Password is required</p>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                <input type="password" @input="$v.confirmPassword.$touch()" class="form-control" v-model="confirmPassword" placeholder="Confirm Password">
                <p class="invalid-label" :class="[{ visible: $v.confirmPassword.$error }, { invisible: !$v.confirmPassword.$error } ]">Confirm Password is required</p>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
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
    email: {
      required
    },
    password: {
      required
    },
    confirmPassword: {
      required
    }
  },
  methods: {
      save(){

      },
      onSaveClick(){
        this.$v.$touch();
      },
      onSaveNewClick(){

      }
  }
};
</script>
