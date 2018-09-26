<template>
<div class="admins">
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
                <router-link class="dropdown-item" to="/clients">Clients</router-link>
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
              <h1 class="display-heading">Admins</h1>
            </div>
              <div class="d-flex justify-content-between align-items-center ">
                <div class="input-group w-25 my-2">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
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
                  <th scope="col"> <a href="#" data-toggle="modal" data-target="#addAdmin" class="pull-right d-flex align-items-center add-btn"> 
                  <font-awesome-icon class="i" icon="plus" />
                </a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td data-toggle="modal" data-target="#resendActivationModal" style="cursor: pointer;">Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn"  data-toggle="modal" data-target="#deleteModal" >
                       <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                       <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  <!-- ADD NEW ADMIN MODAL -->
    <div class="modal fade" id="addAdmin" tabindex="-1" role="dialog" aria-labelledby="addAdminTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addAdminLongTitle">Add New Admin</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                  <label class="col-sm-2 text-center col-form-label">Email:</label>
                      <div class="col-sm-10">
                          <input type="email" class="form-control" style="width: 76%; display: inline-block" placeholder="Type a name or email" v-model="email">
                          <button type="button" @click="sendInvite()" data-dismiss="modal" class="btn btn-primary space">Invite</button>
                      </div>
                </div>

                     <!--for multipal admins -->
                    <!-- <div class="form-group row pt-3" v-for="(item, index) in extraEmails">
                      <label class="col-sm-3 text-center col-form-label">Extra email:</label>
                      <div class="col-sm-9">
                          <input type="email" class="form-control" v-model="extraEmails[index].field" placeholder="Receiver Email">
                      </div>
                    </div>
                    
                   <div class="form-group row pt-3">
                  <label class="col-sm-5 col-form-label">Add Another email:</label>
                        <a href="#" @click="addEmail" class="pull-right d-flex align-items-center add-btn">
                          <font-awesome-icon class="i" icon="plus" />
                        </a>
                </div> -->
            </form>
      </div>
    </div>
  </div>
</div>

<!-- RESEND INVITE MODAL -->
   <div class="modal fade" id="resendActivationModal" tabindex="-1" role="dialog" aria-labelledby="resendActivationModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="resendActivationModalLongTitle">Resend Invite</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                      <div class="col-sm-12 text-center">
                          <h4>Resend invite to this admin? ID: {{id}}</h4>
                          <button type="button" data-dismiss="modal" class="btn btn-danger space">Cancel</button>
                          <button type="button" @click="resendInvite()" data-dismiss="modal" class="btn btn-primary space">Resend</button>
                      </div>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
<!-- DELETE MODAL -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLongTitle">Delete admin</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                      <div class="col-sm-12 text-center">
                          <h4>Are you sure you want to delete this admin? ID: {{id}}</h4>
                          <button type="button" data-dismiss="modal" class="btn btn-danger space">Cancel</button>
                          <button type="button" @click="deleteAdmin()" data-dismiss="modal" class="btn btn-primary space">Delete</button>
                      </div>
                </div>
            </form>
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
</div>
</template>


<script>
import axios from 'axios';

export default {
  name: "Admins",
  data() {
    return {
      extraEmails: [],
      email: '',
      id: 3
    };
  },
  methods : {
    addEmail(){
      this.extraEmails.push(
        {
          field: ''
        }
      );
    },
    sendInvite(){
      var inviteEmail =
      {
        email:  this.email
      };
      var vm = this;

      axios.post('http://localhost:3000/admin', inviteEmail)
        .then(function(response){
         vm.$router.push({path: '/admins'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
      resendInvite(){
      var adminID =
      {
        adminID:  this.id
      };
      var vm = this;

      axios.post('http://localhost:3000/admin', adminID)
        .then(function(response){
         vm.$router.push({path: '/admins'});
        })
        .catch(function(error){
          alert("Ups! Something went Wrong! " + error);
        });
    },
    deleteAdmin(){
         var ObjectID =
      {
        adminID:  this.id
      };
      var vm = this;

      axios.delete('http://localhost:3000/admin/' + ObjectID.adminID)
        .then(function(response){
         vm.$router.push({path: '/admins'});
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
