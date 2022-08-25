<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button @Click="gotoDatbook" class="btn btn-primary">Primary</button>
    <button @Click="gotoDatbook" class="btn btn-secondary">Secondary</button>
    <button @Click="gotoDatbook" class="btn btn-success">Success</button>
  </div>
</template>
<script>
export default {
  methods:{
    gotoDatbook(){
      console.log("a")
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

