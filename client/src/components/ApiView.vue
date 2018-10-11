<template>
  <div class="api">
   api view component {{user}}
    <router-view></router-view>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: "ApiView",
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
@import url("../assets/styles/style-private.css");
</style>