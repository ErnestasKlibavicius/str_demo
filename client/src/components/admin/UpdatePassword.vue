<template>
  <div class="updatePasswordAdmin">
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
                  <a class="dropdown-item" href="/admin/info">Info</a>
                  <a class="dropdown-item" href="/admin/change-pass">Update Password</a>
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
                <router-link class="dropdown-item" to="/admin/clients">Users</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/admin/gifts">Gifts</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/admin/admins">Admins</router-link>
              </li>
              </ul>
            </div>
            <div class="nav-items">
              <ul>
                <li>
                  <a class="dropdown-item" @click="logOut()">Logout</a>
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
  name: "updatePasswordAdmin",
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
        var adminInfo = 
        {
          oldPass: this.oldPass,
          newPass: this.newPass
        } 
        axios.post(this.$BaseURL+"admin/change-pass", adminInfo)
        .then(function(response){
          if(response.status ==201){
            vm.$router.push({path: '/admin/info'});
          }
        })
        .catch(function(error){
          alert("cannot perform action");
          console.log("cannot perform action- "+ "error code:" + error.response.status);
        });
    },
     logOut(){
      axios.post(this.$BaseURL+'admin/log-out')
      .then(function(response){
        if(response.status == 201){
          vm.$router.push({path: '/'});
        }
      })
      .catch(function(error){
        alert("cannot perform action");
        console.log("cannot perform action- "+ "error code:" + error.response.status);
      });
    }
  }
  };
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
