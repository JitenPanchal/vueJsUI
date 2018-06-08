<template>
  <div>
     <!-- <master-page></master-page>
    <router-view></router-view>  -->

     <nav class="navbar fixed-top header">
        <a class="navbar-brand brand col-md-2 col-sm-5" href="#">
            <i class="fab fa-slack fa-lg brand pr-1"></i>nopCommerce</a>
        <div class="col-md-9 col-sm-5">
            <button type="button" class="btn btn-default" id="sidebarCollapse" @click="isHidden = !isHidden">
                <i class="fa fa-bars"></i>
            </button>
        </div>
        <a class="nav-link text-white text-center" href="#" @click.prevent='$store.dispatch("logout")'>
            <i class="fas fa-sign-out-alt mr-1"></i>Logout</a>
    </nav>

    <div>
        <nav id="sidebar" class="hidden-xs-down bg-faded sidebar pr-3" :class="{ active: isHidden }">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="input-group m-2 search-bar">
                        <input class="form-control p-1 side-bar-search-box" v-model="searchText" @input="onSearchInput" @blur="onBlurSearchInput" type="text"
                            placeholder="Search">
                        <span class="input-group-append">
                            <button class="btn bg-dark" type="button">
                                <i class="fa fa-search text-white"></i>
                            </button>
                        </span>
                        <ul class="list-group d-none search-suggestion-box" id="suggestionBox">
                        </ul>
                    </div>
                </li>
                <li class="nav-item ml-2">
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
                        <i class="fas fa-user-md mr-2"></i>Caseflow
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
        
        <div id="content">
          <router-view></router-view> 
        </div>
    </div>
 </div>
</template>

<script>
import masterPage from "./master-page";



export default {
  methods: {},
  components: {
    masterPage
  },
  data() {
    return {
      isHidden: false,
      searchText: '',
      menuItemsJson : '[' +
'{' +
'"text":"Administration",' +
'"items": [' +
'{ "text":"Users", "parentText": "Administration > Users" },' +
'{ "text":"Roles", "parentText": "Administration > Roles" },' +
'{ "text":"Regions", "parentText": "Administration > Regions" },' +
'{ "text":"Countries", "parentText": "Administration > Countries" },' +
'{ "text":"Sources", "parentText": "Administration > Sources" }' +
']' +
'},' +
'{' +
'"text":"Caseflow", ' +
'"items": [' +
'{ "text":"Unmatched", "parentText": "Caseflow > Unmatched" },' +
'{ "text":"Matched", "parentText": "Caseflow > Matched" }' +
']' +
'}' +
']'
    };
  },
  methods: {
    onSearchInput(event) {
      debugger
      let suggestionBox = $("#suggestionBox");
      let searchText = this.searchText.toLowerCase();
      let element = event.target;

      suggestionBox.empty();

      let menuItems = jQuery.parseJSON(this.menuItemsJson);

      for (let menuItem of menuItems) {
        for (let item of menuItem.items) {
          if (item.text.toLowerCase().startsWith(searchText.toLowerCase())) {
            var li = $("<li/>")
              .addClass("list-group-item")
              .addClass("text-dark")
              .addClass("search-suggestion-box-item")
              .text(item.text)
              .appendTo(suggestionBox);
          }
        }
      }

      // _.forEach(menuItems, function(menuItem) {
      //   _.forEach(menuItem.items, function(item) {
      //     if (item.text.toLowerCase().startsWith(searchText.toLowerCase())) {
      //       var li = $("<li/>")
      //         .addClass("list-group-item")
      //         .addClass("text-dark")
      //         .addClass("search-suggestion-box-item")
      //         .text(item.text)
      //         .appendTo(suggestionBox);
      //     }
      //   });
      // });

      if (element.value && suggestionBox.hasClass("d-none"))
        suggestionBox.removeClass("d-none");

      if (!element.value) {
        suggestionBox.addClass("d-none");
      }
    },
    onBlurSearchInput(element) {
      let suggestionBox = $("#suggestionBox");
      if (!suggestionBox.hasClass("d-none")) suggestionBox.addClass("d-none");
    }
  }
};
</script>