<template>
<div class="team">
  <div class="team-container shadows-box">
    <div id="team-heading">
      <h2><strong>THE TEAM</strong></h2>
    </div>
    <div class="team-content" style="width:100%;">
      <div id="slickimg">
      <slick ref="slick" :options="slickOptions">
         <div class="test ">
          <img class="sl-img" src="../assets/images/kd.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Sidhaanth</strong></h3>
            <span>Co-founder & CEO</span>
          </div>
        </div>
         <div class="test ">
          <img class="sl-img" src="../assets/images/vis.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Vishal</strong></h3>
            <span>Co-founder</span>
          </div>
        </div>
          <div class="test ">
          <img class="sl-img" src="../assets/images/barath.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Barath</strong></h3>
            <span>Content Head</span>
          </div>
        </div>
         <div class="test ">
          <img class="sl-img" src="../assets/images/jeev.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Jeevan</strong></h3>
            <span>Head of Sales, Trainer</span>
          </div>
        </div>
         <div class="test ">
          <img class="sl-img" src="../assets/images/sharat.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Sharat</strong></h3>
            <span>Head of Marketing, Trainer</span>
          </div>
        </div>
        
         <div class="test ">
          <img class="sl-img" src="../assets/images/suraj.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Suraj</strong></h3>
            <span>Digital Content Creator</span>
          </div>
        </div>
        
          <div class="test ">
          <img class="sl-img" src="../assets/images/ra.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Rahul</strong></h3>
            <span>Trainer</span>
          </div>
        </div>
        <div class="test ">
          <img class="sl-img" src="../assets/images/dil.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Dileep</strong></h3>
            <span>Theatre Trainer, Experience Creator</span>
          </div>
        </div>
      
        <div class="test ">
          <img class="sl-img" src="../assets/images/lav.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Lavanya</strong></h3>
            <span>Designer, Trainer</span>
          </div>
        </div>
         <div class="test ">
          <img class="sl-img" src="../assets/images/mal.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Malavika</strong></h3>
            <span>Desinger</span>
          </div>
        </div>
        
         <div class="test ">
          <img class="sl-img" src="../assets/images/aks.jpg">
          <div class="sl-bundle-caption">
           <h3><strong>Akshaya</strong></h3>
            <span>Head of Design</span>
          </div>
        </div>
       
      </slick>
      </div>
    </div>
    </div>
</div>
</template>

<script>
  import Slick from 'vue-slick';
    export default {
      components: {Slick},
      name: "team",
      data() {
        return {
          slickOptions: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            infinite:true,
            autoplay: true,
            button: true,
            prevArrow: '<div class="class-to-style" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
            nextArrow: '<div class="class-to-style" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
          }
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/team.css";
</style>
