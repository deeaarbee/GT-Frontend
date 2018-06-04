<template>
    <div>
        <transition name="fade">
            <div id="myModal" class="modal form2" v-show="initialpop">
                <div class="modal-content form2-content">
                    <div class="popup-header ">
                        <h2 style="text-align:center; display: inline">Enter Details</h2>
                        <span class="close-- " id="close" @click="close()">&times;</span>
                    </div>
                    <div class="modal-desc form2-desc">
                <span>
                    THE WARHORSE ACADEMY 2018-19
                </span>
                    </div>
                    <div class="modal-body signup-body ">
                        <br>

                        <div class="input input--akira akira-name " id="name">
                            <input v-model="formdetails.parent_name" name="email" class="input__field input__field--akira "  type="text " id="input-7-3 " ng-required="true" required/>
                            <label class="input__label input__label--akira " for="input-7-3 ">
                                <span class="input__label-content input__label-content--akira ">Name</span>
                            </label>
                        </div>

                        <div class="input input--akira akira-name " id="age">
                            <input  v-model="formdetails.student_age" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
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
                            <input  v-model="formdetails.email_parent" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                            <label class="input__label input__label--akira " for="input-7-2 ">
                                <span class="input__label-content input__label-content--akira ">Email ID (Parent)</span>
                            </label>
                        </div>

                        <div class="input input--akira akira-name " id="email-student">
                            <input  v-model="formdetails.email_student" name="name" class="input__field input__field--akira " type="text " id="input-7-2 " ng-required="true" required/>
                            <label class="input__label input__label--akira " for="input-7-2 ">
                                <span class="input__label-content input__label-content--akira ">Email ID (Student)</span>
                            </label>
                        </div>

                        <div class="input input--akira akira-name " id="phone-parent">
                            <input  v-model="formdetails.parent_mobile" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
                            <label class="input__label input__label--akira " for="input-7-4 ">
                                <span class="input__label-content input__label-content--akira " >Phone Number(Parent)</span>
                            </label>
                        </div>

                        <div class="input input--akira akira-name " id="phone-student">
                            <input  v-model="formdetails.student_mobile" name="phone" class="input__field input__field--akira " type="number" id="input-7-4 " ng-required="true" required="required"/>
                            <label class="input__label input__label--akira " for="input-7-4 ">
                                <span class="input__label-content input__label-content--akira " >Phone Number(Student)</span>
                            </label>
                        </div>

                        <div class="batch-timing form2-batch-timing">
                            <span style="color:#ffc000;"><h5 style="margin-left:-1%;">SELECT BATCH</h5><h5 style="margin-left:40%">SELECT TIMING</h5></span>
                            <span class="form2-select">
                                <select class="form-control" id="batche     as2" v-model="batch">
                                    <option style="display:none;" value="">BATCH</option>
                                    <!--<option v-for=" date in item.batches" v-bind:value="date.batchID" >{{date.startDate}} - {{date.endDate}}</option>-->
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <select class="form-control" id="timing" v-model="timing" >
                                    <option style="display:none;" value="">TIMING</option>
                                    <!--<option v-for="date in timinglist" >{{date.startTime}}-{{date.endTime}}</option>-->
                                </select>
                            </span>
                        </div>

                        <!--<div class="input input&#45;&#45;akira akira-name" id="question">-->
                        <!--<textarea rows="4" cols="50" name="question" class="input__field input__field&#45;&#45;akira"  id="input-7-4 " required="required">-->
                        <!--</textarea>-->
                        <!--<label class="input__label input__label&#45;&#45;akira " for="input-7-4 ">-->
                        <!--<span class="input__label-content input__label-content&#45;&#45;akira " ></span>-->
                        <!--</label>-->
                        <!--</div>-->

                        <div class="question-title">
                            <span>To understand our students better, we would like them to answer the following question
                                (In under 150 words)..</span>
                        </div>
                        <div class="question">
                            <h4>If you’re the main character in a novel, how would your character be described ?</h4>
                        </div>

                        <div class="form2-textarea">
                            <textarea name="question" id="question" cols="70" rows="10"></textarea>
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
</template>
<script>
    export default {
        data(){
            return{
                initialpop: true,
                batch:"",
                timing:"",
                formdetails: {
                    "parent_name": "",
                    "student_age":"",
                    "school":"",
                    "address":"",
                    "parent_email":"",
                    "student_email":"",
                    "parent_mobile": "",
                    "student_email": ""
                }
            }
        },
        methods: {
            close: function(){
                this.initialpop = false;
            },
            formsubmit: function(){
                // if(this.formdetails.student_name === "" || this.formdetails.parent_name === "" || this.formdetails.student_age==="" || this.formdetails.parent_mobile===""){
                //     alert("Please fill in the correct details");
                // }
                // else{
                    // this.$http.post(`https://api.warhorse.in/postpopupreq`,this.formdetails).then(function(data){
                    //     console.log(data);
                    // });
                    console.log(this.formdetails);
                    this.close();
                    //alert("Thank you for your response");
                // }
            }
        },
        created(){
            var self = this;
            setTimeout(function(){
                self.initialpop = true;
            }, 1000);
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

    .form2{
        width:100%;
        height: 100%;
        margin-left:10%;
        margin-top: 0;
        overflow: scroll;
    }
    .form2-batch-timing{
        padding: 0 0 2% 0;
    }
    .form2-desc{
        padding: 1.5%;
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
    }
    .form2-textarea textarea:focus{
        outline: none;
    }

</style>
