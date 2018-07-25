<template>
  <div class="dashboard">
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
                  <router-link class="dropdown-item" to="/admin">Dashboard</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/users">Users</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/gifts">Gifts/Discount codes</router-link>
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
      <div class="container-fluid">
        <div class="row justify-content-center my-3">
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder">
                  <h3>FuelPointRate: <span>2.52</span></h3>
                  <button class="btn btn-primary mt-3">Edit</button>
                  </div>
                </div>
              </div>
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder">
                    <h3>MinFuelPointsToBuy: <span>12.35</span></h3>
                    <button class="btn btn-primary mt-3">Edit</button>
                  </div>
                </div>
              </div>
        </div>
        <div class="row justify-content-center my-3">
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder">
                    <h3>AuthCodeSig:</h3>
                    <h4>dasd5x3xdsa5f8e4d</h4>
                    <button class="btn btn-primary mt-3">Edit</button>
                  </div>
                </div>
              </div>
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder">
                    <h3>AuthCodeSessionMins: <span>53min</span></h3>
                    <button class="btn btn-primary mt-3">Edit</button> 
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  }};
</script>


<style scoped>
@import url("../../assets/styles/style-admin.css");
</style>
