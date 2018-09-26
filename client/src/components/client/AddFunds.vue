<template>
  <div class="AddFunds">
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
                <a href="/services" class="nav-link"> My Account
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
                  <router-link class="dropdown-item" to="/services">Services</router-link>
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
                  <a class="dropdown-item" href="/">Logout</a>
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
        <div class="container main-data">
        <div class="row">
            <div class="col-md-12 px-0">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                <h1 class="display-heading ml-3">Add Funds</h1>
                </div>
            </div>
            </div>
        </div>
        <div class="table-container">
          <div class="row text-center payment-type-container">
               <router-link class="col-md-6 option" to="/add-funds">
                  <div>
                    <a> 
                        <h3 class="my-3 option-header">Make a Bitcoin Payment</h3> 
                    </a> 
                  </div>
              </router-link>
              <router-link class="col-md-6 option" to="/redeem">
                <div>
                <a> 
                    <h3 class="my-3 option-header">Redeem</h3> 
                </a> 
                </div>
              </router-link>
          </div>
           <div class="row">
             <div class="col-md-12">
                <ul class="info-container-list ml-5 my-3">
                  <li>Bitcoin (BTC)</li>
                  <li>No Refunds availabe</li>
                  <li>Bitcoin deposits may take up to 120 minutes to precess</li>
                  <li>Minimal amout - 0.003 BTC</li>
                  <li class="rate-info">1 hour of license is worth 1mBTC</li>
                </ul>
              </div>
            </div>
            <form>
              <div class="row d-flex justify-content-center align-items-center payment-options-container">
                <div class="col-md-1 payment-option"  v-for="price in defaultValues" @click="setValue($event)">{{price.value}}</div>
              </div>
            <div class="form-group form-inline form-container row pt-3 d-flex justify-content-center align-items-center">
                <label class="col-sm-2 text-center col-form-label mt-3" style="color: #2b6cc8;">Amount</label>
                <!-- <div class="col-sm-5">
                   <span class="text-muted"><input type="checkbox" id="checkbox" v-model="isGift"> Is It a Gift? </span>
                   <div>
                     <input type="number" v-if="isGift" class="form-control gift-field" placeholder="Quantity" @keydown.enter.prevent>
                   </div>
                   <input @keydown.enter.prevent="checkValue" @change="checkValue" type="text" v-model="value" class="form-control deposit-field" placeholder="Enter Amount">
                </div> -->
            </div>
           
            <div class="form-group row">
                <div class="col-sm-12 text-center my-3">
                  <p class="text-muted mb-1"><input type="checkbox" id="checkbox" v-model="isGift"> Is it a gift? </p>
                    <div class="d-flex justify-content-center">
                     <input type="number" v-if="isGift" class="form-control gift-field" placeholder="Quantity" @keydown.enter.prevent>
                   </div>
                  <button type="submit" class="btn btn-primary payment-btn">Pay With Bitcoin</button>
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
export default {
  name: "AddFunds",
  data() {
    return {
        value: 0,
        isGift: false,
        balance: 15,
        defaultValues: [
          {value: 10},
          {value: 25},
          {value: 50},
          {value: 100},
          {value: 250}
        ]
  
    };
  },
  methods: {
    checkValue() {
      if(this.value <= 10) {
        this.value = 10;
      }
    },
    setValue(e) {
      this.value = e.target.innerHTML;
    },
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
}
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
