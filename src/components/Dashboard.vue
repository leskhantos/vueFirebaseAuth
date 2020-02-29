<template>
    <div class="container"  v-if="user">
        <div class="row justify-content-center">
            <div class="col-md-8" v-if="posts.length">
                <div class="card"   v-for="post in posts" :key="post.id" :style="{borderBottom: '3px solid rgba(0,0,0,.1)', marginBottom:'2rem'}">
                    <div class="card-header">{{post.title}}</div>
                    <div class="card-body">
                        <p class="card-text">{{post.text}}</p>
                    </div>
                    <div class="card-footer text-muted">
                        {{dateFormat(post.createdAt)}}
                    </div>
                </div>
            </div>
            <div class="card" v-else>
                <div class="card-header">
                    Нет записи
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Прошу создайте запись</p>
                        <footer class="blockquote-footer"> <cite title="Source Title">p.s. Спасибо</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import firebase from 'firebase'
    export default {
        computed: {
            ...mapGetters({
                user: "user"
            }),
        },
        data(){
            return{
                posts:[]
            }
        },
        methods:{
            getData(){
                const snapshot = firebase.firestore().collection('posts')
                let arr=[];
                snapshot.get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            arr.push(doc.data())
                            console.log(doc.id, '=>', doc.data());
                        });
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
                this.posts = arr
            },
            dateFormat(time){
                time = new Date()
                return time.toLocaleString()
            }
        },
        mounted() {
            this.getData()
        }
    };
</script>