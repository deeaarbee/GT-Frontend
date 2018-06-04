<template>
<div class="register">
  <div class="register-container shadows-box">
    <div id="register-heading">
      <h2><strong>REGISTER NOW</strong></h2>
    </div>
    <div class="register-filter">
    <span id="age-location">
      <label for="age"><strong>AGE</strong></label>
      <select class="form-control" id="age" v-model="age">
        <option style="display:none;" value="">Select an Age</option>
        <option v-for=" item in agelist">{{item}}</option>
      </select> &nbsp;&nbsp;&nbsp;
      <label for="location">LOCATION</label>
      <select class="form-control" id="location" v-model="location">
        <option style="display:none;" value="">Select a Location</option>
        <option v-for="item in locationlist" >{{item}}</option>
      </select> &nbsp;&nbsp;&nbsp;
       <!--<label for="discount"><strong>DISCOUNT</strong></label>-->
      <!--<select class="form-control" id="discount" v-model="discount">-->
        <!--<option style="display:none;" value="">Discount</option>-->
        <!--<option v-for=" item in discountlist">{{item}}</option>-->
      <!--</select>-->
    </span>
    </div>
    <div class="register-content" style="width:100%;">
      <div class="row courses-row" style="margin-left: 0px; margin-right: 0px;">
        <div class="reg-div col-md-4" v-for="item in selectedageList">
         <div class="div1">
          <img class="reg-img" :src="getImgUrl(item.img)" v-bind:alt="item.name">
          <div class="sl-bundle-caption">
            <h4 style="color: #ffc000;"><strong>{{item.name}}</strong></h4>
            <span>Age : {{item.age}}</span><br>
            <span>{{item.address}}</span>
            <br>
            <button type="button" class="btn reg-btn" @click="openform(item.id)">
              <strong>REGISTER</strong>
            </button>
          </div>
           <br>
         </div>
        </div>
      </div>
      <!--</slick>-->
      <!--<slick ref="slick" :options="slickOptions">-->
        <!--<div class="reg-div" v-for="i in 10">-->
          <!--<div class="div2">-->
            <!--<img class="reg-img" src="../assets/images/circle.jpg">-->
            <!--<div class="sl-bundle-caption">-->
            <!--<h4 style="color: #ffc000;"><strong>CODING</strong></h4>-->
            <!--<span>10 hours of Learning</span>-->
              <!--<br>-->
              <!--<button type="button" class="btn reg-btn" @click="check()">-->
                <!--<strong>REGISTER</strong>-->
              <!--</button>-->
          <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</slick>-->

       <!-- <slick ref="slick" :options="slickOptions">
        <div class="reg-div" v-for="i in 10">
         <div class="div1">
          <img class="reg-img" src="../assets/images/circle.jpg">
          <div class="sl-bundle-caption">
            <h4 style="color: #ffc000;"><strong>PUBLIC SPEAKING</strong></h4>
            <span>10 hours of Learning</span>
          </div>
           <br>
         </div>
          <div class="div2">
            <img class="reg-img" src="../assets/images/circle.jpg">
            <div class="sl-bundle-caption">
            <h4 style="color: #ffc000;"><strong>CODING</strong></h4>
            <span>10 hours of Learning</span>
          </div>
          </div>
        </div>
      </slick>
    </div> -->
    </div>
    <div v-show="initialpop">
      <transition name="fade">
        <div id="myModal" class="modal form2" v-show="initialpop">
          <div class="modal-content form2-content">
            <div class="popup-header ">
              <h2 style="text-align:center; display: inline">Enter Details</h2>
              <span class="close--" id="close" @click="close()">&times;</span>
            </div>
            <div class="modal-desc form2-desc">
                <span>
                    THE WARHORSE ACADEMY 2018-19
                </span>
            </div>
            <div class="modal-body signup-body ">
              <br>

              <div class="input input--akira akira-name " id="name">
                <input v-model="formdetails.name" name="email" class="input__field input__field--akira "  type="text " id="input-7-3 " ng-required="true" required/>
                <label class="input__label input__label--akira " for="input-7-3 ">
                  <span class="input__label-content input__label-content--akira ">Name</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="age">
                <input  v-model="formdetails.age" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
                <label class="input__label input__label--akira " for="input-7-4 ">
                  <span class="input__label-content input__label-content--akira " >Age</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="address">
                <input  v-model="formdetails.address" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                <label class="input__label input__label--akira " for="input-7-2 ">
                  <span class="input__label-content input__label-content--akira ">Address</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="school">
                <input  v-model="formdetails.school" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                <label class="input__label input__label--akira " for="input-7-2 ">
                  <span class="input__label-content input__label-content--akira ">School</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="email-parent">
                <input  v-model="formdetails.parent_email" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                <label class="input__label input__label--akira " for="input-7-2 ">
                  <span class="input__label-content input__label-content--akira ">Email ID (Parent)</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="email-student">
                <input  v-model="formdetails.student_email" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                <label class="input__label input__label--akira " for="input-7-2 ">
                  <span class="input__label-content input__label-content--akira ">Email ID (Student)</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="phone-parent">
                <input  v-model="formdetails.parent_phone" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
                <label class="input__label input__label--akira " for="input-7-4 ">
                  <span class="input__label-content input__label-content--akira " >Phone Number(Parent)</span>
                </label>
              </div>

              <div class="input input--akira akira-name " id="phone-student">
                <input  v-model="formdetails.student_phone" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
                <label class="input__label input__label--akira " for="input-7-4 ">
                  <span class="input__label-content input__label-content--akira " >Phone Number(Student)</span>
                </label>
              </div>

              <div class="batch-timing form2-batch-timing">
                <span style="color:#ffc000;"><h5 style="margin-left:-1%;">SELECT BATCH</h5>
                  <!--<h5 style="margin-left:40%">SELECT TIMING</h5>-->
                </span>
                <span class="form2-select">
                                <select class="form-control" id="batches" v-model="formdetails.batch">
                                    <option style="display:none;" value="">BATCH</option>
                                  <option v-for=" date in batchlist" v-bind:value="date.batchID" >{{date.day}}&nbsp;&nbsp;{{date.startTime}} - {{date.endTime}}</option>
                                </select>
                                <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                                <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                                <!--<select class="form-control" id="timing" v-model="timing" >-->
                                    <!--<option style="display:none;" value="">TIMING</option>-->
                                  <!--&lt;!&ndash;<option v-for="date in timinglist" >{{date.startTime}}-{{date.endTime}}</option>&ndash;&gt;-->
                                <!--</select>-->
                            </span>
              </div>

              <div class="question-title">
                            <span>To understand our students better, we would like them to answer the following question
                                (In under 150 words)..</span>
              </div>
              <div class="question">
                <span style="text-transform: uppercase;">If you’re the main character in a novel, how would your character be described ?</span>
              </div>

              <div class="form2-textarea">
                <textarea name="question" id="question" v-model="formdetails.description"></textarea>
              </div>

              <br>

              <div>
                <button type="submit" class="btn-sign form2-btn course-data" @click="formsubmit()">
                                <span id="signup ">
                                    <strong>DONE</strong>
                                </span>
                </button>
              </div>
              <br>
              <!--    <div style="margin-top: 5px; ">
                      <a href=" "><span id="member ">Already a member? Log In</span></a>
                  </div> -->
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</div>
</template>

<script>
  import Slick from 'vue-slick';
  import form from './form';
  export default {
        name: "register",
      components: {
            Slick,
          form22:form
      },
      data() {
        return {
            form2:false,
            batchlist:"",
          slickOptions: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            infinite:true,
            autoplay: true,
            button: true,
            prevArrow: '<div class="class-t" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
            nextArrow: '<div class="class-t" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
          },
            initialpop: false,
            batch:"",
            timing:"",
            formdetails: {
                "name": "",
                "age":"",
                "school":"",
                "address":"",
                "parent_email":"",
                "student_email":"",
                "parent_phone": "",
                "student_phone":"",
                "batch":"",
                "description":"",
                "isPaid":""
            },
          age:"",
          location:"",
            discount:"",
          agelist: [
            '10-12',
            '13-15'
          ],
          locationlist: [
            'Adyar',
            'Alwarpet',
            'Kilpauk'
          ],
            discountlist: [
                '10%',
                '20%',
                '30%',
                '40%'
            ],
          courses1:[
            {
              id:1,
              img:"J1",
              name:"J1",
              age:"10-12",
              location:"Alwarpet",
                address:"Kanchana Paati, Alwarpet",
                batch:[
                    {
                        batchID:"alwarpetj1",
                        day:"",
                        startTime:"4:00 PM",
                        endTime:"5:30 PM "
                    }
                ]
            },
            {
              id:2,
              img:"J1",
              name:"J1",
              age:"10-12",
              location:"Adyar",
                address:"The Book Office,Venkateshwara Nagar, Adyar",
                batch:[
                    {
                        batchID:"adyarj1",
                        day:"",
                        startTime:"2:00 PM",
                        endTime:"3:30 PM "
                    }
                ]
            },
              {
                  id:3,
                  img:"J1",
                  name:"J1",
                  age:"10-12",
                  location:"Kilpauk",
                  address:"Soul Garden Bistro, Kilpauk",
                  batch:[
                      {
                          batchID:"kilpaukj1",
                          day:"SAT",
                          startTime:"2:00 PM",
                          endTime:"3:30 PM "
                      }
                  ]
              },
              {
                  id:4,
                  img:"S1",
                  name:"S1",
                  age:"13-15",
                  location:"Alwarpet",
                  address:"Soul Garden Bistro, Alwarpet",
                  batch:[
                      {
                          batchID:"alwarpets1",
                          day:"",
                          startTime:"4:00 PM",
                          endTime:"5:30 PM "
                      }
                  ]
              },
              {
                  id:5,
                  img:"S1",
                  name:"S1",
                  age:"13-15",
                  location:"Adyar",
                  address:"The Book Office,Venkateshwara Nagar, Adyar",
                  batch:[
                      {
                          batchID:"adyars1",
                          day:"",
                          startTime:"4:00 PM",
                          endTime:"5:30 PM "
                      }
                  ]
              },
              {
                  id:6,
                  img:"S1",
                  name:"S1",
                  age:"13-15",
                  location:"Kilpauk",
                  address:"Soul Garden Bistro, Kilpauk",
                  batch:[
                      {
                          batchID:"kilpauks1",
                          day:"SUN",
                          startTime:"10:00 AM",
                          endTime:"11:30 AM "
                      }
                  ]
              }
          ],
            options:{
                "key": "rzp_live_jeEnRTH6fOdCOK",
                "amount": 250000,
                "name": "Warhorse",
                "description": "2500 registration fee",
                "image": '',
                "modal": {
                    ondismiss: () => { // <- Here!
                    console.log("closed");
                    this.submit();
                    }
                },
                "handler": (response) => {
                // console.log(response);
                this.payment_id = response.razorpay_payment_id;
           console.log("HANDLER : "+this.payment_id);
          this.checkcapture();
          // console.log("success");
      },
          "prefill": {
              "name": "",
                  "email": ""
          },
          "notes": {
              "address": "Mandhaveli"
          },
          "theme": {
              "color": "#FFC000"
          }
      },
          payment_id:""
        }
      },
      methods:{
            submit:function () {
              //  console.log("function called");
                this.formdetails.isPaid=false;

                this.$http.get(`https://api.myjson.com/bins/15ng66`).then(function(data){
                    console.log(data);
                    let dummy = data.body;
                    dummy.push(this.formdetails);
                    this.$http.put(`https://api.myjson.com/bins/15ng66`,dummy).then(function(data){
                        console.log(data);
                    });

                });
            },
          razor:function () {

              // this.options.amount = Math.round(this.amount + this.amount * 0.0225);
              //  this.options.amount = 60100;
              //console.log("coupon id : ",this.couponID);
              // this.options.amount = this.options.amount - amount*100;
              // console.log("amount after change : ",this.options.amount);
              let rzp1 = new Razorpay(this.options);
              rzp1.open();
              // e.preventDefault();
          },
          checkcapture:function () {
              this.$http.post(`https://api.warhorse.in/razorpay/check`,{
                  "amount":this.options.amount,
                  "id":this.payment_id,
                  "couponID":""
              }).then(response=> {
                  if(response.body.captured){
                      this.formdetails.isPaid=true;
                  this.$http.get(`https://api.myjson.com/bins/15ng66`).then(function(data){
                   //   console.log(data);
                      let dummy = data.body;
                      dummy.push(this.formdetails);
                      this.$http.put(`https://api.myjson.com/bins/15ng66`,dummy).then(function(data){
                    //      console.log(data);
                      });

                  });
                  alert("PAYMENT HAS BEEN COMPLETED SUCCESSFULLY!");
              }
          else{
                  this.formdetails.isPaid=false;
                  this.$http.get(`https://api.myjson.com/bins/15ng66`).then(function(data){
                  //    console.log(data);
                      let dummy = data.body;
                      dummy.push(this.formdetails);
                      this.$http.put(`https://api.myjson.com/bins/15ng66`,dummy).then(function(data){
                  //        console.log(data);
                      });

                  });
                  alert("OOPS!ERROR IN PAYMENT");
              }
          });
          },

          check:function(bid) {
            this.$router.push('/payment/'+bid);
          },
          getImgUrl(pet) {
            var images = require.context('../assets/images/AcademyBatchIcons/', false, /\.png$/)
            return images('./' + pet + ".png")
          },
          openform:function (id) {
              this.initialpop=true;

              for(let k in this.courses1){
                  if(id === this.courses1[k].id){
                    this.batchlist=this.courses1[k].batch;
                      break;
                  }
              }

            //  console.log(this.form2 ,"clicked");
          },
          close: function(){
              this.initialpop = false;
          },

          formsubmit: function(){
              if(this.formdetails.name === "" || this.formdetails.age === "" || this.formdetails.school==="" || this.formdetails.address===""
                  || this.formdetails.parent_email === "" || this.formdetails.student_email === "" || this.formdetails.parent_phone=== "" ||
                  this.formdetails.student_phone ==="" || this.formdetails.batch === "" || this.formdetails.description === ""){

                  alert("Please fill in the correct details");
              }
              else{

                  console.log(this.formdetails);
                  this.razor();
                  this.close();
             }
          }
        },
      computed: {
        selectedageList: function() {
          let vm = this;
          let age = vm.age;
          let location = vm.location;
          if(age === "" && location === "") {
            age =  "";
            location = "Adyar";
          }
          if (age !== "" && location === "") {
            return vm.courses1.filter(function(person) {
              return person.age === age;
            });
          }
          if (age === "" && location !== "") {
            return vm.courses1.filter(function(person) {
              return person.location === location;
            });
          }
          if(age !== "" && location !== "") {
            return vm.courses1.filter(function(person) {
              return person.location === location && person.age === age;
            });
          }

          //
          // if(age === "") {
          //   return vm.courses1;
          // } else {
          //   return vm.courses1.filter(function(person) {
          //     return person.age === age;
          //   });
          // }
        }
      }
    }
   
</script>

<style scoped>
  @import '../assets/css/register.css';
  .fade-enter-active{
    transition: opacity 1.0s;
  }
  .fade-leave-active{
    transition: opacity .9s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @import '../assets/css/modal.css';

  .form2{
    width:100%;
    height: 100%;
    margin-left:10%;
    margin-top: 0;
    overflow: scroll;
  }

  #close{
    margin-top: -1%;
  }

  #batches{
    margin-left: 0;
    width: 40%;
  }

  .form2-batch-timing{
    padding: 0 0 2% 0;
  }
  .form2-desc{
    padding: 1.5%;
    font-size: 20px;
  }
  .form2-btn{
    padding: 0.5% 1%;
  }

  .question-title,.question{
    padding: 2%;
    font-size: 15px;
    color: #ffc000;
  }

  .form2-textarea textarea{
    background: black;
    color: white;
    border: none;
    font-size: 16px;
    padding: 10px;
    height: 15em;
    width: 45em;
  }
  .form2-textarea textarea:focus{
    outline: none;
  }

  @media  (max-width: 600px) {

    #close{
      margin-top: -4%;
    }
    .batch-timing>span{
      width: 100%;
    }
    .form2-textarea textarea{
     margin-top: 5%;
      height: 15em;
      width: 17em;
    }

  }
</style>
