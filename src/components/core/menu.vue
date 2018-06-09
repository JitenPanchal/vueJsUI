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
                <li class="nav-item ml-2" v-for="(menuItem,index) in menuItems" :key="menuItem.text">
                    <a href="#" v-if="menuItem.items && menuItem.items.length" class="nav-link collapsed text-white" data-toggle="collapse" v-bind:data-target="getElementIdAccessor('navbarNav',index)" aria-expanded="true">
                        <i class="mr-2" :class="[menuItem.icon]"></i>{{menuItem.text}}
                        <i v-if="menuItem.items && menuItem.items.length" class="fa fa-angle-left ml-2"></i>
                    </a>
                    <router-link v-if="menuItem.items && menuItem.items.length === 0" :to="{ name: menuItem['router-name'] }" class="nav-link collapsed text-white">
                      <i class="mr-2" :class="[menuItem.icon]"></i>{{menuItem.text}}
                    </router-link>
                    <div class="navbar-collapse collapse" v-bind:id="getElementId('navbarNav',index)" v-if="menuItem.items">
                        <ul class="navbar-nav ml-2">
                            <li class="nav-item" v-for="item in menuItem.items" :key="item.text">
                              <router-link :to="{ name: item['router-name'] }" class="nav-link text-white">
                                <i class="far fa-dot-circle mr-2"></i>{{item.text}}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
</template>

<script>
import json from "./../../static/menu-items.json";

export default {
  props: {
    isHidden: Boolean,
  },
  data() {
    return {
      searchText: "",
      menuItems: json
    };
  },
  methods: {
    getElementIdAccessor(id, index) {
      return `#${this.getElementId(id,index)}`;
    },
    getElementId(id, index) {
      return `${id}${index}`;
    },
    onSearchInput(event) {
      let suggestionBox = $("#suggestionBox");
      let searchText = this.searchText.toLowerCase();
      let element = event.target;

      suggestionBox.empty();

      for (let menuItem of this.menuItems) {
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