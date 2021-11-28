<template>
  <h1>Vue js Vuex</h1>
  <p>{{$store.state.counter}}</p>
  <button @click="increment">incriment</button>
</template>

<script>
export default {
    methods:{
        increment(){
            this.$store.commit('increment',{data:1});
        }
    }
}
</script>

<style>

</style>