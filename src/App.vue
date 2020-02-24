<template>
  <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <Navbar/>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    components:{
      Navbar
    }
  };
</script>
