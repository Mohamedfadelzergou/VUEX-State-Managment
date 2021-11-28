<template>
  <h1>{{getName}}</h1>
  <p>{{getCounterMormalise}}</p>
  <button @click="increment({data:10})">incriment</button>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    computed:{
        // counter(){
        //     return this.$store.getters.getCounterMormalise;
        // },
        // name(){
        //     return this.$store.getters.getName;
        // }
        ...mapGetters(['getName','getCounterMormalise'])
    },
    methods:{
        // increment(){
        //     this.$store.dispatch('increment',{data:5});
        // }
        ...mapActions(['increment'])
    }
}
</script>

<style>

</style>