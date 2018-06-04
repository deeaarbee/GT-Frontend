<template>
  <div class="testimonials">

    <div class="testimonials-container shadows-box">
      <div id="testimonials-heading">
        <h2><strong>WHAT PEOPLE SAY ABOUT US</strong></h2>
      </div>
      <div class="testimonials-content">
        <slick ref="slick" :options="slickOptions">
          <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
               "The Warhorse team has made learning really fun and enthusiastic"
              </p>
            </div>
            <h3 class="title">Anirudh</h3>
          
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
              "My attention was grabbed unlike any other class"
              </p>
            </div>
            <h3 class="title">Laeya</h3>
           
          </div>
           <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
             "Kudos to these youngsters doing such a great job"
              </p>
            </div>
            <h3 class="title">Ronnie screwala</h3>
           
          </div>
           <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
              "I am noticing great changes with Nikitha. She is communicating her feelings and not shouting" 
              </p>
            </div>
            <h3 class="title">Parent</h3>
            
          </div>
           <div class="testimonial">
            <div class="testimonial-content">
              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <p class="description">
              "They're not like school teachers. They're cool teachers"
              </p>
            </div>
            <h3 class="title">Vivaan</h3>
            <!-- <span class="post">Web Developer</span> -->
          </div>
        </slick>
      </div>

    </div>

  </div>

</template>

<script>
  import Slick from 'vue-slick';
  export default {
    name: "testimonials",
    components: {Slick},
    data() {
      return {
        slickOptions: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
          infinite:true,
          autoplay: true,
          button: true,
          prevArrow: '<div class="class-too" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
          nextArrow: '<div class="class-too" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
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
  @import '../assets/css/testimonials.css';
</style>
