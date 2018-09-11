<template>
  <div class="confirm">
    <div class="wrapper-login">
      <div class="container h-100">
        <div class="row h-100 justify-conter-center align-items-center">
          <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 text-center">
            <h4>lorem
              <b>ipsum</b>
            </h4>
            <div>
              <div class="card text-center my-4">
                <div class="card-body">
                  <h3 class="card-title" style="color: #2b6cc8">Confirm</h3>
                  <p>Confirm your registration by entering the password</p>
                  <form>
                    <div>
                      <div class="col-auto">
                        <div class="input-group mt-4 mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                             <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" class="form-control login-input-field" v-model="password" placeholder="Password">
                        </div>
                      </div>
                    </div>
                  </form>
                  <a @click="sendData()" class="btn btn-secondary cyan-btn">CONFIRM</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
 import axios from 'axios';

  export default {
    name: 'Confirm',
    data() {
      return {
       password: '',
       root: 'http://localhost:3000/api'
      }
    },
    methods: {
    sendData(){
      var vm = this;
      var userData = 
      {
        password: this.password
      }

      // "/api/admin/confirm?inv=code123"
      // http://localhost:3000/admin
      //"/admin/confirm?inv=code123" changes file pabaiga = window.location.href
      // console.log(this.$BaseURL); **this.$BaseURL - base url i api http://localhost:3000/api**
      console.log(window.location.href);
        axios.post(this.root+"/admin/confirm?inv=code123", userData)
          .then(function(response){
          vm.$router.push({path: '/admin'});
          })
          .catch(function(error){
            alert("Ups! Something went Wrong! " + error);
          });
    }
    
    }
  }

</script>


<style scoped>
   @import url('../../assets/styles/style-auth.css');

</style>