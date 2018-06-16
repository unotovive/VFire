<template>
    <form class="create-todo" v-on:submit.prevent="createTodo()">
        <div class="cp_ipselect cp_sl01">
        <select name="type" required v-model="type">
            <option value="1" selected>ほしい！</option>
            <option value="2">みたい！</option>
            <option value="3">たべたい！</option>
            </select>
        </div>
        <input name="title" v-model="title" placeholder="Title"/>

        <textarea name="content" v-model="content" placeholder="Price" rows="2"></textarea>
        <button type="submit">+</button>
    </form>
</template>
<script>
import { auth, database } from '@/utils/firebase'
export default {
  data () {
    return {
      title: '',
      content: '',
      type: '1'
    }
  },
  methods: {
    getuid () {
      var user = auth.currentUser
      if (user != null) {
        console.log('getuid')
        return auth.currentUser.uid
      }
    },
    createTodo () {
      if (this.title.trim() || this.content.trim()) {
        var todosRef = database.ref(`users/${this.getuid()}/todos`)
        todosRef.push({title: this.title, content: this.content, type: this.type}, (err) => {
          if (err) {
            throw err
          }
          this.title = ''
          this.content = ''
          this.type = 1
        })
      }
    }
  }
}
</script>

<style>

  form.create-todo{
    position: relative;
    width: 480px;
    margin: 5px auto;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 5px #ccc;
    color:#222831;;
  }
  form.create-todo input, form.create-todo textarea{
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    color:#222831;
  }
  form.create-todo button{
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #00adb5;
    color: #eee;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    outline: none;
    font-size: 25px;
  }
  .cp_ipselect {
overflow: hidden;
width: 90%;
margin:5px auto;
text-align: center;
}
.cp_ipselect select {
width: 92%;
padding-right: 1em;
cursor: pointer;
text-indent: 0.01px;
text-overflow: ellipsis;
border: none;
outline: none;
background: transparent;
background-image: none;
box-shadow: none;
-webkit-appearance: none;
appearance: none;
}
.cp_ipselect select::-ms-expand {
display: none;
}
.cp_ipselect.cp_sl01 {
position: relative;
border: 1px solid #bbbbbb;
border-radius: 25px;
background: #ffffff;
}
.cp_ipselect.cp_sl01::before {
position: absolute;
top: 0.8em;
right: 0.9em;
width: 0;
height: 0;
padding: 0;
content: '';
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 6px solid #666666;
pointer-events: none;
}
.cp_ipselect.cp_sl01 select {
padding: 8px 38px 8px 8px;
color: #666666;
}
</style>
