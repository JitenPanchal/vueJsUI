<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="card mb-3" style="top:64px !important">
                <div class="card-header">
                    <i class="fa fa-users fa-lg mr-2"></i>Users</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <div id="dataTable_wrapper" class="container-fluid dt-bootstrap4">
                            <div class="row mb-3">
                                <div class="col-sm-12 col-md-5">
                                    <form class="form-inline">
                                        <button type="button" class="btn btn-dark mr-2"><i class="fa fa-plus"></i></button>
                                        
                                        <label>Show
                                            <select name="dataTable_length" aria-controls="dataTable" class="form-control form-control-sm ml-2 mr-2">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                            </select> entries
                                        </label>
                                    </form>
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <form class="form-inline float-right">
                                        <label>Search:
                                            <input type="search" class="form-control form-control-sm ml-2" placeholder="" aria-controls="dataTable">
                                        </label>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                        style="width: 100%;">
                                        <thead>
                                            <tr role="row">
                                                <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                                    >Name</th>
                                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending"
                                                    >Email</th>
                                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending"
                                                    style="width: 180px;">Last Activity Date</th>
                                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending"
                                                    style="width: 205px;"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" class="odd">
                                                <td class="sorting_1">Airi Satou</td>
                                                <td>Accountant</td>
                                                <td>2008/11/28</td>
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
    </div>
</template>