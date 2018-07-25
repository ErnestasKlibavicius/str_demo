<template>
  <div class="downloads">
    <header class="header-container sticky-top">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">Lorem<b>ipsum</b>
          </a>
          <button class="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars" style="color: #fff" aria-hidden="true"></i>
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
              <li class="nav-item purchase-nav-item">
                <a href="/account" class="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="main-content-section">
      <div class="container h-100">
        <div class="row">
          <div class="col-md-12 text-center mt-3">
            <h1 class="display-4 download-heading">Download The Apps That You Need!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet molestias, eaque quos corporis quae!</p>
          </div>
        </div>
        <div class="row justify-content-center align-items-top">
          <div class="col-md-6 text-center">
            <div class="first-app-container">
              <img src="../assets/img/mockup-2.jpg" class="download-app-img img-fluid">
              <h1 class="display-5 display-heading-text">Download APP-1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br> Assumenda minima consectetur, temporibus ad porro quos.</p>
              <a class="btn blue-btn" href="/download-app-1" role="button">
                <i class="fa fa-arrow-down"></i> Download</a>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <div class="second-app-container">
              <img src="../assets/img/mockup.jpg" class="download-app-img img-fluid">
              <h1 class="display-5 display-heading-text">Download APP-2</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br> Assumenda minima consectetur, temporibus ad porro quos.</p>
              <a class="btn blue-btn" href="/download-app-2" role="button">
                <i class="fa fa-arrow-down"></i> Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: 'Downloads',
    data() {
      return {
       
      }
    }
  }

</script>


<style scoped>
   @import url('../assets/styles/style-downloads.css');

</style>