<template>
    <div class="Main_content">

        <div class="main_content-container">

            <div class="main">

                <div class="article-heading">
                    <h2><strong>{{heading}}</strong></h2>
                    <hr>
                </div>

                <div class="article-item" v-for="item in articles">
                    <a v-bind:href="'/articles/'+item.slug">
                    <div class="row">
                        <div class="col-md-4 heading">
                            <h3>
                                {{item.title}}
                            </h3>
                            <div class="authors">
                                <ul>
                                    <li> {{item.updated_at}}</li>
                                    <li v-for="items in item.author_list" v-if="type==='one' || type==='four'"><strong>{{items}}</strong></li>
                                    <li v-if="type==='two'|| type ==='three' "><strong>{{item.author_list}}</strong></li>
                                </ul>
                            </div>

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
                    </a>

                    <hr>

                </div>

                <div class="load-more" v-if="articles.length > 4">
                    <button class="btn" @click="load_more();">Load More</button>
                </div>

            </div>

        </div>
        <br><br><br>
        <foot></foot>

    </div>
</template>

<script>
    import foot from './foot';
    export default {
        name: "main_content",
        components:{
            foot:foot
        },
        data(){
            return{
                count:5,
                category:this.$route.params.category,
                author:this.$route.params.author,
                tag:this.$route.params.tag,
                heading:"",
                articles:"",
                authorlist:[],
                type:""
            }
        },
        created(){

            if (this.category !== null && this.category  !== undefined && this.category !== ""){
                this.$http.get(`https://api.guindytimes.com/categoryarticles?category=` + this.category + `&count=` + this.count).then(function (data) {
                    console.log(data);
                    this.heading = data.body.message;
                    this.articles = data.body.data;
                    this.type = "one";
                }).catch(e => {
                    console.log(e);
                });
            }

            else if(this.author !== null && this.author !== undefined && this.author !== "") {

                this.$http.get(`https://api.guindytimes.com/author?name=` + this.author).then(function (data) {
                    console.log(data);
                    this.heading = data.body.message;
                    this.articles = data.body.data;
                    this.type = "two";
                }).catch(e => {
                    console.log(e);
                });

            }
            else if(this.tag !== null && this.tag !== undefined && this.tag !== "") {

                this.$http.get(`https://api.guindytimes.com/tags?tag=` + this.tag + `&acount=` + this.count).then(function (data) {
                    console.log(data);
                    this.heading = data.body.message;
                    this.articles = data.body.data;
                    this.type = "three";
                }).catch(e => {
                    console.log(e);
                });

            }
            else {
                this.$http.get(`https://api.guindytimes.com/latestarticles?count=` + this.count).then(function (data) {
                    console.log(data.body);
                    this.heading = data.body.message;
                    this.articles = data.body.data;
                    this.type = "four";
                }).catch(e => {
                    console.log(e);
                });
            }
        },
        methods:{
            load_more:function () {

                this.count=this.count+5;
                if (this.type==="one"){

                    this.$http.get(`https://api.guindytimes.com/categoryarticles?category=` + this.category + `&count=` + this.count).then(function (data) {
                        console.log(data);
                        this.heading = data.body.message;
                        this.articles = data.body.data;
                    }).catch(e => {
                        console.log(e);
                    });

                }
                else if (this.type === "two"){
                    this.$http.get(`https://api.guindytimes.com/author?name=` + this.author).then(function (data) {
                        console.log(data);
                        this.heading = data.body.message;
                        this.articles = data.body.data;
                    }).catch(e => {
                        console.log(e);
                    });
                }
                else if (this.type==="three"){

                    this.$http.get(`https://api.guindytimes.com/tags?tag=` + this.tag + `&acount=` + this.count).then(function (data) {
                        console.log(data);
                        this.heading = data.body.message;
                        this.articles = data.body.data;
                    }).catch(e => {
                        console.log(e);
                    });

                }

                else if (this.type === "four"){
                    this.$http.get(`https://api.guindytimes.com/latestarticles?count=` + this.count).then(function (data) {
                        console.log(data.body);
                        this.heading = data.body.message;
                        this.articles = data.body.data;
                    }).catch(e => {
                        console.log(e);
                    });
                }

            }
        }
    }
</script>

<style scoped>

    @import '../assets/css/main_content.css';

</style>