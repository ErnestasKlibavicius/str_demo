<template>
  <div class="register">
    <div class="wrapper-register">
      <div class="container h-100 w-100">
        <div class="row h-100 justify-conter-center align-items-center">
          <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 text-center">
            <h4>lorem
              <b>ipsum</b>
            </h4>
            <div>
              <div class="card text-center my-4">
                <div class="card-body">
                  <h3 class="card-title">Sign-Up</h3>
                  <form>
                    <div>
                      <div class="col-auto">
                        <label class="sr-only">Username</label>
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text register-field-icon-c">
                               <font-awesome-icon icon="user" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="text" required class="form-control register-input-field" v-model="username" placeholder="Username">
                        </div>
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text register-field-icon-c">
                              <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" required class="form-control register-input-field" v-model="password" placeholder="Password">
                        </div>
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text register-field-icon-c">
                              <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" required class="form-control register-input-field"  placeholder="Confirm Password">
                        </div>
                      </div>
                    </div>
                  </form>
                  <a  @click="sendData"  class="btn btn-secondary cyan-btn">CREATE ACCOUNT</a>
                </div>
              </div>
              <p class="login-link">Already have an account? <router-link to="/login" class="">Log In</router-link> </p> 
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
    name: 'Register',
    data() {
      return {
       username: '',
       password: ''
      }
    },
    methods: {
      sendData(){
        var vm = this;
        var userInfo = 
        {
          userName: this.username,
          password: this.password
        } 

        axios.post('http://localhost:3000/user', userInfo)
        .then(function(response){
         vm.$router.push({path: '/login'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
      }
    }
  }

</script>


<style scoped>
   @import url('../assets/styles/style-auth.css');

</style>