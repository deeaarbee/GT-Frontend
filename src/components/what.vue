<template>
    <div class="whats">
        <div class="what-container shadows-box">
            <div id="what-heading">
                <h2 style="display: inline; box-sizing: border-box; border-style: solid;"><strong>THE WHAT</strong></h2>
            </div>
            <div class="what-content">
                <div id="slickimg">
                    <slick ref="slick" :options="slickOptions">
                        <div class="test what-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhat/Sem1Sci.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong> Semester I </strong></h3>
                                <p>
                                    24 week semester designed to build 21st century skills of communication,
                                    collaboration, creativity and critical thinking through an immersive curriculum
                                    based on problem solving in the fields of Science and Humanities.
                                </p>
                            </div>
                        </div>
                        <div class="test what-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhat/Sem2.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong> Semester II </strong></h3>
                                <p>
                                    10 week semester designed to broaden horizons and encouraging cross disciplinary
                                    learning through a host electives students can choose from.
                                </p>
                            </div>
                        </div>
                        <div class="test what-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhat/Engagement.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Exposure and Engagement</strong></h3>
                                <p>
                                    Year peppered with open Mics, Guest lectures and competitions to ensure
                                    constant engagement, exposure and a platform for our students to practise and hone their skills.
                                </p>
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
        components:{Slick},
        data(){
            return{
                slickOptions: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true,
                    infinite:true,
                    autoplay: false,
                    button: true,
                    prevArrow: '<div class="class-to-what" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
                    nextArrow: '<div class="class-to-what" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
                }
            }
        },
        methods:{
        },
        created(){
        }
    }
</script>

<style scoped>
    @import '../../node_modules/slick-carousel/slick/slick.css';
    @import '../assets/css/what.css';
</style>
