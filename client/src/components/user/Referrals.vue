<template>
  <div class="referrals">
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
                  <router-link class="dropdown-item" to="/purchase">Purchase</router-link>
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

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div>
              <div class="d-flex justify-content-between align-items-center heading">
                <h1 class="display-heading">Referrals</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row referral-parent-container">
          <div class="col-md-4 px-0">
            <div class="referral-container">
              <div>Total Referred Users:
                <span>143</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 px-0">
            <div class="referral-container">
              <div>Balance:
                <span>324</span>
              </div>
            </div>
          </div>
          <div class="col-md-5 px-0">
            <div class="referral-container">
              <div>Link:
                <span class="referral-link">
                  <a href="#">https://www.website.com/link/link</a>
                </span>
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
    name: 'Referrals',
    data() {
      return {

      }
    }
  }

</script>


<style scoped>
@import url("../../assets/styles/style-private.css");

</style>
