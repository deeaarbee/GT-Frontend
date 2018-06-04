<template>
  <div class="class-features">

    <div class="class-container shadows-box">
      <div id="down-arrow">
        <a href="#class-feat"><strong><i class="fa fa-angle-down"></i></strong></a>
      </div>
      <div id="class-heading">
        <h2><strong>Class Features</strong></h2>
      </div>
      <br>
      <div id="class-content">
        <div class="row class-row">
          <div class="col-md-4 class-img" v-for="item in features ">
            <img :src="getImgUrl(item.img)" v-bind:alt="pic" class="img-responsive">
            <div class="caption">
              <h2><strong>{{item.name}}</strong></h2>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "class-features",
      data(){
          return{
            features:[
              {
                img:"GamifiedClassroom",
                name:"Gamified Classroom"
              },
              {
                img:"GrowthMindset",
                name:"Growth Mindset"
              },
              {
                img:"HabitForming",
                name:"Habit Forming"
              },
              {
                img:"CreativeActionClassroom",
                name:"Creative Action Classroom"
              },
              {
                img:"Evaluations",
                name:"Evaluations"
              },
              {
                img:"ExperientalLearning",
                name:"Experiental Learning"
              }
            ]
          }
      },
      methods:{
        getImgUrl(pet) {
          var images = require.context('../assets/images/CourseIcons/', false, /\.png$/)
          return images('./' + pet + ".png")
        }
      }
    }
</script>

<style scoped>
  @import '../assets/css/class-features.css';
</style>
