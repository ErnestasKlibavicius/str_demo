<template>
  <div class="updPassword">
    <div class="wrapper-register">
      <div class="container h-100">
        <div class="row h-100 justify-conter-center align-items-center">
          <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 text-center">
            <h4>lorem
              <b>ipsum</b>
            </h4>
            <div>
              <div class="card text-center my-4">
                <div class="card-body">
                  <h3 class="card-title">New Passord</h3>
                  <form>
                    <div>
                      <div class="col-auto">
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text newPass-field-icon-c">
                              <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" class="form-control newPass-input-field" placeholder="New Password">
                        </div>
                        <div class="input-group my-4">
                          <div class="input-group-prepend">
                            <div class="input-group-text newPass-field-icon-c">
                              <font-awesome-icon icon="lock" style="color: #898989"/>
                            </div>
                          </div>
                          <input type="password" class="form-control newPass-input-field" placeholder="Confirm new Password">
                        </div>
                      </div>
                    </div>
                  </form>
                  <a href="/login" class="btn btn-secondary cyan-btn">UPDATE PASSWORD</a>
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
    name: 'UpdPassword',
    data() {
      return {
       
      }
    }
  }

</script>


<style scoped>
   @import url("../../assets/styles/style-private.css");

</style>