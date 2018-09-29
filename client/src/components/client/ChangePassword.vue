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
                <a href="/client/services" class="nav-link"> My Account
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
                  <router-link class="dropdown-item" to="/client/services">Services</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/client/referrals">Referrals</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/client/change-password">Change Password</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/client/add-funds">Add Funds</router-link>
                </li>
              </ul>
            </div>
            <div class="nav-items">
              <ul>
               <li>
                  <a class="dropdown-item balance" @click="toggleBalance" href="#">Balance: {{balance}} <span class="mBtc">m</span>&#x20bf;</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="emailVerifyLabel" class="row">
        <div class="container-fluid email-verify-label-container">
          <div class="d-flex justify-content-center align-items-center">
            <p href="#" class="badge badge-pill my-2">Your email isn't verified ! Didn't get an email? Click <a href="#">Here</a></p>
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
              <p v-if="display" class="alert alert-danger text-center">Passwords Need to Match!</p>
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
                        <input type="password" id="n-pass-label" @blur="checkData()" class="form-control" v-model="newPass" placeholder="New Password">
                    </div>
                </div>
                <div class="form-group row pt-3">
                <label class="col-sm-3 offset-sm-1 text-center col-form-label">Confirm New Password</label>
                    <div class="col-sm-5">
                        <input type="password" id="ConfirmData" @blur="checkData()" class="form-control" placeholder="Confirm New Password">
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
     <footer class="footer">
      <div class="container-fluid footer-container">
        <div class="row">
          <div class="col-md-4 main-footer-info-container">
            <h4>lorem
              <b>ipsum</b>
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
              <br> elit.Suscipit iste officia itaque eveniet obcaecati totam.</p>
            <div class="social-icons">
              <ul>
                <li>
                  <a href="#">
                    <img src="../../assets/img/icon-twitter.png" height="20px" width="20px" alt="twitter">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/img/icon-facebook.png" height="20px" width="20px" alt="facebook">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/img/icon-medium.png" height="20px" width="20px" alt="medium">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/img/icon-telegram.png" height="20px" width="20px" alt="telegram">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 footer-info">
            <h6>lorem ipsum</h6>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem ips</a>
              </li>
              <li>
                <a href="#">lorem ipsum lorem</a>
              </li>
              <li>
                <a href="#">lorem ipss</a>
              </li>
              <li>
                <a href="#">lorem lorem</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 footer-info">
            <h6>lorem ipsum</h6>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem ips</a>
              </li>
              <li>
                <a href="#">lorem ipsum lorem</a>
              </li>
              <li>
                <a href="#">lorem ipss</a>
              </li>
              <li>
                <a href="#">lorem lorem</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 footer-info">
            <h6>lorem ipsum</h6>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem ips</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 footer-info">
            <h6>lorem ipsum</h6>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem ips</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "ChangePass",
  data() {
    return {
      display: false,
      oldPass: '',
      newPass: '',
      balance: 15
    };
  },
  methods: {
    checkData(){
      var passCont = $("#n-pass-label");
      var confirmationData = $("#ConfirmData");
      console.log(confirmationData.val());
      console.log(this.password);
      if (confirmationData.val() !== this.newPass){
        confirmationData.css("border", "solid 1px #ff0000");
        passCont.css("border", "solid 1px #ff0000");
        this.display = true;
      }
      else{
       this.display = false;
       confirmationData.css("border", "1px solid #ced4da");
       passCont.css("border", "solid 1px #ced4da");
      }
    },
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
         vm.$router.push({path: '/client/services'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
    toggleBalance(){
    if(this.balance < 1){
      $('.mBtc').css("display", "inline-block");
      this.balance = this.balance * 1000;
    }
    else {
      $('.mBtc').css("display", "none");
      this.balance = this.balance / 1000;
    }
    }
  }
  };
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
