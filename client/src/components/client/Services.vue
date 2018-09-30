<template>
  <div class="services">
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
              <th scope="col"> <a href="#" @click="AddAuthCode()" class="pull-right d-flex align-items-center add-btn"><font-awesome-icon class="i" icon="plus"/></a></th>
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
           <div>
            <nav aria-label="Page navigation authCode-pages">
              <ul class="pagination justify-content-center align-items-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">First</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
                  <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Last</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-start align-items-center add-licenses-container">
                        <h1 class="display-heading">Payments</h1>
                            <div class="dropdown filter-options">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="filterMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <font-awesome-icon icon="chevron-circle-down"/>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="filterMenuButton">
                            <a class="dropdown-item payment-status-pending" href="#">Pending</a>
                            <a class="dropdown-item payment-status-completed" href="#">Completed</a>
                            <a class="dropdown-item payment-status-failed" href="#">Failed</a>
                          </div>
                        </div>
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
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-completed">Completed</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-pending">Pending</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-pending">Pending</td>
              <td>135</td>
            </tr>
          <tr>
              <td scope="row">2018.02.03</td>
              <td class="payment-status-failed">failed</td>
              <td>135</td>
          </tr>
          </tbody>
          </table>
          <div>
                      <nav aria-label="Page navigation payment-pages">
                        <ul class="pagination justify-content-center align-items-center">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">First</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&lt;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&gt;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Last</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
          </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-start align-items-center add-licenses-container">
                        <h1 class="display-heading">Gifts</h1>
                
                        <div class="dropdown filter-options">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="filterMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <font-awesome-icon icon="chevron-circle-down"/>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="filterMenuButton">
                            <a class="dropdown-item" href="#">Redeem</a>
                            <a class="dropdown-item" href="#">Unredeemed</a>
                            <a class="dropdown-item" href="#">All</a>
                          </div>
                        </div>
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
                    <div>
                      <nav aria-label="Page navigation gift-pages">
                        <ul class="pagination justify-content-center align-items-center">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">First</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&lt;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&gt;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Last</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
          </div>
            </div>
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
                          <button type="button" data-dismiss="modal" class="btn btn-danger space">Delete</button>
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
  name: "Services",
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
         vm.$router.push({path: '/client/services'});
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
         vm.$router.push({path: '/client/services'});
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
