<template>
    <nav id="sidebar" class="hidden-xs-down bg-faded sidebar pr-3" :class="{ active: isHidden }">
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
    </nav>
</template>
