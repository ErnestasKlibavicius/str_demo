<template>
  <div class="login">
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
                  <h3 class="card-title">Log in</h3>
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
                          <input type="text" class="form-control login-input-field" placeholder="Username">
                        </div>
                        <div class="input-group mt-4 mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text login-field-icon-c">
                             <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" class="form-control login-input-field" placeholder="Password">
                        </div>
                        <div>
                          <a href="#" data-toggle="modal" data-target="#forgotPassModal">Forgot Password ?</a>
                        </div>
                      </div>
                    </div>
                  </form>
                  <a href="/register" class="btn btn-secondary blue-btn">SIGN UP</a>
                  <a href="/account" class="btn btn-secondary cyan-btn">LOGIN</a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="forgotPassModal" tabindex="-1" role="dialog" aria-labelledby="forgotPassModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="forgotPassModalLongTitle">Enter your email</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <input type="email" class="form-control login-input-field" placeholder="Email">
                  <p class="my-2 text-center">You will get information how to update your password by provided email</p>
                </div>
                <div class="modal-footer justify-content-center p-0">
                  <a href="/" class="btn btn-secondary cyan-btn">Send</a>
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
  export default {
    name: 'Login',
    data() {
      return {
       
      }
    }
  }

</script>


<style scoped>
   @import url('../assets/styles/style-auth.css');

</style>