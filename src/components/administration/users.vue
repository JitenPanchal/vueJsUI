<template>
 <div class="container-fluid p-3">
    <div class="clearfix">
        <h3 class="float-left">Users</h3>
        <button type="button" class="btn btn-primary float-right" @click="$router.replace({ name: 'AddUser' })"><i class="fa fa-plus-square  mr-2"></i>Add new</button>
    </div>
    
    <div class="container-fluid bg-white p-4 mt-2"> 
        <div class="table-responsive">
        <table class="table table-sm table-hover ">
            <thead>
                <tr role="row">
                    <th>Name</th>
                    <th>Email</th>
                    <th >Last Login Date</th>
                    <th >Last Activity Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>
                        <router-link :to="{ name: 'User', params: { id: user.id } }">
                         {{user.name}}</router-link>
                    </td>
                    <td >{{user.email}}</td>
                    <td >{{user.lastActivityDate}}</td>
                    <td >{{user.lastLoginDate}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <!-- <table class="table  table-hover table-sm">
        <thead>
            <tr role="row">
                <th>Name</th>
                <th>Email</th>
                <th style="width: 180px;">Last Login Date</th>
                <th style="width: 180px;">Last Activity Date</th>
                <th style="width: 205px;"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td >{{user.name}}</td>
                <td >{{user.email}}</td>
                <td >{{user.lastActivityDate}}</td>
                <td >{{user.lastLoginDate}}</td>
                <td>
                    <button type="button" class="btn btn-dark"><i class="fa fa-edit"></i></button>
                    <button type="button" class="btn btn-dark"><i class="fa fa-trash"></i></button>
                    <button type="button" class="btn btn-dark"><i class="fa fa-lock"></i></button>
                    <button type="button" class="btn btn-dark"><i class="fa fa-unlock"></i></button>
                </td>
            </tr>
        </tbody>
    </table> -->
</div>
    <!-- <div class="content-wrapper">
            <div class="container-fluid">
                <div class="card mb-3" style="top:64px !important" >
                    <div class="card-header">
                        <i class="fa fa-users fa-lg mr-2"></i>Users</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div id="dataTable_wrapper" class="container-fluid dt-bootstrap4">
                                <div class="row mb-3">
                                    <div class="col-sm-12 col-md-5">
                                        <div class="form-inline">
                                            <button type="button" class="btn btn-dark mr-2" @click.prevent="onClickNew"><i class="fa fa-plus"></i></button>
                                            <show-entries v-on:change="onShowEntriesChange"></show-entries>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-7">
                                        <div class="form-inline float-right" >
                                            <grid-search v-on:onEnterKeyPressed="onEnterKeyPressed"></grid-search>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                            style="width: 100%;">
                                            <thead>
                                                <tr role="row">
                                                    <th  tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                                        >Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending"
                                                        >Email</th>
                                                         <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending"
                                                        style="width: 180px;">Last Login Date</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending"
                                                        style="width: 180px;">Last Activity Date</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending"
                                                        style="width: 205px;"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="user in users" :key="user.id">
                                                    <td class="sorting_1">{{user.name}}</td>
                                                    <td class="sorting_1">{{user.email}}</td>
                                                    <td class="sorting_1">{{user.lastActivityDate}}</td>
                                                    <td class="sorting_1">{{user.lastLoginDate}}</td>
                                                    <td>
                                                        <button type="button" class="btn btn-dark"><i class="fa fa-edit"></i></button>
                                                        <button type="button" class="btn btn-dark"><i class="fa fa-trash"></i></button>
                                                        <button type="button" class="btn btn-dark"><i class="fa fa-lock"></i></button>
                                                        <button type="button" class="btn btn-dark"><i class="fa fa-unlock"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-5">
                                        <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                    </div>
                                    <div class="col-sm-12 col-md-7">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div> -->
    
</template>

<script>
import showEntries from "./../core/grid/show-entries";
import gridSearch from "./../core/grid/grid-search";
import { getUsers } from "./../../services/administration/user";

export default {
  components: {
    "show-entries": showEntries,
    "grid-search": gridSearch
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    getUsers("", 1, 10).then(
      response => {
        this.users = response.body;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    );
  },
  methods: {
    onClickNew: function() {
      this.$router.push({ name: "User" });
    },
    onShowEntriesChange: function(event) {},
    onEnterKeyPressed: function(event) {
      console.log(event);
    },
    onUserSelected: function(userId, event) {
      console.log(userId);
      console.log(event);
      this.$router.push({ name: "User", params: { id: userId } });
    }
  }
};
</script>
