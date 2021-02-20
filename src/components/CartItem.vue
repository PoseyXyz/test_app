<template>
<div class="lesson">
        <p>Subject: {{lesson.subject}}</p>
    <p>Location: {{lesson.location}}</p>
    <p>Price: ${{lesson.price}}</p>
    <p>Subject: {{lesson.subject}}</p>
    <p>Spaces: {{lesson.spaces}}</p>
    <button v-on:click="removeFromCart(lesson.id, index)">Remove Item</button>
   
</div>
</template>

<script>
export default {
    name:'CartItem',
    props:["lesson", "index"],
    methods:{
        removeFromCart:function(id, cartIndex){
            this.$store.commit('removeFromCart', {id, cartIndex})
              this.$store.commit('handleOrder')
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