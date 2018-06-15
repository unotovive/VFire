<template>
  <div class="todo">
    <h1 class="top" v-if="todo.type==1"><i class="fas fa-heart"></i>ほしい!</h1>
    <h1 class="top" v-if="todo.type==2"><i class="fas fa-film"></i>みたい!</h1>
    <h1 class="top" v-if="todo.type==3"><i class="fas fa-utensils"></i>たべたい!</h1>
    <hr/>
    <h1>{{todo.title}}</h1>
    <pre>￥{{todo.content}}</pre>

    <button type="button" class="remove" @click="remove">
      <i class="fas fa-trash" aria-hidden="true"></i>
    </button>

    <button class="edit" type="button" @click="upd">
      <i class="fas fa-edit" aria-hidden="true"></i>
    </button>

  </div>
</template>
<script>
import { auth } from '../firebase'
import { database } from '../firebase'
import { hub } from '../main.js'
  export default {
    props: ['todo'],
    methods:{
      getuid () {
            var user = auth.currentUser
            if(user != null){
            console.log("getuid")
            return auth.currentUser.uid
            }
        },
      upd(){
        console.log(this.todo);
        this.$emit('update',this.todo)
      },
      remove(){
          var todosRef=database.ref(`users/${this.getuid()}/todos`)       
          todosRef.child(this.todo['.key']).remove(e =>{
          }).catch((error) =>{
            console.log("FUCK");
          });
        },
    }
  }
</script>
<style>

  .todo{
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
  }
  .todo h1{
    font-size: 1.1em;
    margin-bottom: 6px;
    color:#222831;
  }
  .todo pre {
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap; 
    word-wrap: break-word;
    font-family: inherit;
    color:#222831;
  }
  .todo button{
    background: none;
    border: none;
    font-size: 20px;
    opacity: 0;
    cursor: pointer;
    transition: opacity .5s;
    margin: 0 4px 0 0;
  }
  .todo button.edit{
    float: right;
  }
  .todo button.remove{
    float: left;
  }
  .todo:hover, .todo:focus{
    box-shadow: 0 2px 10px #999;
  }
  .todo:hover button, .todo:focus button{
    opacity: 0.6;
  }
  .todo button.edit:hover, .todo button.edit:focus{
    opacity: 1;
    color:#00adb5;
  }
   .todo button.remove:hover, .todo button.remove:focus{
    opacity: 1;
    color:#e2434b;
  }
  .top{
  color:#00adb5 !important;
}
</style>