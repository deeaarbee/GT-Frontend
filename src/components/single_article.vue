<template>
    <div class="Single_Article">

        <sidebar></sidebar>
        <div class="single_article-container">

            <div class="single-article" >

                <div class="article-heading">
                    <h2><strong>{{heading}}</strong></h2>
                    <hr>
                </div>

                <div class="article-item">
                    <div class="heading">
                        <h1>
                            {{articles.title}}
                        </h1>
                    </div>
                    <div class="authors">
                        <ul>
                            <a v-bind:href="'/category/'+articles.genre"><li>{{articles.genre}}</li></a>
                            <li v-for="item in articles.author_list"><a v-bind:href="'/author/'+item">{{item}}</a></li>
                           <li> {{articles.updated_at}}</li>
                        </ul>
                    </div>

                    <div class="image">
                        <img v-bind:src="'https://api.guindytimes.com/'+articles.image" alt="">
                    </div>
                    <div class="content">

                        <div v-html=articles.content class="article-content"></div>

                    </div>
                    <div class="tags">
                       <div class="tagged">
                        <p><strong>Tagged in :</strong></p>
                        <ul class="tag-list">
                            <li v-for="item in articles.tags"><a v-bind:href="'/tag/'+item">{{item}}</a></li>
                        </ul>
                       </div>

                        <div class="share">
                            <div class="tweet">
                                <a href="#"><p>Tweet</p></a>
                            </div>
                            <div class="fb">
                                <a href="#"><p>fb</p></a>
                            </div>
                        </div>

                    </div>

                    <hr>
                </div>

                <div class="related-articles">
                    <div class="article-heading">
                        <h2><strong>Similar Articles</strong></h2>
                        <hr>
                    </div>

                    <div class="article-item" v-for="item in similar">
                        <a v-bind:href="'/articles/'+item.slug">
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
                        </a>

                        <hr>

                    </div>


                    <!--<div class="related">-->

                        <!--<div class="article-heading">-->
                            <!--<h2><strong>Similar Articles</strong></h2>-->
                            <!--<hr>-->
                        <!--</div>-->

                        <!--<div class="row">-->
                            <!--<div class="col-md-6" v-for="item in this.similar">-->

                               <!--<a v-bind:href="'/article/'+item.slug">-->
                                <!--<div class="similar-image">-->
                                <!--<img v-bind:src="'https://api.guindytimes.com/'+item.image" alt="">-->
                                    <!--<div class="overlay">-->
                                        <!--<div class="text">Read me...</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div class="authors">-->
                                  <!--<h4>{{item.title}}</h4>-->
                                <!--</div>-->
                               <!--</a>-->

                            <!--</div>-->

                        <!--</div>-->

                    <!--</div>-->

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import sidebar from './sidebar';
    export default {
        name: "single_article",
        components:{
            sidebar:sidebar
        },
        data(){
            return{
                count:5,
                heading:"",
                articles:"",
                similar:"",
                slug:this.$route.params.slug,
                genre:this.$route.params.genre,
                scount:4
            }
        },
        created(){
            console.log(this.genre);
            this.$http.get(`https://api.guindytimes.com/singlearticle?slug=`+this.slug+`&scount=`+this.scount).then(function(data){
                console.log(data.body);
                this.heading=data.body.message;
                this.articles = data.body.data.article;
                this.similar = data.body.data.similar_articles;
                console.log("this.similar",this.similar);
            }).catch(e => {
                console.log(e);
            });
        },
        updated(){

        },
        methods:{
            load_more:function () {

                // this.count=this.count+5;
                // this.$http.get(`https://api.guindytimes.com/latestarticles?count=`+this.count).then(function(data){
                //     console.log(data.body);
                //     this.heading=data.body.message;
                //     this.articles = data.body.data;
                // }).catch(e => {
                //     console.log(e);
                // });

            }
        }
    }
</script>

<style scoped>

    @import '../assets/css/single_article.css';

</style>