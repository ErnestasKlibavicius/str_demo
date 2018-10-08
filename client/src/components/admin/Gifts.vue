<template>
  <div class="gifts">
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
                  <router-link class="dropdown-item" to="/admin/clients">Clients</router-link>
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
      <div class="container-fluid dashboard-container">
      <div class="row">
        <div class="col-md-8 offset-md-2 px-0">
          <div>
            <div class="d-flex justify-content-between align-items-center add-licenses-container">
              <h1 class="display-heading">Gift Codes</h1>
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
        <div class="col-md-8 offset-md-2 table-container text-center">
          <div>
         
              <table class="table authCode-table">
                <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Code</th>
                  <th scope="col"> 
                    <a href="#"  @click="AddCode" class="pull-right d-flex align-items-center add-btn">
                      <font-awesome-icon class="i" icon="plus" />
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                      </a>
                    </td>
                </tr>
                <tr v-for="code in codes">
                  <td scope="row">{{code.date}}</td>
                  <td>{{code.code}}</td>
                  <td>
                    <a href="#" class="delete-btn">
                      <font-awesome-icon class="i delete-btn" :icon="['fas', 'trash-alt']"/>
                    </a>
                  </td>
                </tr>
                <!-- <tr v-for="code in codes">
                    <td scope="row">{{code.date}}</td>
                    <td>{{code.code}}</td>
                    <td><a href="#" class="delete-btn"><font-awesome-icon class="i" icon="times-circle"/></a></td>
                </tr> -->
              </tbody>
              </table>
               <div>
            <nav aria-label="Page navigation admin-gifts-pages">
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
    </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "Gifts",
  data() {
    return {
      codes: [],
      cutUrlQuery: function(){
        var url = location.href.split( '/' );
        var protocol = url[3];
        var host = url[url.length -1];
        var query = protocol + '/' + host;
        return query;
       }
    };
  },
  methods: {
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
    AddCode: function() {
      this.codes.push({code: 'newCode', date: new Date().toDateString()});
    }
  }
};
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
