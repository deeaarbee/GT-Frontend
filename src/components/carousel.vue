<template>
  <div class="carousel-container">
  <!--Carousel -->
  <div id="carousel-example-generic" class="carousel slide  carousel-fullscreen" data-ride="carousel" style="z-index: 999">
    <div class="carousel-inner" role="listbox">
      <div class="item active c-one">
      </div>
      <div class="item c-three">
      </div>
       <div class="item c-two">
      </div>
       <!--<div class="item c-four">-->
      <!--</div>-->
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!--Carousel-->
  </div>
</template>

<script>
    export default {
        name: "carousel"
    }
</script>

<style scoped>
  @import '../assets/css/carousel.css';
</style>
