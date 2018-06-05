<template>
    <div class="Sidebar">

        <div class="sidebar-container">

            <div class="sidenav">

                <div class="nav-logo">
                    <img src="../assets/images/gttrans.png" alt="Guindy Times"/>
                    <img id="colg-logo" src="../assets/images/colllogocolor.png" alt="CEG">
                </div>
                <div class="gt-tech">
                    <h1>Tech.GT</h1>
                </div>

                <div class="nav-items">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Tech</a></li>
                        <li><a href="">How tos</a></li>
                        <li><a href="">How it works</a></li>
                        <li id="hr"><hr></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Guindytimes</a></li>
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
