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
      <div class="container-fluid">
  
      <div class="row justify-content-center my-3">
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder-AuthCode">
                    <h3>AuthCodeSig:</h3>
                    <h4>{{AuthCodeSigValue}}</h4>
                    <button class="btn btn-primary mt-3">Edit</button>
                  </div>
                </div>
              </div>
              <div class="content-container col-md-4 text-center my-2">
                <div class="content-wrapper">
                  <div id="data-holder-AuthCodeMins">
                    <h3>AuthCodeSessionMins: <span>{{AuthCodeSessionMinsValue}}</span></h3>
                    <button class="btn btn-primary mt-3">Edit</button> 
                  </div>
                </div>
              </div>
        </div>
      
      </div>
    </div>
<!-- Modal -->
<div class="modal fade" id="MinFuelPointsToBuyModal" tabindex="-1" role="dialog" aria-labelledby="MinFuelPointsToBuyModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="MinFuelPointsToBuyModalLongTitle">Update value</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
            <label for="ModalParameterValue" class="col-form-label">enter new value:</label>
            <input class="form-control" v-model="MinFuelPointsToBuyValue">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="FuelPointRateModal" tabindex="-1" role="dialog" aria-labelledby="FuelPointRateModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="FuelPointRateModalLongTitle">Update value</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
            <label for="ModalParameterValue" class="col-form-label">enter new value:</label>
            <input class="form-control" v-model="FuelPointRateValue">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="AuthCodeSigModal" tabindex="-1" role="dialog" aria-labelledby="AuthCodeSigModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AuthCodeSigModalLongTitle">Update value</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
            <label for="ModalParameterValue" class="col-form-label">enter new value:</label>
            <input class="form-control" v-model="AuthCodeSigValue">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="AuthCodeSessionMinsModal" tabindex="-1" role="dialog" aria-labelledby="AuthCodeSessionMinsModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AuthCodeSessionMinsModalLongTitle">Update value</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
            <label for="ModalParameterValue" class="col-form-label">enter new value:</label>
            <input class="form-control" v-model="AuthCodeSessionMinsValue">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
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
    return {
      MinFuelPointsToBuyValue: 2.35,
      FuelPointRateValue: 23,
      AuthCodeSigValue: 'sadasdasdavfaf',
      AuthCodeSessionMinsValue: 15
    };
  }, methods: {}
  };
</script>


<style scoped>
@import url("../../assets/styles/style-admin.css");
</style>
