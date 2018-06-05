<template>
    <div class="Main_content">

        <div class="main_content-container">

            <div class="main">

                <div class="article-heading">
                    <h2><strong>{{heading}}</strong></h2>
                    <hr>
                </div>

                <div class="article-item" v-for="item in articles">
                    <router-link v-bind:to="'/article/'+item.slug">
                    <div class="row">
                        <div class="col-md-4 heading">

                            <h3>
                                    {{item.title}}
                            </h3>

                        </div>
                        <div class="col-md-4 content">

                            <p>
                                {{item.preview}}
                            </p>

                        </div>
                        <div class="col-md-4 image">
                            <img v-bind:src="'https://api.guindytimes.com/'+item.image" alt="">
                        </div>
                    </div>
                    </router-link>

                    <hr>

                </div>

                <div class="load-more">
                    <button class="btn" @click="load_more();">Load More</button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "main_content",
        data(){
            return{
                count:5,
                heading:"",
                articles:""
            }
        },
        created(){
            this.$http.get(`https://api.guindytimes.com/latestarticles?count=`+this.count).then(function(data){
                console.log(data.body);
                this.heading=data.body.message;
                this.articles = data.body.data;
            }).catch(e => {
                console.log(e);
            });
        },
        methods:{
            load_more:function () {

                this.count=this.count+5;
                this.$http.get(`https://api.guindytimes.com/latestarticles?count=`+this.count).then(function(data){
                    console.log(data.body);
                    this.heading=data.body.message;
                    this.articles = data.body.data;
                }).catch(e => {
                    console.log(e);
                });

            }
        }
    }
</script>

<style scoped>

    @import '../assets/css/main_content.css';

</style>