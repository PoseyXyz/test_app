<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart" v-if="$store.state.cart.length">Cart</router-link>
    </div>
    <div class="lessons" v-for="lesson in $store.state.lessons" v-bind:key="lesson.id" >
     <single-lesson v-bind:lesson="lesson"/>
    </div>
    <div v-for="(option) in $store.state.options" v-bind:key="option">
      <button v-on:click="handleCriteriaChange(option)" v-bind:class="$store.state.selected === option ? 'selected': ''">{{option}}</button>
    </div>
    <button v-on:click="ascendOrder" v-bind:class="$store.state.order === 'ascending' ? 'selected': ''">Ascending</button>
    <button v-on:click="descendOrder" v-bind:class="$store.state.order === 'descending' ? 'selected': ''">Descending</button>

  </div>
</template>

<script>
import SingleLesson from '../components/SingleLesson.vue'
export default {
  name: 'Home',
  components: {
    SingleLesson,
    
     },
  data(){
    return{
       }
  },
  methods:{
   
   

    ascendOrder: function(){
      this.$store.commit('ascendOrder')
      this.$store.commit('handleOrder')
    },
     descendOrder: function(){
      this.$store.commit('descendOrder')
      this.$store.commit('handleOrder')
    },
     handleCriteriaChange: function(criteria){
      this.$store.commit('handleCriteriaChange', criteria)
      this.$store.commit('handleOrder')
    },
   
  
 }, created(){
   
   this.$store.commit('handleOrder')
 }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.selected{
  background-color:red
}
</style>
