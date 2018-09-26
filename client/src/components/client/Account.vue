<template>
  <div class="account">
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
                  <router-link class="dropdown-item" to="/add-funds">Add Funds</router-link>
                </li>
              </ul>
            </div>
            <div class="nav-items">
              <ul>
                <li>
                  <a class="dropdown-item balance" @click="toggleBalance" href="#">Balance: {{balance}} <span class="mBtc">m</span>&#x20bf;</a>
                </li>
                <li>
                  <a class="dropdown-item logout-link" @click="logOut()">Logout</a>
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
        <div class="container-fluid dashboard-container"> 
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center add-licenses-container">
                        <h1 class="display-heading">Licenses</h1>
                        <a href="#" @click="AddAuthCode()" class="pull-right d-flex align-items-center add-btn"><font-awesome-icon class="i" icon="plus"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 table-container">  
            <div class="table-responsive">
            <table class="table authCode-table">
            <thead>
            <tr>
              <th scope="col">Created At</th>
              <th scope="col">Code</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>{{authCodes[0].code}}</td>
                <td><a href="#" @click="deleteAuthCode" class=""><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>A82C6Dge5Cz893</td>
              <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
             <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#"><font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/></a></td>
            </tr>
          </tbody>
          </table>
          </div>
            </div>
        </div>
        <!-- +++++++ TEST +++++++++++++++++ -->
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center add-licenses-container">
                        <h1 class="display-heading">Payments</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 table-container">  
            <div class="table-responsive">
             <table class="table text-center payment-table">
            <thead>
            <tr>
              <th scope="col">Created At</th>
              <th scope="col">Status</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Pending</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>Pending</td>
              <td>135</td>
            </tr>
          <tr>
              <td scope="row">2018.02.03</td>
              <td>Completed</td>
              <td>135</td>
          </tr>
          </tbody>
          </table>
          </div>
            </div>
        </div>
        <!-- +++++++ TEST +++++++++++++++++

         +++++++ TEST +++++++++++++++++ -->
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center add-licenses-container">
                        <h1 class="display-heading">Gifts</h1>
                        <p>Is redeemed?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 table-container">  
            <div class="table-responsive">
           <table class="table gifts-table text-center">
                    <thead>
                    <tr>
                        <th scope="col">Created At</th>
                        <th scope="col">Code</th>
                        <th scope="col">Was Redeemed</th>
                        <th scope="col">BTC Amount </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                            <td>0.002</td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                            <td>0.002</td>
                        </tr>
                    </tbody>
                    </table>
          </div>
            </div>
        </div>
        <!-- +++++++ TEST +++++++++++++++++ -->
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
  name: "Account",
     mounted(){
      if(this.emailStatus === "active"){
        var emailLabel = document.getElementById("emailVerifyLabel");
        emailLabel.remove();
      }
  },
  data() {
    return {
      authCodes: 
      [
        {
          code: "asdasd165ad5as1",
          id: 1
        }
      ],
      balance: 15,
      emailStatus: "inactive"
    };
  },
  methods: {
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
    logOut(){
      var vm = this;

       axios.post('http://localhost:3000/client', "LogOut")
        .then(function(response){
         vm.$router.push({path: '/'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
    AddAuthCode(){
      var vm = this;

       axios.post('http://localhost:3000/client')
        .then(function(response){
         vm.$router.push({path: '/account'});
         console.log('Added new code');
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
    deleteAuthCode(){
      var vm = this;
      var authCode = {
        authCodeID: this.authCodes[0].id
      }
       axios.delete('http://localhost:3000/client' + authCode)
        .then(function(response){
         vm.authCodes.splice(1, 1);
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
