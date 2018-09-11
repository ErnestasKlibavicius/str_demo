<template>
  <div class="changePassword">
    <header class="header-container sticky-top">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">Lorem<b>ipsum</b>
          </a>
          <button class="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <font-awesome-icon icon="bars" style="color: #fff" aria-hidden="true"/>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Features
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pricing
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                  <a class="dropdown-item" href="#">LoremIpsum</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Help</a>
              </li>
              <li class="nav-item account-info-btn">
                <a href="/account" class="nav-link"> My Account
                   <font-awesome-icon icon="user"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container-fluid sub-nav-content">
      <div class="row">
        <div class="col-md-12 px-0">
          <div class="sub-nav">
            <div class="nav-items">
              <ul>
                <li>
                  <router-link class="dropdown-item" to="/account">Dashboard</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/referrals">Referrals</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/change-password">Change Password</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/purchase">Add Funds</router-link>
                </li>
              </ul>
            </div>
            <div class="nav-items">
              <ul>
                <li>
                  <a class="dropdown-item balance" href="#">Balance: 25</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content mt-5">
        <div class="container"> 
            <div class="row">
                <div class="col-md-12 px-0">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h1 class="display-heading ml-3">Change Password</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-container">
                <form>
                <div class="form-group row pt-3">
                <label class="col-sm-3 offset-sm-1 text-center col-form-label">Old Password</label>
                    <div class="col-sm-5">
                        <input type="password" class="form-control" v-model="oldPass" placeholder="Old Password">
                    </div>
                </div>
                <div class="form-group row pt-3">
                <label class="col-sm-3 offset-sm-1 text-center col-form-label">New Password</label>
                    <div class="col-sm-5">
                        <input type="password" class="form-control" v-model="newPass" placeholder="New Password">
                    </div>
                </div>
                <div class="form-group row pt-3">
                <label class="col-sm-3 offset-sm-1 text-center col-form-label">Confirm New Password</label>
                    <div class="col-sm-5">
                        <input type="password" class="form-control" placeholder="Confirm New Password">
                    </div>
                </div>
                <div class="form-group row">
                <div class="col-sm-12 text-center my-3">
                    <button @click="updatePassword" type="submit" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "ChangePass",
  data() {
    return {
      oldPass: '',
      newPass: ''
    };
  },
  methods: {
    updatePassword(e){
      e.preventDefault();
      
       var vm = this;
        var userInfo = 
        {
          oldPass: this.oldPass,
          newPass: this.newPass
        } 

        axios.post('http://localhost:3000/changepass', userInfo)
        .then(function(response){
         vm.$router.push({path: '/account'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    }
  }
  };
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
