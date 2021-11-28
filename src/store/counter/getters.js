export default{
    getName(state){
        return state.name.toUpperCase();
      },
      getCounter(state){
        return state.counter*2;
      },
      getCounterMormalise(state){
        const counter=state.counter*2;
        if(counter<0){
          state.counter=1;
        }if (counter>=100) {
          state.counter=1;
        }
          return counter;
    }
}