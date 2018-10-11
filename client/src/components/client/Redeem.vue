<template>
  <div class="redeem">
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
              <div class="dropdown show">
                <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 My Account  <font-awesome-icon icon="user"/>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="/client/info">Account Info</a>
                  <a class="dropdown-item" href="/client/change-password">Update Password</a>
                  <a class="dropdown-item"  data-toggle="modal" data-target="#deleteModal" href="#">Delete Account</a>
                </div>
              </div>
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
                  <router-link class="dropdown-item" to="/client/add-funds" style="border-bottom: 1px solid #3f9bff;">Add Funds</router-link>
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
        <div class="container main-data">
        <div class="row">
            <div class="col-md-12 px-0">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                <h1 class="display-heading ml-3">Redeem Your Code</h1>
                </div>
            </div>
            </div>
        </div>
        <div class="table-container">
          <div class="row text-center payment-type-container">
              <router-link class="col-md-6 option" to="/client/add-funds">
                  <div>
                    <a> 
                        <h3 class="my-3 option-header">Make a Bitcoin Payment</h3> 
                    </a> 
                  </div>
              </router-link>
              <router-link class="col-md-6 option" to="/client/redeem">
                <div>
                <a> 
                    <h3 class="my-3 option-header">Redeem</h3> 
                </a> 
                </div>
              </router-link>
          </div>
           <div class="row">
             <div class="col-md-12">
                <ul class="info-container-list ml-5 my-3">
                  <li>Enter your code</li>
                  <li>Use your code only once!</li>
                  <li>Enter only one code when redeeming!</li>
                  <li class="rate-info">Make sure you entered the correct code</li>
                </ul>
              </div>
            </div>
            <form>
              <div class="row d-flex justify-content-center align-items-center payment-options-container">
                <div class="col-md-12">
                    <h2 style="color: #2b6cc8;">Enter code </h2>   
                </div>
                <input type="text" v-model="code" class="input-group-text redeem-input">
              </div>
        
           
            <div class="form-group row">
                <div class="col-sm-12 text-center my-3">
                  <button type="submit" @click="redeemCode" class="btn btn-primary redeem-btn">Redeem</button>
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
        <!-- DELETE MODAL -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLongTitle">Delete Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                      <div class="col-sm-12 text-center">
                          <h4>Are you sure you want to delete your account?</h4>
                          <button type="button" data-dismiss="modal" class="btn btn-primary space">Cancel</button>
                          <button type="button" @click="deleteClient()" data-dismiss="modal" class="btn btn-danger space">Delete</button>
                      </div>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "Redeem",
      mounted(){
       this.checkEmail();
  },
  data() {
    return {
        code: '',
        value: 0,
        isGift: false,
        balance: 15,
        defaultValues: [
          {value: 10},
          {value: 25},
          {value: 50},
          {value: 100},
          {value: 250}
        ],
         emailVerified: false
    };
  },
  methods: {
     checkEmail(){
      var vm = this;
      axios.get(this.$BaseURL+'client')
        .then(function(response){
            if(response.data[0].emailVerified){
              vm.emailVerified = true;
              var emailLabel = document.getElementById("emailVerifyLabel");
              emailLabel.remove();
            }
            else{
              vm.emailVerified = false;
            }
        })
        .catch(function(error){
          alert("cannot perform action");
          console.log("cannot perform action - " + "error code:" + error.response.status);
        });
      
    },
    checkValue() {
      if(this.value <= 10) {
        this.value = 10;
      }
    },
    setValue(e) {
      this.value = e.target.innerHTML;
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
    },
      deleteClient(){
      var vm = this;
      axios.delete(this.$BaseURL+'client')
        .then(function(response){
         vm.$router.push({path: '/'});
        })
        .catch(function(error){
          alert("cannot perform action");
          console.log("cannot perform action - " + "error code:" + error.response.status);
        });
    },
    redeemCode(e){
      e.preventDefault();
      var usersCode = {
        code: this.code
      }
        axios.post(this.$BaseURL+'client/gift/redeem', usersCode)
          .then(function(response){
            if(response.status == 201){
              vm.$router.push({path: '/client/add-funds'});
            }
          })
          .catch(function(error){
            alert("cannot perform action");
            console.log("cannot perform action- "+ "error code:" + error.response.status);
          });
    }
  }
}
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
