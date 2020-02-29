<template>
    <form action="#" @submit.prevent="createPost">
        <div  class="alert alert-success" role="alert" v-show="success">
            Добавлено
        </div>
        <div class="form-group row">
            <label for="title" class="col-md-4 col-form-label text-md-right">Тема</label>
            <div class="col-md-6">
                <input
                        id="title"
                        type="text"
                        class="form-control"
                        name="title"
                        value
                        required
                        autofocus
                        v-model="form.title"

                />
            </div>
        </div>

        <div class="form-group row">
            <label for="text" class="col-md-4 col-form-label text-md-right">Текст</label>

            <div class="col-md-6">
                <textarea
                        id="text"
                        class="form-control"
                        name="textarea"
                        required
                        v-model="form.text"
                />
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary">Опубликовать</button>
            </div>
        </div>
    </form>


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
                form:{
                    title:'',
                    text:''
                },
                success:false
            }
        },
        methods:{
            createPost(){
                const postCol = firebase.firestore().collection('posts')
                postCol.add({
                    createdAt: new Date(),
                    title: this.form.title,
                    text:this.form.text
                }).then(()=>{
                    this.form.title= '',
                    this.form.text= ''
                    this.success = true
                    this.$router.push('posts')
                }).catch(()=>{
                    console.log('err')
                })
            }
        }
    };
</script>

<style scoped>
    #text {
        height: 10rem;
    }
</style>