<template>
    <div>
        Home Page

         <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    methods:{
        logout: function(){
            this.$store.dispatch("logout");
        }
    }
};
</script>
