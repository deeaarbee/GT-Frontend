<template>

  <div class="course">
    <div class="container-fluid">
      <!-- Age -- Location -->
      <div class="age-location">
        <span id="age-location"><strong>{{Age}} Yrs , {{Location}}</strong></span>
      </div>

      <!--Lap-Bundles-->
      <div class="row bundles" v-for="(item) in bundles"  v-if="item.isBundle === true">

        <div class="heading">
          <a href="" @click.prevent="payment(item.id)">
            <span style="color: white">{{item.name}}</span>
          </a><br>
        </div>
        <div class="bundle-description">
          <p>
            {{item.description}}
          </p>
        </div>
        <div class="bundles-container">
          <div class="col-lg-3 col-md-3 col-xs-3" v-for=" (img,index) in item.images">

            <!--<div class="hovereffect">-->
            <a class="" href="" @click.prevent="payment(item.id)">
              <img class="img-responsive" v-bind:src="'http://' + img" alt="image">
              <!--<div class="overlay">-->
                <!--<a class="info" href="#" @click.prevent="payment(item.id)">Click here</a>-->
              <!--</div>-->
            </a>
            <!--</div>-->
            <br>
            <div class="caption">
              <span id="caption-name">{{item.courses[index]}}</span>
                <!--<span id="caption-rate">{{item.courseCost[index]}}INR</span>-->
              <span style="padding: 4% 0;"><button><span style="color:black;" @click="payment(item.id)">Click here</span></button></span>
            </div>
          </div>
        </div>
        <!--<div class="triangle-up-right">-->
          <!--<div class="triangle-text" style="margin-top: 1vh;">-->
                    <!--<span id="tri-combo">Combo&nbsp;at<br>-->
                      <!--&nbsp;&nbsp;&nbsp;<span style="margin-left: -7px;">{{item.price}}&nbsp;INR</span>-->
                    <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
     <!--Lap Bundles -->

      <div v-for="item in bundles" class="mobile-bundles"  v-if="item.isBundle === true">
        <div class="slick-container ">
          <div class="sl-header ">
            <h2 style="text-align:center " @click="payment(item.id)">{{item.name}}</h2>
          </div>
          <slick ref="slick" :options="slickOptions" infinite=false slides-to-show=2 dots=true arrows="false" autoplay=true>
            <div class="test " v-for="(img,index) in item.images">
              <img class="sl-img " @click="payment(item.id)" v-bind:src="'http://'+img">
              <div class="sl-bundle-caption ">
                <span>{{item.courses[index]}}</span>
                <br>
                <!--<span id="sl-bundle-rate" style="color: white">{{item.courseCost[index]}}INR</span>-->
                <br>
                <span><button><span style="color:black;" @click="payment(item.id)">Click here</span></button></span>
              </div>
            </div>
          </slick>
        </div>
        <br>
      </div>


    </div>

  </div>

</template>

<script>
  import Slick from 'vue-slick';
  import store from '../store/store';
  import * as type from '../store/mutations/types';
    export default {
      components:{Slick},
      name: "courses",
      data() {
        return {
          slickOptions: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false,
            infinite: false,
            autoplay:true,
            button:false
          },
          Age: "",
          Location: "",
          bundles: ''
        }
      },
      computed: {
        ageLocation() {
          return this.$store.state.agelocation.amount;
        }
      },
      methods: {
        payment: function (data) {
      //    console.log("data", data);
          store.dispatch({
            type: type.insertid,
            amount: data
          });
          this.$router.push('/payment');
        },
      },
      created() {
        if (this.ageLocation === undefined) {
        //  console.log("Error Undefined");
          this.$router.push('/');
        }
        else {
          console.log("Age :" + this.ageLocation.age + "\nLocation : " + this.ageLocation.location);
          this.Age = this.ageLocation.age;
          this.Location = this.ageLocation.location;
          this.$http.get(`https://api.warhorse.in/bundleAndCourse?age=${this.Age}&location=${this.Location}`)
            .then(function (data) {
              this.bundles = data.body.payload;

                console.log("course...",this.bundles[0].courses[1]);
                if(this.bundles[0].courses[1] === "Movement"){
                  this.bundles[0].courses.splice(1,1);
                  this.bundles[0].images.splice(1,1);
              }
              //console.log("");

              console.log(this.bundles);
            })
        }
      },
      beforeMount(){
        if (this.ageLocation === undefined) {
          console.log("Error Undefined");
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>

  @import '../../node_modules/slick-carousel/slick/slick.css';
@import "../assets/css/courses.css";

</style>
