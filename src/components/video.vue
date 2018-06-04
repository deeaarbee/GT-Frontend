<template>
  <div class="videos">
    <div class="video-container shadows-box">
      <div id="video-heading">
        <h2><strong>Watch Us in Action</strong></h2>
      </div>
      <div class="video-content">
        <div id="slickimg">
          <slick ref="slick" :options="slickOptions">
            <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/kaYf2SUKfX0"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/9JmkhR6MhI4"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/LAPP9dVia1M"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/-G8kC4D06gE"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/uDr0DdPRni0"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/SZ2Tl71epa4"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/Y_ygt_1Ttyg"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/BpWo0VVsr2E"></iframe>
            </div>
             <div class="test" >
              <iframe width="750" height="400" src="https://youtube.com/embed/TpGCwbH-5nI"></iframe>
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
      components:{Slick},
        data(){
          return{
            slickOptions: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:true,
              infinite:true,
              autoplay: false,
              button: true,
              prevArrow: '<div class="class-to" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
              nextArrow: '<div class="class-to" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
            }
          }
        },
      methods:{
      },
      created(){
      }
    }
</script>

<style scoped>
  @import '../../node_modules/slick-carousel/slick/slick.css';
  @import '../assets/css/video.css';
</style>
