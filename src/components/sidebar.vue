<template>
    <div class="Sidebar">

        <div class="sidebar-container">

            <div class="sidenav">

                <div class="nav-logo">
                    <img src="../assets/images/gttrans.png" alt="Guindy Times"/>
                    <span><strong>Guindy Times</strong></span>
                </div>
                <div class="nav-items">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">A</a></li>
                        <li><a href="">B</a></li>
                        <li><a href="">C</a></li>
                        <li><a href="">D</a></li>
                    </ul>
                </div>
                <div class="box">
                    <div class="container-1">
                        <span class="icon"><i class="fa fa-search"></i></span>
                        <input type="search" id="search" placeholder="Search..." />
                    </div>
                </div>

            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped>

    @import '../assets/css/sidebar.css';

</style>