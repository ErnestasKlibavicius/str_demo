<template>
  <div class="downApp2">
    <header class="header-container sticky-top">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">Lorem
            <b>ipsum</b>
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
              <li class="nav-item purchase-nav-item">
                <a href="/account" class="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="download-item-section">
      <div class="container" style="height: 70% !important">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-4 mt-4">Download App-2!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, totam.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-img img-fluid"></div>
        </div>
        <div class="row h-100 justify-content-center align-items-top">
          <div class="col-md-4 text-center download-item-container">
            <div class="download-item-inner-container">
              <div class="windows-logo"></div>
              <div class="os-name">Windows</div>
              <a class="btn blue-btn" href="#" role="button">
                <font-awesome-icon icon="arrow-down"/> Download</a>
            </div>
          </div>
          <div class="col-md-4 text-center download-item-container">
            <div class="download-item-inner-container">
              <div class="linux-logo"></div>
              <div class="os-name">Linux</div>
              <a class="btn blue-btn" href="#" role="button">
                <font-awesome-icon icon="arrow-down"/> Download</a>
            </div>
          </div>
          <div class="col-md-4 text-center download-item-container">
            <div class="download-item-inner-container">
              <div class="apple-logo"></div>
              <div class="os-name">Apple</div>
              <a class="btn blue-btn" href="#" role="button">
                <font-awesome-icon icon="arrow-down"/> Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: 'DownApp2',
    data() {
      return {
       
      }
    }
  }

</script>


<style scoped>
   @import url('../assets/styles/style-downloads.css');

</style>