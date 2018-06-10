<template>
    <div class="container-fluid p-3">
        <div class="clearfix">
            <h2 class="float-left">Create User</h2>
            <router-link :to="{ name: 'Users' }" class="back-link ml-3">
                <i class="fa fa-arrow-circle-left mr-1"></i>back to users
            </router-link>
            <div class="float-right">
                <button type="button" class="btn btn-primary"><i class="fa fa-save mr-2"></i>Save</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-primary"><i class="fa fa-save ml-2 mr-2"></i>Save &amp; new</button>
            </div>
        </div>
        <div class="bg-white p-4 mt-2"> 
            <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="User">
                </div>
            </div>
             <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="Confirm Password">
                </div>
            </div>
            </form>
        </div>
    </div>
</template>