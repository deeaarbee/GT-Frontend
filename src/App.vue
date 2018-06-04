<template>
  <div class="main">
  <navbar></navbar>
  
    <button type="button" class="btn btn-success btn-circle btn-xl lap" style="z-index:9999"><span>CALL</span></button>
    <a href="tel:8448448805">
      <button type="button" class="btn btn-success btn-circle btn-xl mob" style="z-index:9999"><span>CALL</span></button></a>
    <transition name="fade">
      <router-view></router-view>
    </transition>

      <foot></foot>
  </div>
</template>

<script>
  import home from './components/home'
  import navbar from './components/navbar'
  import foot from './components/footer'
  export default {
    data(){
      return {
          initialpop: true
      }
    },
    components:{

      navbar:navbar,
      foot:foot,
      home:home
    }
  }
</script>
<style >
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .7s;
  }

  .fade-enter-active {
    transition-delay: .7s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .shadows-box{
      box-shadow: 6px 0 17px -4px #222 , -6px 0 17px -4px #222; 
      -moz-box-shadow: 6px 0 12px -4px #222, -6px 0 12px -4px #222; 
      -webkit-box-shadow: 6px 0 12px -4px #222, -6px 0 12px -4px #222;
  }

  @media (max-width: 500px){
    
    .shadows-box{
      box-shadow: 0px 0px 0px 0px #222;
      -moz-box-shadow: 0px 0px 0px 0px #222;
      -webkit-box-shadow:0px 0px 0px 0px #222;
  }
  }

  @import '../src/assets/css/home.css';
  
</style>
