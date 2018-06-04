<template>

  <div class="payment">

    <div class="container-fluid">

      <div class="header">
        <!-- Combo -->
        <div id="combo-description" class="description" style="">
         <div class="row">
         <div class="col-md-1">
         </div>
          <div class="payment col-md-6 col-sm-12">
            <h2><strong>{{bundledetails.bundleName}}</strong></h2>
            <p id="payment-age"> {{bundledetails.bundleAgeGroup}} Yrs</p>
            <p id="bundles-description">{{bundledetails.bundleDescription}}</p>
            <p id="payment-location" v-for="(i,index) in bundledetails.bundeleAddress" >{{i}}</p>
            <h2 id="combo-of"><strong>COMBO OF</strong></h2>
            <h4 id="bundle-courses"><strong>{{bundledetails.bundleComboString}}</strong></h4>
            <br>
            <h3 id="strike"><strong>{{bundledetails.bundleTotalCost}} INR</strong></h3>
            <h3 id="rate"><strong>{{bundledetails.bundlePrice}} INR</strong></h3>
            <button type="button" @click="bundleclick(bundledetails.bundleImojo,bundledetails.bundleName,bundledetails.bundlePrice)" id="btn-1" class="btn signup-popup"><span id="combo"><strong>ENROLL FOR COMBO</strong></span></button>

          </div>
          <div class="col-md-5 col-sm-12 video-cont">
            <div>
              <iframe class="video-frame" v-bind:src=videolink>
              </iframe>
            </div>
          </div>
         </div>
          <p class="arrow"> <span class="glyphicon glyphicon-chevron-down" id="arrow"></span></p>
        </div>
      </div>


        <br><br>
        <!--Description-->
        <div class="courses-container" id="courses-container">
          <div class="courses" v-for="item in coursedetails" style="background-color:rgba(0,0,0,0.4)">
            <div class="row circle-courses shadow">
              <div class="col-md-4 images">
                <img v-bind:src="'http://'+item.imageLink" alt="Lights" style="width:100%;border-radius: 50%;">
              </div>
              <div class="col-md-8 courses-col">
                <div class="caption-2 ">
                  <span>{{item.name}}</span>
                </div>
                <div class="subtitle">
                  {{item.subtitle}}
                </div>
                <div class="description-courses">
                  <p>
                    {{item.description}}
                  </p>
                </div>
                <div class="batch">
                            <span id="batches_avail"><strong>BATCHES AVAILABLE : </strong>
                            <div v-for="batch in item.batches" v-if="batch.isActive === true" style="font-size:80%;">
                                     {{batch.startDate}} - {{batch.endDate}} &nbsp; --> &nbsp;  {{batch.startTime}} - {{batch.endTime}}
                            </div>
                            </span>
                </div>
                <br>
                <div class="course-rate">
                  <strong>{{item.price}} INR</strong>
                </div>
                <br>
                <a v-bind:href="item.prospectusLink" target="_blank"><button type="button" class="btn prospectus"><span id="prospectus"><strong>PROSPECTUS</strong></span></button></a>
                <button type="button" @click="individualclick(item.batches[0].imojoLink,item.id,item.price,item.name,item.imageLink)" id="add-to-cart" class="btn btn-3 signup-popup2"><span><strong>ENROLL NOW</strong></span></button>
              </div>
            </div>
          </div>

        </div>

      <transition name="fade">
        <!-- Description -->
      <div id="myModal" class="modal" v-show="userdetails">
        <div class="modal-content ">
          <div class="popup-header ">
            <h2 style="text-align:center;display: inline">ENTER DETAILS</h2>
            <span class="close-- " id="close" @click="close()">&times;</span>
          </div>

          <div class="modal-body signup-body ">
            <br>

            <div class="input input--akira akira-name " id="email ">
              <input v-model="formdetails.email" name="email" class="input__field input__field--akira "  type="text " id="input-7-3 " ng-required="true" required/>
              <label class="input__label input__label--akira " for="input-7-3 ">
                <span class="input__label-content input__label-content--akira ">E-MAIL</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="password ">
              <input  v-model="formdetails.name" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
              <label class="input__label input__label--akira " for="input-7-2 ">
                <span class="input__label-content input__label-content--akira ">NAME</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="phone ">
              <input  v-model="formdetails.mobile" name="phone" class="input__field input__field--akira " type="text" id="input-7-4 " ng-required="true" required="required"/>
              <label class="input__label input__label--akira " for="input-7-4 ">
                <span class="input__label-content input__label-content--akira " >PHONE NUMBER</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="phone ">
              <input  v-model="couponkey" name="phone" class="input__field input__field--akira " type="text" id="input-7-4 " ng-required="true" required="required"/>
              <label class="input__label input__label--akira " for="input-7-4 ">
                <span class="input__label-content input__label-content--akira " >COUPON CODE</span>
              </label>
            </div>

            <div>
              <button type="submit" class="btn-sign course-data" @click="formsubmit()">
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


      <!--Mobile Description -->
      <div class="courses mobile-courses" v-for="(item,index) in coursedetails" style="background-color:rgba(0,0,0,0.4)">
        <div class="row circle-courses">
          <div class="col-md-4 images">
            <div class="mobile-caption ">
              <span>{{item.name}}</span>
            </div>
            <div class="mobile-subtitle">
              {{item.subtitle}}
            </div>
            <img v-bind:src="'http://'+ item.imageLink" alt="Lights "  style="width:100%;border-radius: 50%;">
            <button @click="dropme(index)" class="drop-arrow ">
              <span class="dd glyphicon glyphicon-chevron-down" id="arrow2"></span>
            </button>
          </div>
        </div>
        <div class="description-courses" v-show="isShowing(index) && check">
          <p>
            {{item.description}}
          </p>
          <div class="batch">
            <span id="batches_avail"><strong>BATCHES AVAILABLE : </strong>
              <div v-for="(batch,index) in item.batches" v-if="batch.isActive === true" style="font-size:80%;">
                {{batch.startDate}} - {{batch.endDate}} --  {{batch.startTime}} - {{batch.endTime}}
              </div>
            </span>
          </div>
          <br>
          <div class="course-rate">
            <strong>{{item.price}} INR</strong>
          </div>
          <br>
          <div class="mobile-buttons">
            <span>
              <a v-bind:href="item.prospectusLink"><button type="button" class="btn prospectus"><span id="prospectus-mobile"><strong>PROSPECTUS</strong></span></button></a>
              <button type="button" @click="individualclick(item.batches[0].imojoLink,item.id,item.price,item.name,item.imageLink)" id="formdetails add-to-cart-mobile" class="btn btn-3 signup-popup2" style="padding:10px 25px">
                <span style="color: black">
                  <strong>BUY</strong>
                </span>
              </button>
            </span>
          </div>
          <br>
        </div>
      </div>
      <!--Mobile Description -->

      <transition name="fade">
      <!--Bundle Courses Modal -->
      <div id="myModal-bundle" class="modal modal-bundle" v-show="modalshow">
        <div class="modal-content-bundle">

          <div class="popup-header-bundle">
            <h2 style="text-align:center;">BUNDLE DETAILS</h2>
            <span class="close " @click="close()" id="close-bundle">&times;</span>
          </div>

          <div class="modal-body-individual">
            <div class="course-number" v-show="!spin">
              <span>Courses {{index+1}}/{{coursedetails.length}}</span>
            </div>
              <Spinner v-show="spin"></Spinner>
            <div class="modal-caption" v-show="!spin">
              <span style="color: white;">{{bundlecourse.name}}</span>
            </div>
            <div class="modal-age-location " v-show="!spin">
              <span id="modal-age-location ">{{Age}}Yrs,{{Location}}</span>
            </div>
            <br>
            <div class="input input--akira akira-name ">
              <input class="input__field input__field--akira" v-bind:disabled="index !== 0" v-model="bundleform.studentname" type="text " id="input-22"/>
              <label class="input__label input__label--akira " for="input-22">
                <span class="input__label-content input__label-content--akira ">NAME OF THE STUDENT</span>
              </label>
            </div>
            <br>
            <div class="input input--akira akira-school ">
              <input class="input__field input__field--akira " v-bind:disabled="index !== 0" type="text " v-model="bundleform.school" id="input-22-school " />
              <label class="input__label input__label--akira " for="input-22-school ">
                <span class="input__label-content input__label-content--akira ">SCHOOL</span>
              </label>
            </div>
            <div class="batch-timing ">
              <span style="color:#ffc000;"><h5 style="margin-left:0;">SELECT BATCH</h5><h5 style="margin-left:30%">SELECT TIMING</h5></span>
              <span>
                <select class="form-control" id="batches" v-model="batch" v-on:change="create()">
                  <option style="display:none;" value="">BATCH</option>
                  <option v-for=" date in bundlecourse.batches" v-bind:value="date.batchID" >{{date.startDate}} - {{date.endDate}}</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select class="form-control" id="timing" v-model="timing" >
                  <option style="display:none;" value="">TIMING</option>
                  <option v-for="date in timinglist" >{{date.startTime}}-{{date.endTime}}</option>
                </select>
              </span>
            </div>
            <div class="prev-next">
              <span>
              <!-- <button type="button" :disabled="index === 0" class="btn-done prev" @click="backcourse"><span id="prev"><strong>PREV</strong></span></button> -->
                <button type="button" class="btn-done next" @click="change"><span id="next"><strong>NEXT</strong></span></button>
              </span>
            </div>
            <br>
          </div>
        </div>
      </div>
      </transition>
      <!--Individual Courses Modal-->



<transition name="fade">
      <!--Individual Courses Modal -->
      <div id="myModal-individual" class="modal modal-individual" v-show="dpopshow">
        <div class="modal-content-individual" >

          <div class="popup-header-individual ">
            <h2 style="text-align:center; ">PAYMENT OPTION</h2>
            <span class="close" id="close-individual" @click="close()">&times;</span>
          </div>

          <div class="modal-body-individual" v-for="item in coursedetails" v-if="item.id === formdetails.courseID">

            <div class="modal-caption ">
              <span>Want to pay?</span>
            </div>

            <br>



            <div class="done ">
              <button type="button " class="btn-done course-data " @click="showrazor"><span id="done"><strong>NOW</strong></span></button>
            </div>
            <div class="done ">
              <button type="button " class="btn-done course-data " @click="thanks"><span id="done"><strong>In Classroom</strong></span></button>
            </div>
            <br>
          </div>
        </div>
      </div>
      </transition>

<transition name="fade">
      <!--Individual Courses Modal -->
      <div id="myModal-individual" class="modal modal-individual" v-show="thanksshow">
        <div class="modal-content-individual" >

          <div class="popup-header-individual ">
            <h2 style="text-align:center; ">PAYMENT OPTION</h2>
            <span class="close" id="close-individual" @click="close()">&times;</span>
          </div>

          <div class="modal-body-individual" v-for="item in coursedetails" v-if="item.id === formdetails.courseID">

            <div class="modal-caption ">
              <span>Thank you for registering!</span>
            </div>

            <br>
          </div>
        </div>
      </div>
      </transition>


      <transition name="fade">
      <!--Individual Courses Modal -->
      <div id="myModal-individual" class="modal modal-individual" v-show=individual_modal>
        <div class="modal-content-individual" >

          <div class="popup-header-individual ">
            <h2 style="text-align:center; ">COURSE DETAILS</h2>
            <span class="close" id="close-individual" @click="close()">&times;</span>
          </div>

          <div class="modal-body-individual" v-for="item in coursedetails" v-if="item.id === formdetails.courseID">

            <div class="modal-caption ">
              <span>{{item.name}}</span>
            </div>
            <div class="modal-age-location ">
              <span id="modal-age-location ">{{Age}}Yrs,{{Location}}</span>
            </div>
            <br>
            <div class="input input--akira akira-name ">
              <input class="input__field input__field--akira " type="text " v-model="bundleform.studentname" id="input-22 " />
              <label class="input__label input__label--akira " for="input-22 ">
                <span class="input__label-content input__label-content--akira ">NAME OF THE STUDENT</span>
              </label>
            </div>
            <br>
            <div class="input input--akira akira-school ">
              <input class="input__field input__field--akira " type="text " v-model="bundleform.school" id="input-22-school " />
              <label class="input__label input__label--akira " for="input-22-school ">
                <span class="input__label-content input__label-content--akira ">SCHOOL</span>
              </label>
            </div>


            <div class="batch-timing ">
              <span style="color:#ffc000;"><h5 style="margin-left:0;">SELECT BATCH</h5><h5 style="margin-left:30%">SELECT TIMING</h5></span>
              <span>
                <select class="form-control" id="batches2" v-model="batch" v-on:change="create_individual()">
                  <option style="display:none;" value="">BATCH</option>
                  <option v-for=" date in item.batches" v-bind:value="date.batchID" >{{date.startDate}} - {{date.endDate}}</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select class="form-control" id="timing" v-model="timing" >
                  <option style="display:none;" value="">TIMING</option>
                  <option v-for="date in timinglist" >{{date.startTime}}-{{date.endTime}}</option>
                </select>
              </span>
            </div>
            <br>
            <div class="done ">
              <button type="button " class="btn-done course-data " @click="individual_submit"><span id="done"><strong>DONE</strong></span></button>
            </div>
            <br>
          </div>
        </div>
      </div>
      </transition>
      <!--Individual Courses Modal-->
      </div>

    </div>

</template>

<script>
  import Spinner from 'vue-simple-spinner'
    export default {
        name: "payment",
      components: {
        Spinner
      },
      data(){
          return {
              videos:['https://www.youtube.com/embed/Y_ygt_1Ttyg?rel=0','https://www.youtube.com/embed/-G8kC4D06gE?rel=0',
                  'https://www.youtube.com/embed/uDr0DdPRni0?rel=0'],
              videolink:'',
            spin:false,
            amount:0,
            payment_id:"",
            options:{
              "key": "rzp_live_jeEnRTH6fOdCOK",
              "amount": "",
              "name": "Warhorse",
              "description": "",
              "image": '',
              "handler": (response) => {
               // console.log(response);
                this.payment_id = response.razorpay_payment_id;
              //  console.log("HANDLER : "+this.payment_id);
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
              id:'',
              bundledetails:'',
              coursedetails:'',
              modalshow:false,
              individual_modal:false,
            formdetails : {
              "name": '',
              "email": '',
              "mobile": '',
              "bundleID":'',
              "courseID": "",
              "isBundle":false,
              "batchDetails":[],
              "isPaid": false
            },
            couponkey:'',
            coupondiscount:'',
            imojolink:'',
            check:'',
            thanksshow: false,
            activeParentIndex:'',
            Age: "",
            Location: "",
            dpopshow: false,
            bundlecourse:"",
            index:0,
            batch:"",
            timing:"",
            test:[],
            userdetails:false,
            timinglist:[],
            bundleform:{
                studentname:"",
                school:"",
                batchID:[]
            },
            dummy:{},
            couponCode: [],
            couponID:""
          }
      },
      computed:{
          bundleid(){
            return this.$route.params.id;
          },
          ageLocation() {
            return 1;
          }

      },
      methods: {
        razor:function (amount) {

          this.options.amount = Math.round(this.amount + this.amount * 0.0225);
        //  this.options.amount = 60100;
          //console.log("coupon id : ",this.couponID);
          this.options.amount = this.options.amount - amount*100;
         // console.log("amount after change : ",this.options.amount);
          let rzp1 = new Razorpay(this.options);
          rzp1.open();
         // e.preventDefault();
        },
        checkcapture:function () {
          this.$http.post(`https://api.warhorse.in/razorpay/check`,{
            "amount":this.options.amount,
            "id":this.payment_id,
             "couponID":this.couponID
          }).then(response=> {
            if(response.body.captured){
              this.formdetails.isPaid = true;
              this.$http.post(`https://api.warhorse.in/batch/select`,this.formdetails).then(function(data){
              //  console.log(data);
                this.close();
                alert("PAYMENT HAS BEEN COMPLETED SUCCESSFULLY!");
              });
            }
            else{
              alert("OOPS!ERROR IN PAYMENT");
            }
          });
        },
        bundleclick: function (data,name,price) {
          this.amount = price*100;
          let tax = "*inclusive of all taxes";
          this.options.description = name +"\n"+tax;
          let img = 'https://www.seoclerk.com/pics/558390-11FO8A1505384509.png';
          this.options.image = img;
          this.modalshow = true;
       //    console.log("clicked bundle", data);
          this.imojolink = data;
          this.formdetails.bundleID = this.bundleid;
         // this.addToCart(this.bundleid);
        },
        change : function () {
          this.spin=true;
          setTimeout(this.changecourse, 1200);
        },
    changecourse: function () {
        this.spin=false;
      if (this.bundleform.studentname === "" || this.bundleform.school === "" || this.batch === "" ||this.timing ==="") {
            alert("Enter all the details");
          }
          else {

            this.index++;
         //   console.log("change course", this.index, "batch id", this.batch);
            this.bundleform.batchID.push(this.batch);
            this.batch="";
          //  console.log("bundleform after : ", this.index, "bundleform", this.bundleform);

            if (this.index < this.coursedetails.length) {
        //      console.log("next", this.index);
              this.bundlecourse = this.coursedetails[this.index];
          //    console.log(this.bundlecourse, "index :", this.index);
           //   console.log("index less than course.length", this.bundleform);
            }
            else {
              this.index = 2;
          //    console.log(this.bundleform);

              // alert("done donee..!");
              this.bundleform.batchID = this.bundleform.batchID.map(x => {
                return ({
                  "batchID": x,
                  "studentName": this.bundleform.studentname,
                  "schoolName": this.bundleform.school
                });
              });
              this.formdetails.batchDetails = this.bundleform.batchID;
              this.formdetails.isBundle = true;
            //  console.log("Final FORM", this.formdetails);
              this.modalshow = false;
              this.userdetails = true;
            }
          }
        },
        backcourse:function(){
          this.index--;
          if (this.index >= 0) {
          //  console.log("prev",this.index);
            this.bundlecourse = this.coursedetails[this.index];
          //  console.log(this.bundlecourse, "index :", this.index);
            this.bundleform.batchID.push(this.batch);
          //  console.log("prev enter",this.bundleform);
          }
          else {
            this.index = 0;
          //  console.log("sda",this.bundlecourse);
           // console.log("BUNDLE FORM",this.bundleform);
          }

        },
        individualclick: function (link, id,price,name,image) {
          this.amount = price*100;
          let tax = "*inclusive of all taxes";
          this.options.description = name +"\n"+ tax;
          let img = 'https://'+image;
          this.options.image = img;
          this.formdetails.courseID = id;
          this.formdetails.bundleID = this.bundleid;
          //console.log(link);
         // console.log(id);
          this.imojolink = link;
          this.individual_modal = true;
        },
        close: function () {
          this.userdetails = false;
          this.modalshow=false;
          this.individual_modal=false;
          this.bundleform.studentname = "";
          this.bundleform.school ="";
          this.bundleform.batchID = [];
          this.formdetails.name="";
          this.formdetails.mobile="";
          this.formdetails.email = "";
          this.formdetails.batchDetails = [];
          this.index=0;
          this.bundlecourse = this.coursedetails[this.index];
          this.dpopshow = false;
          this.thanksshow= false;
         // console.log("closed");
        },
        showrazor: function(){
          this.razor(this.coupondiscount);
        },
        thanks: function(){
          this.formdetails.isPaid = false;
           this.$http.post(`https://api.warhorse.in/batch/select`,this.formdetails).then(function(data){
              console.log(data);
           });
            this.dpopshow=false;
          this.thanksshow= true;
        },
        formsubmit: function () {
          if (this.formdetails.name === "" || this.formdetails.email === "" || this.formdetails.mobile === "") {
            alert("Enter all the details");
          }
          else {
        //   console.log("Form :", this.formdetails);
           /*  this.$http.post(`https://api.warhorse.in/batch/select`,this.formdetails).then(function(data){
                        console.log(data);
            });
             */
             for(let k in this.couponCode){
               if(this.couponkey === this.couponCode[k].couponkey){
                  this.coupondiscount = this.couponCode[k].amount;
                  this.couponID = this.couponCode[k].id;
                  break;
               }
             }
             if(this.coupondiscount === "")
                alert("Invalid coupon code");
              // console.log(this.coupondiscount);
              // console.log("amount");
               //this.razor(this.coupondiscount);
              this.userdetails = false;
              this.dpopshow = true;

          // window.location.href = this.imojolink;

          }
        },
        individual_submit: function () {
          if (this.bundleform.studentname === "" || this.bundleform.school === ""|| this.batch === "" ||this.timing ==="") {
            alert("Enter the details");
          }
          else {
            this.test = this.test.map(x => {
              return ({"batchID": x, "studentName": this.bundleform.studentname, "schoolName": this.bundleform.school});
            });
            this.formdetails.batchDetails = this.test;
            this.formdetails.isBundle = false;
           // console.log("Final FORM", this.formdetails);
            this.individual_modal = false;
            this.userdetails = true;
          }
        },

        dropme: function (index) {
          this.activeParentIndex = index;
          if (this.check)
            this.check = false;
          else
            this.check = true;
          $(".dd").toggleClass("glyphicon-chevron-down");
          $(".dd").toggleClass("glyphicon-chevron-up");

        },
        isShowing: function (index) {
          return this.activeParentIndex === index;
        },
        create: function () {
          this.check = batches.selectedIndex - 1;
        //  console.log("check", this.check);
          this.test = this.bundlecourse.batches[this.check].batchID;
        //  console.log("TEST",this.test);
          this.timinglist=[];
          for ( let k in this.bundlecourse.batches) {
              if(this.bundlecourse.batches[k].batchID === this.test)
                this.timinglist.push(this.bundlecourse.batches[k]);
            }
      //    console.log("TIMING LIST",this.timinglist);
        },
        create_individual:function () {
          this.check = batches2.selectedIndex - 1;
       //   console.log("check", this.check);
          for ( let item in this.coursedetails) {
            if(this.coursedetails[item].id === this.formdetails.courseID) {
                this.test.push(this.coursedetails[item].batches[this.check].batchID);
                this.timinglist.push(this.coursedetails[item].batches[this.check]);
            }
          }
          console.log("TIMING  :",this.timinglist);

        }
      },
      created() {
        if (this.bundleid === '' || this.bundleid === undefined) {
          this.$router.push('/');
        }
        else {

          this.Age = this.ageLocation.age;
          this.Location = this.ageLocation.location;
          this.id = this.bundleid;
        //   console.log(this.bundleid);
          this.$http.post(`https://api.warhorse.in/bundleDetails`, {
            "bundleID": this.id
          }).then(function (data) {
           // console.log("data",data.body);
            this.couponCode = data.body.bundleData.couponCodeList;
           // console.log("coupon",this.couponCode);
            // this.couponCode.amount = data.body.bundleData.couponCodeList[0].amount;
            // this.couponCode.couponkey = data.body.bundleData.couponCodeList[0].couponkey;
            // this.couponCode.couponID = data.body.bundleData.couponCodeList[0].couponkey;
            this.bundledetails = data.body.bundleData;
            if(this.bundledetails.bundleName === 'Project Delta'){
                this.videolink = this.videos[0];
            }
            else if(this.bundledetails.bundleName === 'Project Express'){
                this.videolink = this.videos[1];
            }
            else if(this.bundledetails.bundleName === 'Project Ideate'){
                this.videolink = this.videos[2];
            }

            this.coursedetails = data.body.payload;
            this.bundlecourse = this.coursedetails[this.index];
          })
        }
      }
    /*  beforeMount(){
        if(this.bundleid === '' || this.bundleid === undefined){
          this.$router.push('/');
        }
      } */
    }
</script>

<style scoped>
  @import "../assets/css/payment.css";
  @import "../assets/css/modal.css";
  .fade-enter-active{
    transition: opacity 1.0s;
  }
  .fade-leave-active{
    transition: opacity .9s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
