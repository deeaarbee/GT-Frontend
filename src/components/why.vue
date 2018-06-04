<template>
    <div class="whys">
        <div class="why-container shadows-box">
            <div id="why-heading">
                <h2 style="display: inline; box-sizing: border-box; border-style: solid;"><strong>THE WHY</strong></h2>
            </div>
            <div class="why-content">
                <div id="slickimg">
                    <slick ref="slick" :options="slickOptions">
                        <div class="test why-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhy/WHY1.jpg" alt="">
                            </div>
                            <div class="col-md-5 text">
                               <p>
                                   The world has changed,<br>
                                   Yet education hasn't.
                               </p>
                                <p>
                                   Human innovation has transformed almost every facet of life, yet the way we prepare our children for life hasn’t been upgraded in over 100 YEARS.
                                </p>
                                <p>
                                   Education today is still running on an unengaging and unimaginative experience that
                                    leaves students bored and unfulfilled and more importantly,
                                    <strong>unprepared for the drastically different future to come.</strong>
                                </p>
                                <p>
                                   We’d like to change hat.
                                   Because we believe education is the way to make the world a better place.
                               </p>
                            </div>
                        </div>
                        <div class="test why-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhy/WHY2.jpg" alt="">
                            </div>
                            <div class="col-md-5 text2">
                                <h3><strong>What is the purpose of education ?</strong></h3>
                                <p>Do we go to school to build careers, make money, be succesful?
                                    The purpose of education is to build minds,
                                    well rounded individuals and good human beings -
                                    who can adapt to and thrive in any situation they are placed in.
                                    We believe the rest will follow.</p>
                            </div>
                        </div>
                        <div class="test why-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhy/WHY3.jpg" alt="">
                            </div>
                            <div class="col-md-5 text2">
                                <h3><strong>Is your child equipped for the jobs of tomorrow ?</strong></h3>
                                <p>We need a place that helps students build skills and traits for the future -
                                    learn how to learn, collaborate, creatively and critically think to
                                    problem solve in a real world context while building habits and
                                    traits that set them up for success in any future. </p>
                            </div>
                        </div>
                        <div class="test why-slick" >
                            <div class="col-md-7">
                                <img src="../assets/images/TheWhy/WHY4.jpg" alt="">
                            </div>
                            <div class="col-md-5 text">
                                <h3><strong>Don’t take our world for it ?</strong></h3>
                                <p>Recognised global agencies & companies from The World Economic Forum,UNESCO to Google point
                                    to the future belonging to those who are proficient at the skills of the future to
                                    thrive for a world filled with robots and AI.
                                </p>
                                <p>
                                    Google’s Project Aristole shows that the best and most successful teams of Google exhibit
                                    a range of soft skills: equality, generosity, curiosity towards the ideas of your teammates,
                                    empathy and emotional intelligence.
                                </p>
                                <p>
                                    Does your child’s school help them build these ?
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
                    prevArrow: '<div class="class-to-why" id="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
                    nextArrow: '<div class="class-to-why" id="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
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
    @import '../assets/css/why.css';
</style>
