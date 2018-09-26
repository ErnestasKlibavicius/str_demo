<template>
<div class="clients">
  <header class="header-container sticky-top">
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">Lorem<b>ipsum</b>
        </a>
        <button class="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <font-awesome-icon icon="bars" style="color: #fff" aria-hidden="true" />
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
                  <a class="dropdown-item" href="/info">Info</a>
                  <a class="dropdown-item" href="/update-password">Update Password</a>
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
                <router-link class="dropdown-item" to="/clients">Users</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/gifts">Gifts</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/admins">Admins</router-link>
              </li>
            </ul>
          </div>
          <div class="nav-items">
            <ul>
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
    <div class="container-fluid dashboard-container">
      <div class="row">
        <div class="col-md-8 offset-md-2 px-0">
          <div>
            <div class="d-flex justify-content-between align-items-center add-licenses-container">
              <h1 class="display-heading">Users</h1>
            </div>
              <div class="d-flex justify-content-between align-items-center ">
                <div class="input-group w-25 my-2">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <a href="#" data-toggle="modal" data-target="#AddNewUser" class="pull-right d-flex align-items-center add-btn"> 
                   <font-awesome-icon class="i" icon="plus" />
                </a>
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
                  <th scope="col">Date</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-toggle="modal" @click="update" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td data-toggle="modal" data-target="#resendIvtModal" style="cursor: pointer;">adam.Smith@gmail.com</td>
                    <td>
                     
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>steve.Smith@gmail.com</td>
                    <td>
                      
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>diana.Smith@gmail.com</td>
                    <td>
                     
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>johnDoe@gmail.com</td>
                    <td>
                     
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- User Update Info Modal -->
<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="userModalLongTitle">User info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="accountType" class="col-form-label">Type:</label>
            <select class="form-control" v-model="users[0].type" id="accountType">
              <option>Default</option>
              <option>Legacy</option>
            </select>
          </div>
          <div class="form-group">
            <label for="username" class="col-form-label">Username:</label>
            <input class="form-control" v-model="users[0].username" id="username">
          </div>
           <div class="form-group">
            <label for="funds" class="col-form-label">Referral Balance:</label>
            <input class="form-control" v-model="referralsBalance" id="funds">
          </div>
          <div class="form-group">
            <label for="email" class="col-form-label">Email:</label>
            <input class="form-control" v-model="users[0].email" id="email">
           </div>
            <div v-if="users[0].type == 'Legacy' " class="form-group">
            <label class="col-form-label">legacyCodeCount:</label>
            <input class="form-control" v-model="legacyCodeCount">
           </div>
          <div class="form-group">
            <label class="col-form-label">referralCut:</label>
            <input class="form-control" v-model="referralCut">
           </div>
          <div class="form-group">
            <label for="referral" class="col-form-label">Referral:</label>
            <input class="form-control" v-model="users[0].referrals[0].link" id="referral">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" @click="updateClientInfo()" class="btn btn-primary" data-dismiss="modal">Update</button>
      </div>
    </div>
  </div>
</div>
 <!-- Add New User Modal -->
   <div class="modal fade" id="AddNewUser" tabindex="-1" role="dialog" aria-labelledby="AddNewUserTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AddNewUserLongTitle">Add New Users</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-2">
                  <label class="col-sm-3 text-center col-form-label">New user:</label>
                      <div class="col-sm-9">
                          <input type="email" class="form-control" style="display: inline-block" v-model="email" placeholder="Type a name or email">
                      </div>
                </div>
                 <div class="form-group row pt-2">
                    <label class="col-sm-3 text-center col-form-label">Legacy Code Count:</label>
                      <div class="col-sm-9">
                          <input type="number" class="form-control" style="display: inline-block" v-model="legacyCodeCount" placeholder="Type amount of legacy codes">
                      </div>
                 </div>

                        <!--for multipal users -->
                    <!-- <div class="form-group row pt-3" v-for="(item, index) in newUser">
                      <label class="col-sm-3 text-center col-form-label">New user:</label>
                      <div class="col-sm-9">
                          <input type="email" class="form-control" v-model="newUser[index].field" placeholder="email">
                      </div>
                    </div> -->
<!--                     
                   <div class="form-group row pt-3">
                  <label class="col-sm-5 col-form-label">Add another user:</label>
                        <a href="#" @click="addUser" class="pull-right d-flex align-items-center add-btn">
                          <font-awesome-icon class="i" icon="plus" />
                        </a>
                </div> -->
            </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
            <button type="button" @click="sendInvite()" data-dismiss="modal" class="btn btn-primary space">Invite</button>
      </div>
    </div>
  </div>
</div>

<!-- RESEND MODAL -->
  <div class="modal fade" id="resendIvtModal" tabindex="-1" role="dialog" aria-labelledby="resendIvtModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="resendIvtModalLongTitle">Resend Invite</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                      <div class="col-sm-12 text-center">
                          <h4>Resend invite to this User? ID: {{id}}</h4>
                          <button type="button" data-dismiss="modal" class="btn btn-danger space">Cancel</button>
                          <button type="button" @click="resendInvite()" data-dismiss="modal" class="btn btn-primary space">Resend</button>
                      </div>
                </div>
            </form>
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
</div>
</template>


<script>
import axios from 'axios';


export default {
  name: "Clients",
  data() {
    return {
      email: '',
      legacyCodeCount: 0,
      id: 1,
      referralCut: 5.5,
      referralsBalance: 0.001,
      newUser: [],
      users: [
        {
          username: 'Adam',
          type: 'Default',
          balance: '153',
          email: 'adam.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },
        {
          username: 'Steve',
          type: 'Legacy',
          balance: '15632',
          email: 'steve.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },
        {
          username: 'Diana',
          type: 'Default',
          balance: '230',
          email: 'diana.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },

      ]
    };
  },
  methods: {
   update(){
     this.$router.push({ path: '/clients', query: { plan: 'private' }});
   },
   addUser(){
    this.newUser.push(
      {
        field: ''
      }
    );
   },
  sendInvite(){
      var inviteObj =
      {
        email:  this.email,
        legacyCodeCount: this.legacyCodeCount
      };
      var vm = this;

      axios.post('http://localhost:3000/admin', inviteObj)
        .then(function(response){
         vm.$router.push({path: '/clients'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
     resendInvite(){
      var userID =
      {
        clientID:  this.id
      };
      var vm = this;

      axios.post('http://localhost:3000/admin', userID)
        .then(function(response){
         vm.$router.push({path: '/clients'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
    updateClientInfo(){
      var userInfo =
      {
        clientID:  this.id,
        legacyCodeCount: this.legacyCodeCount,
        referralCut: this.referralCut,
        referralsBalance: this.referralsBalance

      };
      var vm = this;

      axios.put('http://localhost:3000/admin', userInfo)
        .then(function(response){
         vm.$router.push({path: '/clients'});
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
