<template>
<div class="navbar">

  <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background-color:#ffc000;border:#ffc000;z-index: 9999">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button style="color: black" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </button>

    </div>
    <div class="navbar-brand navbar-brand-centered"><a href=""><img src="../assets/images/Logooutline.png" id="navbar-logo"></a></div>
    <span class="navbar-brand" id="mobile-logo">WARHORSE</span>
    <!-- Collect the nav links, forms, and other content for toggling -->

    <div class="collapse navbar-collapse" id="navbar-collapse-1">
      <ul class="nav navbar-nav navbar-left">
        <li>
          <div id="abt-us">
            <a href="https://warhorse.in/#about-div" target="_blank" style="text-decoration: none;"><span class="hover1">ABOUT US</span></a>
          </div>
        </li>

        <li>
          <div id="gallery">
            <a href="#aca"  style="text-decoration: none;"><span class="hover1">GALLERY</span></a>
          </div>
        </li>
        <li>
          <div id="test">
            <a href="#testimonials"  style="text-decoration: none;"><span class="hover1">TESTIMONIALS</span></a>
          </div>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">

        <li>
          <div id="academy">
            <a href="#action" style="text-decoration: none;"><span class="hover1">WATCH US IN ACTION</span></a>
          </div>
        </li>
        <li>
          <div id="register">
            <a href="#reg-now" style="text-decoration: none;"><span class="hover1" id="reg">REGISTER NOW</span></a>
          </div>
        </li>
        <li>
          <div id="blog">
            <a href="https://www.medium.com/warhorse-writes" target="_blank" style="text-decoration: none;"><span class="hover1">BLOG</span></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>

</div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

  @import '../assets/css/navbar.css';

</style>
