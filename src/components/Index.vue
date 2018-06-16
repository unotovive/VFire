<template>
<div class="todos">
    <div v-for="todo of todos" :key="todo['.key']" @click="update">
        <card
        :todo="todo"
        :update="update"
        />
    </div>
</div>
</template>
<script>
import { database } from '../firebase'
import { auth } from '../firebase'
import Card from './Card'
let todosRef = database.ref('todos')
export default {
    components:{
        Card
    },
    beforeCreate:function(){
        auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
          this.$bindAsArray('todos', database.ref(`users/${user.uid}/todos`))
        }
      })
    },
    firebase:{
        todos:todosRef
    },
    methods:{
        test(){
            console.log("aaaaaa")
        },
        art(alert){
            console.log("indexで")
            this.$emit('alert',alert)
        },
        update(todo){
            console.log(todo)
            this.$emit('update',todo)
        }
    }
}
</script>
<style>
  .notes{
    padding: 0 100px;
  }
  .zindex1{
      z-index: 1;
  }
</style>
