<template>
  <div class="home-container">
    <!--<button type="button" class="btn btn-success btn-circle btn-xl lap" style="z-index:9999"><span>CALL</span></button>-->
    <!--<a href="tel:9884177424"><button type="button" class="btn btn-success btn-circle btn-xl mob" style="z-index:9999"><span>CALL</span></button></a>-->
    
    
     <modal></modal>
    <carousel></carousel>
    <!--<classFeatures id="class-feat"></classFeatures>-->
    <why></why>
    <what></what>
    <how></how>
    <register id="reg-now"></register>
    <videos id="action"></videos>
    <academy id="aca"></academy>
    <testimonials id="testimonials"></testimonials>
    <team id="team"></team>
    <!--<foot></foot>-->
  </div>

</template>

<script>
  import navbar from './navbar'
  import carousel from './carousel'
  import classFeatures from './class-features'
  import testimonials from './testimonials'
  import why from './why'
  import what from './what'
  import how from './how'
  import videos from './video.vue'
  import register from './register'
  import academy from './academy'
  import team from './team'
  import foot from './footer'
  import modal from './modal'
  import form from './form'
    export default {
        name: "home",
      data(){
          return{
          }
      },
      components:{
        navbar:navbar,
        carousel:carousel,
        classFeatures : classFeatures,
        testimonials:testimonials,
          why:why,
          what:what,
          how:how,
        videos:videos,
        register:register,
        academy:academy,
        team:team,
        foot:foot,
        modal: modal,
          form:form
      },
      methods:{

      },
      created() {

      }
    }
</script>

<style scoped>
  @import '../assets/css/home.css';

</style>
