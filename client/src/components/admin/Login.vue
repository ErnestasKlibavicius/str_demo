<template>
  <div class="adminLogin">
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
                  <h3 class="card-title">Admin Log in</h3>
                  <form>
                    <div>
                      <div class="col-auto">
                        <label class="sr-only">Username</label>
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                              <font-awesome-icon icon="user" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="text" class="form-control login-input-field" v-model="username" placeholder="Username">
                        </div>
                        <div class="input-group mt-4 mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                             <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" class="form-control login-input-field" v-model="password" placeholder="Password">
                        </div>
                        <div>
                          <a href="#" data-toggle="modal" data-target="#forgotPassModal">Forgot Password ?</a>
                        </div>
                      </div>
                    </div>
                  </form>
                  <a @click="sendData" class="btn btn-secondary cyan-btn">LOGIN</a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="forgotPassModal" tabindex="-1" role="dialog" aria-labelledby="forgotPassModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="forgotPassModalLongTitle">Reset Password</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <input type="email" class="form-control login-input-field" v-model="email" placeholder="Email">
                  <p class="my-2 text-center">You will get information how to update your password by provided email</p>
                </div>
                <div class="modal-footer justify-content-center p-0">
                  <a @click="sendPassword"  data-dismiss="modal" class="btn btn-secondary cyan-btn">Send</a>
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
    name: 'AdminLogin',
    data() {
      return {
       username: '',
       password: '',
       email: ''
      }
    },
    methods: {
      sendData(){
        var vm = this;
        var adminInfo = 
        {
          userName: this.username,
          password: this.password
        } 

        axios.post('http://localhost:3000/auth', adminInfo)
        .then(function(response){
         vm.$router.push({path: '/admin'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
      },
      sendPassword(){
        var vm = this;
        var adminEmail = {
          email: this.email
        }

        axios.post('http://localhost:3000/forgotpass', adminEmail)
        .then(function(response){
         vm.$router.push({path: '/'});
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