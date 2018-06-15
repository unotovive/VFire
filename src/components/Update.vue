<template>
<transition name="modal">
  <div class="backdrop" @click="dismissModal">
    <form class="edit-todo" @submit.prevent="update" @click.stop>
        <div class="cp_ipselect cp_sl01">
        <select name="type" required v-model="todo.type">
            <option value="1" selected>ほしい！</option>
            <option value="2">みたい！</option>
            <option value="3">たべたい！</option>
          </select>
      </div>
      <input name="title" v-model="todo.title" placeholder="Title"/>
      <textarea name="content" v-model="todo.content" placeholder="Text goes here..." rows="8">
      </textarea>
      <button type="button" class="remove" @click="remove">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
      <button type="submit">OK</button>
    </form>
  </div>
</transition>
</template>
<script>
  import { auth } from '../firebase'
  import { database } from '../firebase'
  export default {
    props: ['todo'],
    methods: {
        getuid () {
            var user = auth.currentUser
            if(user != null){
            console.log("getuid")
            return auth.currentUser.uid
            }
        },
      remove(){
        var todosRef=database.ref(`users/${this.getuid()}/todos`)
        todosRef.child(this.todo['.key']).remove()
        this.$emit('close')
        },
      update () {
          var todosRef=database.ref(`users/${this.getuid()}/todos`)
          console.log(this.todo.title)
          console.log(this.todo.content)
          todosRef.child(this.todo['.key']).update({title:this.todo.title, content:this.todo.content,type:this.todo.type})
          this.$emit('close')
        },
      dismissModal () {
        this.$emit('close')
        }
    }
  }
</script>
<style>
  .backdrop{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(50,50,50,0.8);
    transition: all .3s ease;
  }
  form.edit-todo{
    position: relative;
    width: 480px;
    max-width: 100%;
    margin: 25vh auto 0;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 50px #555;
    transition: all .3s ease;
  }
  form.edit-todo input, form.edit-todo textarea{
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
  }
  form.edit-todo button[type=submit]{
    font-size: 25px;
    float: right;
    width:50px;
    height:50px;
    background: #00adb5;
    color: #fff;
    border: none;
    border-radius: 25px;
    opacity: 1;
    cursor: pointer;
    padding: 4px 6px;
    margin: 0;
    position: relative;
    top:-10px;
  }
  form.edit-todo button{
    background: none;
    border: none;
    font-size: 20px;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity .5s;
    margin: 0 4px 0 0;
  }
  .remove{
      display: block;
  }
form.edit-todo button:hover, form.edit-todo button:focus{
    opacity: 1;
    color: #ddd;
  }
  form.edit-todo button.remove:hover, form.edit-todo button.remove:focus{
    opacity: 1;
    color:#e2434b;
    background: #fff;
  }

.modal-enter-active {transition: opacity .3s;}
/* 往路の開始状態を設定するためのクラス */
.modal-enter        {opacity: 0;}
/* 往路の終了状態を設定するためのクラス */
.modal-enter-to     {opacity: 1;}
/* 復路のアニメーション全体に対して設定をするためのクラス */
.modal-leave-active {transition: opacity .6s;}
/* 復路の開始状態を設定するためのクラス */
.modal-leave        {opacity: 1;}
/* 復路の終了状態を設定するためのクラス */
.modal-leave-to     {opacity: 0;}

</style>