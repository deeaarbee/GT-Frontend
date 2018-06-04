<template>
<div class="academy">

  <div class="academy-container shadows-box">
    <div id="academy-heading">
      <h2><strong>Glimpses of The Academy</strong></h2>
      <h3 style="color: black"><strong>2017-18</strong></h3>
    </div>
    <div class="academy-content">
      <div id="slickimg">
      <slick ref="slick" :options="slickOptions" style="text-align: center">
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/1.jpg" alt="Academy">
          </div>
        </div>
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/2.jpg" alt="Academy">
          </div>
        </div>
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/3.jpg" alt="Academy">
          </div>
        </div>
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/4.jpg" alt="Academy">
          </div>
        </div>
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/5.jpg" alt="Academy">
          </div>
        </div>
        <div class="test">
          <div class="academy-img">
            <img src="../assets/images/AcademyMVPImages/6.jpg" alt="Academy">
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
        name: "academy",
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true,
                    infinite:true,
                    autoplay: true,
                    button: true,
                    prevArrow: '<div class="class-to-aca" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
                    nextArrow: '<div class="class-to-aca" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
  @import '../assets/css/academy.css';
</style>
