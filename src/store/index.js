import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    lessons:[
      {
        id:1,
        subject:'Math',
      location:'London',
      price:200,
      spaces:5,

    
      }, 
      {
        id:2,
        subject:'English',
      location:'Lagos',
      price:300,
      spaces:5,

      
      },
       {
         id:3,
        subject:'Physics',
      location:'Abuja',
      price:200,
      spaces:5,

    
      },
       {
         id:4,
        subject:'Chemistry',
      location:'Benin',
      price:190,
      spaces:5,

      
      },
       {
         id:5,
        subject:'Biology',
      location:'Zaria',
      price:150,
      spaces:5,

      },
       {
         id:6,
        subject:'Art',
      location:'New York',
      price:120,
      spaces:5,
      },
       {
         id:7,
        subject:'Agriculture',
      location:'Osun',
      price:100,
      spaces:5,
      },
       {
         id:8,
        subject:'Economics',
      location:'London',
      price:100,
      spaces:5,
      },
       {
         id:9,
        subject:'History',
      location:'Ogun',
      price:90,
      spaces:5,
      },
       {
         id:10,
        subject:'Computing',
      location:'Lagos',
      price:100,
      spaces:5,
      
      },
      
    ],
    order:'ascending',
    options:['subject', 'location', 'price', 'spaces'],
    selected:'subject',
    cart:[],
  
  },
  mutations: {
    increment(state, count){
      state.count += count
    },
    handleOrder(state){
    
      if(state.order==='ascending'){
          state.lessons.sort((a,b)=>(a[state.selected] > b[state.selected]) ? 1 : -1)
      }else if(state.order==='descending'){
          state.lessons.sort((a,b)=>(b[state.selected] > a[state.selected]) ? 1 : -1)
      }
    },
    ascendOrder(state){
     state.order='ascending'
   },
     descendOrder(state){
     state.order='descending'
   },
   handleCriteriaChange(state, criteria){
     state.selected=criteria;
   } ,

   decrementSpaces(state, id){
  
    const tempLessons = [...state.lessons]
    const selectedLesson = tempLessons.find(lesson=>lesson.id===id)
    const index = tempLessons.indexOf(selectedLesson)
    
    const lesson = tempLessons[index]
    
    if(lesson.spaces > 0){
     lesson.spaces = lesson.spaces-1
      state.lessons=tempLessons
 
    }else{
      return null
    }
  },
  addToCart(state, id){
      const tempLessons = [...state.lessons]
      const selectedLesson = tempLessons.find(lesson=>lesson.id===id)
      const index = tempLessons.indexOf(selectedLesson)

      const lesson = tempLessons[index]

      state.lessons = tempLessons
      state.cart = [...state.cart, lesson]
  },
  removeFromCart(state, {id, cartIndex}){
    let tempCart = [...state.cart]
    tempCart = tempCart.filter((item, index)=>index !== cartIndex)

    const tempLessons = [...state.lessons]
    const selectedLesson = tempLessons.find(lesson=>lesson.id===id)
    const index = tempLessons.indexOf(selectedLesson)

    const lesson = tempLessons[index]
    lesson.spaces = lesson.spaces + 1

    state.cart = tempCart
    state.lessons = tempLessons

  }




  },

  actions: {
  },
  modules: {
  }
})
