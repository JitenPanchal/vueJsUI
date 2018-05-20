<template>
    <label>Search:
        <input type="search" class="form-control form-control-sm ml-2" aria-controls="dataTable" @keyup.enter.prevent="onEnterKeyPressed">
    </label>
</template>

<script>
export default {
    methods: {
        onEnterKeyPressed: function(event){
            this.$emit("onEnterKeyPressed",event.target.value);
        }
    }
}
</script>