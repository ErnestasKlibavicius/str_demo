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
                  <router-link class="dropdown-item" to="/purchase">Purchase</router-link>
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
    </div>
    <div class="content mt-5">
        <div class="container-fluid dashboard-container"> 
        <div class="row">
            <div class="col-md-8 offset-md-2 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center add-licenses-container">
                        <h1 class="display-heading">Licenses</h1>
                        <a href="#" class="pull-right d-flex align-items-center add-btn">Add<font-awesome-icon class="i" icon="plus"/></a>
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
              <th scope="col">Code</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><font-awesome-icon class="i" icon="times"/></a></td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>A82C6Dge5Cz893</td>
              <td><a href="#" class="delete-btn"><font-awesome-icon class="i" icon="times"/></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><font-awesome-icon class="i" icon="times"/></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</td>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><font-awesome-icon class="i" icon="times"/></a></td>
            </tr>
          </tbody>
          </table>
          </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-sm-12">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="display-heading">Payments</h1>
                </div>
            </div>
            <div class="table-wrapper table-container">
            <div class="table-responsive">  
            <table class="table text-center payment-table">
            <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>100</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>100</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</td>
              <td>100</td>
              <td>135</td>
            </tr>
          <tr>
              <td scope="row">2018.02.03</td>
              <td>100</td>
              <td>135</td>
          </tr>
          </tbody>
          </table>
          </div> 
          </div>
            </div>
            
            <div class="col-md-6 col-sm-12"> 
            <div>
                <div class="d-flex justify-content-between align-items-center ">
                    <h1 class="display-heading">Gifts</h1>
                </div>
            </div>
            <div class="table-wrapper table-container">
                <div class="table-responsive">
                    <table class="table gifts-table text-center">
                    <thead>
                    <tr>
                        <th scope="col">Purchased at</th>
                        <th scope="col">Gift Code</th>
                        <th scope="col">Gift Points</th>
                        <th scope="col">Redeemed</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td>123</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td>123</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td>123</td>
                            <td><font-awesome-icon icon="times" style="color: red"/></td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</td>
                            <td scope="row">4asd5as5cz5xc</td>
                            <td>123</td>
                            <td><font-awesome-icon icon="check" style="color: green"/></td>
                        </tr>
                    </tbody>
                    </table>
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
  name: "Account",
  data() {
    return {
      balance: 13
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
    }
  }
};
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
