<template>
  <div class="client">
    <ul> 
        <li v-for="info in user">{{info}}</li>
    </ul>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: "Client",
  data() {
    return {
        user: []
    };
  },
  methods: {
    getUserData(){
        var vm = this;
     

        axios.get('http://localhost:3000/user')
        .then(function(response){
           vm.user.push(response.data[0]);
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    }
  },
  mounted(){
      this.getUserData();
  }
};
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>