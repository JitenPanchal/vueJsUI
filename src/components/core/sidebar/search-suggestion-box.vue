<template>
    <ul class="list-group search-suggestion-box" :class="{'d-none':!(suggestionItems && suggestionItems.length)}" id="suggestionBox">
        <li class="list-group-item text-dark search-suggestion-box-item" 
            v-for="suggestionItem in suggestionItems" :key="suggestionItem.text">
            <a @click.prevent="$emit('onSuggestionItemClicked',suggestionItem)" class="nav-link">
                <p class="mb-1">{{suggestionItem.text}}</p>
                <small class="text-muted">{{suggestionItem.parentText}}</small>
            </a> 
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    suggestionItems: Array
  },
};
</script>

<style scoped>

.search-suggestion-box li:hover{
    background-color: #c6c8ca;
    cursor: pointer;
}

</style>