<template>
<div class="users">
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
              <a href="/account" class="nav-link"> My Account
                <font-awesome-icon icon="user" />
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
              <h1 class="display-heading">Users</h1>
               <a href="#" data-toggle="modal" data-target="#AddNewUser" class="pull-right d-flex align-items-center add-btn">Add
                <font-awesome-icon class="i" icon="plus" />
              </a>
            </div>
            <div class="input-group w-25 my-2">
              <input type="text" class="form-control" placeholder="Search">
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
                  <td data-toggle="modal" @click="update" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>adam.Smith@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times-circle" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>steve.Smith@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times-circle" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>diana.Smith@gmail.com</td>
                    <td>
                      <a href="#" class="delete-btn">
                        <font-awesome-icon class="i" icon="times-circle" />
                      </a>
                    </td>
                </tr>
                <tr>
                  <td data-toggle="modal" data-target="#userModal" style="cursor: pointer;" scope="row">2018.02.03</td>
                    <td>johnDoe@gmail.com</td>
                    <td>
                      <a class="delete-btn">
                        <font-awesome-icon class="i" icon="times-circle" />
                      </a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="userModalLongTitle">User info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="accountType" class="col-form-label">Type:</label>
            <select class="form-control" v-model="users[0].type" id="accountType">
              <option>Default</option>
              <option>Legacy</option>
            </select>
          </div>
          <div class="form-group">
            <label for="username" class="col-form-label">Username:</label>
            <input class="form-control" v-model="users[0].username" id="username">
          </div>
           <div class="form-group">
            <label for="funds" class="col-form-label">Balance:</label>
            <input class="form-control" v-model="users[0].balance" id="funds">
          </div>
          <div class="form-group">
            <label for="email" class="col-form-label">Email:</label>
            <input class="form-control" v-model="users[0].email" id="email">
           </div>
          <div class="form-group">
            <label for="referral" class="col-form-label">Referral:</label>
            <input class="form-control" v-model="users[0].referrals[0].link" id="referral">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

   <div class="modal fade" id="AddNewUser" tabindex="-1" role="dialog" aria-labelledby="AddNewUserTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AddNewUserLongTitle">Add New Users</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group row pt-3">
                  <label class="col-sm-3 text-center col-form-label">New user:</label>
                      <div class="col-sm-9">
                          <input type="email" class="form-control" placeholder="Receiver Email">
                      </div>
                </div>
<!--                 
                 <div v-if="displayInput" class="form-group row pt-3">
                  <label class="col-sm-2 text-center col-form-label">Email:</label>
                      <div class="col-sm-10">
                          <input type="email" v-model="extraEmails[0].field" class="form-control" placeholder="Receiver Email">
                      </div>
                 </div> -->
                    <div class="form-group row pt-3" v-for="(item, index) in newUser">
                      <label class="col-sm-3 text-center col-form-label">New user:</label>
                      <div class="col-sm-9">
                          <input type="email" class="form-control" v-model="newUser[index].field" placeholder="email">
                      </div>
                    </div>
                    
                   <div class="form-group row pt-3">
                  <label class="col-sm-5 col-form-label">Add another user:</label>
                        <a href="#" @click="addUser" class="pull-right d-flex align-items-center add-btn">
                          <font-awesome-icon class="i" icon="plus" />
                        </a>
                </div>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>


<script>
export default {
  name: "Users",
  data() {
    return {
      newUser: [],
      users: [
        {
          username: 'Adam',
          type: 'Default',
          balance: '153',
          email: 'adam.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },
        {
          username: 'Steve',
          type: 'Legacy',
          balance: '15632',
          email: 'steve.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },
        {
          username: 'Diana',
          type: 'Default',
          balance: '230',
          email: 'diana.smith@gmail.com',
          referrals:[
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            },
            {
              link: 'www.site.com/referral/link=55dcas125s1'
            }
          ]
        },

      ]
    };
  },
  methods: {
   update(){
     this.$router.push({ path: '/users', query: { plan: 'private' }});
   },
   addUser(){
    this.newUser.push(
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
