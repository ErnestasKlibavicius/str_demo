const dashboard =  {
    template: 
    `
    <div class="container-fluid dashboard-container"> 
        <div class="row">
            <div class="col-md-12 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center add-licenses-container">
                        <h1 class="display-heading">Licenses</h1>
                        <a href="#" class="pull-right d-flex align-items-center add-btn">Add<i class="fa fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 table-container">  
            <div class="table-responsive">
            <table class="table text-center authCode-table">
            <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Code</th>
              <th scope="col">Remove Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td scope="row">2018.02.03</th>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><i class="fa fa-times-circle"></i></a></td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</th>
              <td>A82C6Dge5Cz893</td>
              <td><a href="#" class="delete-btn"><i class="fa fa-times-circle"></i></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</th>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><i class="fa fa-times-circle"></i></a></td>
            </tr>
            <tr>
                <td scope="row">2018.02.03</th>
                <td>A82C6Dge5Cz893</td>
                <td><a href="#" class="delete-btn"><i class="fa fa-times-circle"></i></a></td>
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
              <td scope="row">2018.02.03</th>
              <td>100</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</th>
              <td>100</td>
              <td>135</td>
            </tr>
            <tr>
              <td scope="row">2018.02.03</th>
              <td>100</td>
              <td>135</td>
            </tr>
          <tr>
              <td scope="row">2018.02.03</th>
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
                        <th scope="col">Redeemer</th>
                        <th scope="col">Is Redeemed</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</th>
                            <td scope="row">4asd5as5cz5xc</th>
                            <td>123</td>
                            <td class="referral-link">useremail@gmail.com</td>
                            <td><i class="fa fa-check"></i></td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</th>
                            <td scope="row">4asd5as5cz5xc</th>
                            <td>123</td>
                            <td class="referral-link">useremail@gmail.com</td>
                            <td><i class="fa fa-times-circle"></i></td>
                        </tr>
                        <tr>
                            <td scope="row">2018.02.02</th>
                            <td scope="row">4asd5as5cz5xc</th>
                            <td>123</td>
                            <td class="referral-link">useremail@gmail.com</td>
                            <td><i class="fa fa-times-circle"></i></td>
                        </tr>
                        <tr class="claimed">
                            <td scope="row">2018.02.02</th>
                            <td scope="row">4asd5as5cz5xc</th>
                            <td>123</td>
                            <td class="referral-link">useremail@gmail.com</td>
                            <td><i class="fa fa-check"></i></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
}
const referrals =  {
    template: 
    `
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
                    <div>Total Referred Users: <span>143</span></div>
                </div>
            </div>
            <div class="col-md-3 px-0">
                <div class="referral-container"> 
                    <div>Balance: <span>324</span></div>
                </div>
            </div>
            <div class="col-md-5 px-0">
                <div class="referral-container">
                    <div>Link: <span class="referral-link"><a href="#">https://www.website.com/link/link</a></span></div>
                </div> 
            </div>
        </div>
    </div>
    `
}
const password =  {
    template: 
    `
    <div class="container"> 
        <div class="row">
            <div class="col-md-12 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center">
                        <h1 class="display-heading ml-3">Change Password</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-container">
            <form>
            <div class="form-group row pt-3">
            <label class="col-sm-3 offset-sm-1 text-center col-form-label">Old Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" placeholder="Old Password">
                </div>
            </div>
            <div class="form-group row pt-3">
            <label class="col-sm-3 offset-sm-1 text-center col-form-label">New Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" placeholder="New Password">
                </div>
            </div>
            <div class="form-group row pt-3">
            <label class="col-sm-3 offset-sm-1 text-center col-form-label">Confirm New Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" placeholder="Confirm New Password">
                </div>
            </div>
            <div class="form-group row">
            <div class="col-sm-12 text-center my-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </div>
        </form>
        </div>
    </div>
    `
}
const purchase =  {
    template: 
    `
    <div class="container"> 
        <div class="row">
            <div class="col-md-12 px-0">
                <div>
                    <div class="d-flex justify-content-between align-items-center">
                        <h1 class="display-heading ml-3">Add more points</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-container">
        <form>
        <div class="form-group row pt-3">
        <label class="col-sm-3 offset-sm-1 text-center col-form-label">Choose Point Amount</label>
            <div class="col-sm-5">
            <select class="form-control" id="exampleSelect1">
            <option>15points/15.63$</option>
            <option>60points/52.55$</option>
            <option>150points/120.32$ (50points bonus)</option>
            <option>250points/200$ (150points bonus)</option>
            <option></option>
          </select>
            </div>
        </div>
        
        <div class="form-group row">
        <div class="col-sm-12 text-center my-3">
            <button type="submit" class="btn btn-primary">Purchase</button>
        </div>
        </div>
    </form>
        </div>
    </div>
    `
}


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: dashboard
        },
        {
            path: '/referrals',
            component: referrals
        },
        {
            path: '/change-password',
            component: password
        },
        {
            path: '/purchase',
            component: purchase
        }
    ]
});

var app = new Vue({
    router,
    el: '#app',
    data: {
        users: [
            {
                name: 'Bob',
                age: 25
            },
            {
                name: 'Jessy',
                age: 25
            },
            {
                name: 'Clara',
                age: 25
            },
        ]

    },
    methods: {
      sort: function(){
          alert('123');
      }
    }
}).$mount('#app');



     