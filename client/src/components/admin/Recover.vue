<template>
  <div class="Admin-Recover">
    <div class="wrapper-login">
      <div class="container h-100">
        <div class="row h-100 justify-conter-center align-items-center">
          <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 text-center">
            <h4>lorem
              <b>ipsum</b>
            </h4>
            <p v-if="display" class="alert alert-danger">Passwords Need to Match!</p>
            <div>
              <div class="card text-center my-4">
                <div class="card-body">
                  <h3 class="card-title" style="color: #2b6cc8">Change your password</h3>
                  <p>Create new Password</p>
                  <form>
                    <div>
                      <div class="col-auto">
                        <div class="input-group mt-4 mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                             <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" @blur="checkData()" class="form-control login-input-field" v-model="password" placeholder="Password">
                        </div>
                        
                        <div class="input-group mt-4 mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                             <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input @blur="checkData()" id="ConfirmData" type="password" class="form-control login-input-field" placeholder="Confirm Password">
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
    name: 'Admin-Recover',
    data() {
      return {
        display: false,
       password: '',
       root: 'http://localhost:3000/api'
      }
    },
    methods: {
    checkData(){
      var mainInput = $(".login-field-icon-c");
      var passCont = $(".login-input-field");
      var confirmationData = $("#ConfirmData");

      if (confirmationData.val() !== this.password){
        confirmationData.css("border", "solid 1px #ff0000");
        mainInput.css("border", "solid 1px #ff0000");
        passCont.css("border", "solid 1px #ff0000");
        this.display = true;
      }
      else{
       this.display = false;
       confirmationData.css("border", "1px solid #ced4da");
        mainInput.css("border", "solid 1px #ced4da");
        passCont.css("border", "solid 1px #ced4da");
      }
      
    },

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