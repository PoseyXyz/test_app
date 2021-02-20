<template>
    <div id="cart">
   <div>
           <div v-for="(lesson, index) in $store.state.cart" v-bind:key="index">
            <cart-item v-bind:lesson="lesson" v-bind:index="index"></cart-item>
          </div>
       
       <div>
                <form @submit="confirmSubmission">
                    <input v-model="name" type="text" name=""  id="" required>
                    <input v-model="phone" type="number" required>
                    <button>Checkout</button>
                </form>
                
            </div>
   </div>
  
        <router-link to="/">Go</router-link>
    </div>

</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
    name:'Cart',
    components:{
        CartItem
    },
    data(){
        return{
            name:'',
            phone:'',
        }
    },

    methods:{
        confirmSubmission:function(){
            let checkoutMessage = 'Your order has been submitted ' + this.name
            alert(checkoutMessage)
            this.name = ''
            this.phone = ''
        }
    }

}
</script>

<style scoped>

</style>