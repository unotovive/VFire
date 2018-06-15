<template>
  <header>
    <img src="../assets/logo.png">
    <div v-if="user">
      <span>Login : <p>{{email}}</p></span>
      <a href="#" @click.prevent="signOut">
        <i class="fas fa-sign-out-alt" aria-hidden="true"></i>
      </a>
    </div>
  </header>
</template>
<script>
  import { auth } from '../firebase'
  export default {
    data () {
      return {
        email:'No User',
        user: null,
        searchQuery: ''
      }
    },
    beforeCreate:function(){
        auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
          this.email= user.email
        }
      })
    },
    methods: {
        update(){
            console.log("aaa")
        },
      signOut () {
        auth.signOut()
        this.email='No User'
        this.user=null
        this.$router.push({path:'/'})
      }
    },
    updated:function(){
        console.log("aa")
    }
  }
</script>
<style>
  header{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    height: 50px;
    background: #393e46;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,.4);
  }
  header span {
    padding: 15px;
    color: #eeeeee;
    position: absolute;
    right: 95px;
    top: 1px;
  }
  header img {
    width: 135px;
    height: 35px;
    position: absolute;
    left: 25px;
    top: 8px;
  }
  p{
      font-size: 80%;
      display: inline;
  }
  .title{
    padding: 15px;
    color: #eeeeee;
    position: absolute;
    left: 95px;
    top: 1px;
  }
  .topicon{
    padding:0;
    position: absolute;
    display: block;
    color: #eeeeee;
    left: 15px;
    top: 10px;
    font-size: 25px;
    cursor: pointer;
    transition: color .2s;
  }
  header a {
    position: absolute;
    display: block;
    color: #eeeeee;
    right: 15px;
    top: 10px;
    font-size: 25px;
    cursor: pointer;
    transition: color .2s;
  }
  header a:focus, header a:hover {
    color: #0be3ee;
  }
  @media screen and (max-width: 1570px) {
    header span{
      display: none;
    }
  }
  @media screen and (max-width: 720px) {
    header input{
      width: calc(100% - 64px);
      margin: 0 0 0 16px;
    }
  }
</style>