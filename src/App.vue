<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
    components:{
        TheHeader,
    }
}
</script>
<style>
    html{
        font-family: sans-serif;
    }
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
    }
</style>