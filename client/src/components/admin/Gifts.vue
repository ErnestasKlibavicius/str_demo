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
              <a href="#"  @click="AddCode" class="pull-right d-flex align-items-center add-btn">Add
                <font-awesome-icon class="i ml-1" icon="plus" />
              </a>
              </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2 table-container text-center">
          <div>
            <!-- <h3 class="my-2">Create New Referral</h3>
            <button type="submit" @click="showCode"  class="btn btn-primary my-3">Generate</button>
            <div class="table-responsive"> -->
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
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                 <tr>
                  <td scope="row">2018.02.03</td>
                    <td>A58X72E4Q56X5668C422X56S</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                <tr v-for="code in codes">
                  <td scope="row">{{code.date}}</td>
                  <td>{{code.code}}</td>
                  <td>
                    <a href="#" class="delete-btn">
                      <font-awesome-icon class="i" icon="times"/>
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
             </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
</template>


<script>
export default {
  name: "Gifts",
  data() {
    return {
      codes: [],
    };
  },
  methods: {
    AddCode: function() {
      this.codes.push({code: 'newCode', date: new Date().toDateString()});
    }
  }
};
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
