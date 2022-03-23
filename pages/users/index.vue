<template>
  <div>
     <h1>Página de usuarios</h1>
     <div>

     </div>
     <div v-if="$fetchState">
        <div v-for="(user,index) in users" :key="index">
          <h2>{{user.name}}</h2>
        </div>
     </div>
     <div v-else>
         <p>Carregando...</p>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    head(){
       return{
            title:"Usuários",
            meta:[
                {hid:'description',name:'Pagina de usuários'}
            ],
            bodyAttrs:{
                class:'bg-gray-400'
            }
       }
    },
    mounted() {
        console.log(this.$name)
        console.log("Mounted")
    },
    data(){
        return{
            users: []
        };
    },
//    async asyncData(){
//         const reponse = await axios.get("https://jsonplaceholder.typicode.com/users");
//         const users = reponse.data;
//         return {
//           users
//         }
//     },
    async fetch(){
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = reponse.data;
    }
}
</script>

<style>

</style>