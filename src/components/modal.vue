<template>
<div>
  <transition name="fade">
      <div id="myModal" class="modal" v-show="initialpop">
        <div class="modal-content ">
          <div class="popup-header ">
            <h2 style="text-align:center; display: inline">Enter Details</h2>
            <span class="close-- " id="close" @click="close()">&times;</span>
          </div>
            <div class="modal-desc">
                <span>
                    Allow us to help you through this process. Drop your details and we'll have someone from the team contact you with a plan within the next 12 hours.
                </span>
                </div>
          <div class="modal-body signup-body ">
            <br>

            <div class="input input--akira akira-name " id="email ">
              <input v-model="formdetails.parent_name" name="email" class="input__field input__field--akira "  type="text " id="input-7-3 " ng-required="true" required/>
              <label class="input__label input__label--akira " for="input-7-3 ">
                <span class="input__label-content input__label-content--akira ">Your Name</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="password ">
              <input  v-model="formdetails.child_name" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
              <label class="input__label input__label--akira " for="input-7-2 ">
                <span class="input__label-content input__label-content--akira ">Child's Name</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="phone ">
              <input  v-model="formdetails.age" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
              <label class="input__label input__label--akira " for="input-7-4 ">
                <span class="input__label-content input__label-content--akira " >Age</span>
              </label>
            </div>

            <div class="input input--akira akira-name " id="phone ">
              <input  v-model="formdetails.phone" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
              <label class="input__label input__label--akira " for="input-7-4 ">
                <span class="input__label-content input__label-content--akira " >Phone Number</span>
              </label>
            </div>

             <div class="input input--akira akira-name " id="phone">
              <input  v-model="formdetails.email" name="phone" class="input__field input__field--akira " type="email" id="input-7-4 " ng-required="true" required="required"/>
              <label class="input__label input__label--akira " for="input-7-4 ">
                <span class="input__label-content input__label-content--akira " >Email-ID</span>
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
</div>
</template>
<script>
export default {
    data(){
        return{
            initialpop: false,
             formdetails: {
             "child_name": "",
             "parent_name": "",
             "phone": "",
             "email": "",
             "age": ""
           }
        }
    },
    methods: {
        close: function(){
            this.initialpop = false;
        },
        formsubmit: function(){
            if(this.formdetails.child_name === "" || this.formdetails.parent_name === "" || this.formdetails.age==="" || this.formdetails.email==="" || this.formdetails.phone===""){
              alert("Please fill in the correct details");
            }
            else{
                this.$http.get(`https://api.myjson.com/bins/leplq`).then(function(data){
                    console.log(data);
                    let dummy = data.body;
                    dummy.push(this.formdetails);
                    this.$http.put(`https://api.myjson.com/bins/leplq`,dummy).then(function(data){
                        console.log(data);
                    });
                });
            this.close();
            alert("Thank you for your response");
            }
        }
     },
    created(){
        var self = this;
         setTimeout(function(){
                self.initialpop = true;
            }, 4000);
    }

}
</script>
<style>
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
</style>
