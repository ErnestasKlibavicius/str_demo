<template>
  <div class="dashboard">
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
                  <a class="dropdown-item" href="/admin/info">Account Info</a>
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
      <div class="container main-data">
        <div class="row">
            <div class="col-md-12 px-0">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                <h1 class="display-heading ml-3">Account Information</h1>
                </div>
            </div>
            </div>
        </div>
        <div class="table-container">
          <div class="row">
            <div class="col-md-12 d-flex align-items-center justify-content-center">
              <h2 class="option-header ref-header my-2">Your Info</h2>
            </div>
          </div>
           <div class="row">
             <div class="col-md-12">
                <ul class="info-container-list no-bullet ml-5 my-3">
                  <li>
                    <div class="info-container">
                      <div>Email:
                        <span>{{info.email}}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-container">
                      <div> Created At:
                        <span> {{info.createdAt}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
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
  name: "Dashboard",
  data() {
    return {
      info: [],
      cutUrlQuery: function(){
        var url = location.href.split( '/' );
        var protocol = url[3];
        var host = url[url.length -1];
        var query = protocol + '/' + host;
        return query;
       }
    };
  }, methods: {
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
    },
    retrieve(){
      var vm = this;
      axios.get(this.$BaseURL+'admin')
      .then(function(response){
          vm.info = response.data[0];
      })
      .catch(function(error){
        alert("cannot perform action");
        console.log("cannot perform action -" + "error code:" + error.response.status);
      });
    }
  },
  mounted() {
    this.retrieve()
  }
  };
</script>


<style scoped>
@import url("../../assets/styles/style-admin.css");
</style>
