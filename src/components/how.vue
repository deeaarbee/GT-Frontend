<template>
    <div class="hows">
        <div class="how-container shadows-box">
            <div id="how-heading">
                <h2 style="display: inline; box-sizing: border-box; border-style: solid;"><strong>THE HOW</strong></h2>
            </div>
            <div class="how-content">
                <div id="slickimg">
                    <slick ref="slick" :options="slickOptions">
                        <div class="test how-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheHow/1HabitForming.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Life skills and Habit Building based curriculum</strong></h3>
                                <p>
                                    Apart from learning how communicate, collaborate, critically and creatively think,
                                    our curriculum helps build and foster good habits that will help forge character
                                    required for success in life.
                                </p>
                            </div>
                        </div>
                        <div class="test how-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheHow/2GrowthMindset.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong> Building a Growth Mindset and Learn how to learn based</strong></h3>
                                <p>
                                    The curriculum builds a mindset in our students based on the idea that all skills
                                    and traits from communication to intelligence are developed rather than god given.
                                </p>
                                <p>
                                    Apart from teaching them how to learn how to learn - helping them learn and develop
                                    skills and improve their academic performance.
                                </p>
                            </div>
                        </div>
                        <div class="test how-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheHow/3ExperientalLearning.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Experiential & Project based learning</strong></h3>
                                <p>
                                    It is pretty simple, the most effective way to learn is by doing.
                                </p>
                                <p>
                                    The modern world is overflowing with information and knowledge,
                                    what students require is a place to apply knowledge and learn through experience
                                    rather than theory and rote. We achieve this through activities, games,
                                    and project based learning and the application of a flipped classroom.
                                </p>
                            </div>
                        </div>
                        <div class="test how-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheHow/4GamifiedClassroom.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Gamified Story based Learning </strong></h3>
                                <p>
                                    Stories and games are the most effective ways to engage a child. An engaged child is a child that is learning.
                                </p>
                                <p>
                                    Which is why our classrooms are entirely Gamified complete with XP points, HP points and an immersive story line.
                                </p>
                            </div>
                        </div>
                        <div class="test how-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheHow/5Evaluations.png" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Comprehensive evaluations and progress tracking </strong></h3>
                                <p>
                                    True learning can only be achieved when progress is tracked. We do this so we can work on
                                    strengths and eliminate weaknesses. Which is why we have tied up with India’s largest Edtech company
                                    to track and evaluate our students progress over our courses through the years to better understand
                                    and engage with them. We are introducing personalized assignments so that each student learns at
                                    their own pace and level to ensure maximum growth.
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
                    prevArrow: '<div class="class-to-how" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
                    nextArrow: '<div class="class-to-how" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
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
    @import '../assets/css/how.css';
</style>
