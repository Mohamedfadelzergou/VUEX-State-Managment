<template>
  <h1>{{name}}</h1>
  <p>{{counter}}</p>
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
        ...mapGetters('counter',{'name':'getName','counter':'getCounterMormalise'})
    },
    methods:{
        // increment(){
        //     this.$store.dispatch('increment',{data:5});
        // }
        ...mapActions('counter',{'increment':'increment'})
    }
}
</script>

<style>

</style>