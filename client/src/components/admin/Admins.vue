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
              <h1 class="display-heading">Admins</h1>
            </div>
              <div class="d-flex justify-content-between align-items-center ">
                <div class="input-group w-25 my-2">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <a href="#" data-toggle="modal" data-target="#addAdmin" class="pull-right d-flex align-items-center add-btn">Invite 
                  <font-awesome-icon class="i ml-1" icon="plus" />
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
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td scope="row">2018.02.03</td>
                    <td>Adminmail@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times" />
                      </a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

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
                          <input type="email" class="form-control" style="width: 76%; display: inline-block" placeholder="Type a name or email">
                          <button type="button" class="btn btn-primary space">Invite</button>
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
  </div>

</div>
</template>


<script>
export default {
  name: "Admins",
  data() {
    return {
      extraEmails: []
    };
  },
  methods : {
    addEmail(){
      this.extraEmails.push(
        {
          field: ''
        }
      );
    }
  }
  };
</script>


<style scoped>
@import url("../../assets/styles/style-private.css");
</style>
