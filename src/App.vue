<template>
  <div>
    <header-bar/>
    <img src="./assets/biglogo.png">
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderBar from './components/Header'
export default {
  name: 'app',
  components: {
    HeaderBar
  },
  data () {
    return {
    }
  }
}
</script>
<style>

img{
  width:20vw;
  display : inherit;
  margin :0 auto;
}
  *{
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  body{
    padding: 80px 16px;
    background: #eee;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and ( max-width:1200px )
{
  img{
    width:240px;;
  }
}
</style>
