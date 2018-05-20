<template>
    <label>Show
        <select name="dataTable_length" aria-controls="dataTable" class="form-control form-control-sm ml-2 mr-2" @change="$emit('change', $event.target.value)">
            <option v-for="no in items" :key="no" :value="no">{{no}}</option>
        </select> entries
    </label>
</template>

<script>
import {entries} from './../../../static/show-entries';
export default {
    data() {
        return {
            items: entries
        }
    },
}
</script>