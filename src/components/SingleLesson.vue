<template>
   <div class="lesson">
        <p>Subject: {{lesson.subject}}</p>
    <p>Location: {{lesson.location}}</p>
    <p>Price: ${{lesson.price}}</p>
    <p>Subject: {{lesson.subject}}</p>
    <p>Spaces: {{lesson.spaces}}</p>
    <button v-if="lesson.spaces>0" v-on:click="decrementSpaces(lesson.id); addToCart(lesson.id); ">Add to cart</button>
    
   </div>
    
</template>
<script>
export default {
    name:'SingleLesson',
    props:["lesson"],
    data(){
        return{
            
        }
    },
    methods:{
        decrementSpaces: function(id){    
      this.$store.commit('decrementSpaces', id)
      this.$store.commit('handleOrder')
    },
    addToCart:function(id){
       this.$store.commit('addToCart', id) 
    }
    }

}
</script>
<style scoped>
    .lesson{
        border: 1px solid black;
        margin: 1rem;
    }
</style>