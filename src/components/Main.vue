<template>
  <div id="main">
    <create/>
    <index @update="update" @alert="alert"/>
    <update v-if="showUpdate" @close="showUpdate=false" :todo="selectedTodo" @alert="alert"></update>
  </div>
</template>


<script>
import Index from './Index'
import Create from './Create'
import Update from './Update'
export default {
  name: 'Main',
  data(){
    return{
      showUpdate: false,
      selectedTodo:null,
      alerts: []
    }
  },
  components:{
    Index,
    Create,
    Update,
  },
  methods:{
    update(todo){
      console.log("iii")
      console.log(todo)
      this.showUpdate=true
      this.selectedTodo=todo
   },
   alert(alert){
     console.log("あらーとうけとれた")
      this.alerts.push(alert)
      setTimeout(() => {
      this.alerts.pop(alert)
      }, alert.duration || 1500)
    }
  }
}
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
