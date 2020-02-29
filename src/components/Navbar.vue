<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link  v-if="user.loggedIn" to="/posts" class="navbar-brand">Leskhantos Blog</router-link>
            <router-link  v-else to="/" class="navbar-brand">Leskhantos Blog</router-link>
            <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav ml-auto">
                    <template v-if="user.loggedIn">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/create-post">Создать пост</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="signOut">Выйти</a>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Войти</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="register" class="nav-link">Регистрация</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    export default {
        computed: {
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: "index"
                        });
                    });
            }
        }
    };
</script>