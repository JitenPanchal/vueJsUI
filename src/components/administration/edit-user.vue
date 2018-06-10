<template>
    <div class="container-fluid p-3">
        <div class="clearfix">
            <h2 class="float-left">Edit User</h2>
            <router-link :to="{ name: 'Users' }" class="back-link ml-3">
                         <i class="fa fa-arrow-circle-left mr-1"></i>back to users</router-link>
            <button type="button" class="btn btn-primary float-right"><i class="fa fa-save mr-2"></i>Save</button>
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
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                        First radio
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        Second radio
                    </label>
                    </div>
                    <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                    <label class="form-check-label" for="gridRadios3">
                        Third disabled radio
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <div class="col-sm-2">Checkbox</div>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                    Example checkbox
                    </label>
                </div>
                </div>
            </div>
            
            </form>
        </div>
    </div>
</template>