<template>
    <div class="Home">

        <div class="home-container">
            <sidebar></sidebar>
            <main_content></main_content>
            <rightbar></rightbar>
        </div>

    </div>
</template>

<script>
    import sidebar from './sidebar';
    import rightbar from './rightbar';
    import main_content from './main_content';
    export default {
        name: "home",
        components:{
            sidebar:sidebar,
            rightbar:rightbar,
            main_content:main_content
        }

    }
</script>

<style scoped>

</style>