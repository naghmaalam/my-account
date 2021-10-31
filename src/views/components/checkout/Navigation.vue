<template>
  <nav class="nav navbar navbar-expand-md navbar-dark nav inner-menu" id="nav">
    <div class="container-fluid mobile-style">
      <a class="navbar-brand" href="../index.html">
        <img
          class="logo img-fluid"
          src="assets/images/logo.png"
          alt="SwoshsVPN"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ml-0">
          <li class="nav-item">
            <a class="nav-link" href="../what-is-vpn.html">What is VPN?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../benefits.html">Benefits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../purchase.html">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Download
            </a>
            <div
              class="dropdown-menu animate slideIn"
              aria-labelledby="navbarDropdown2"
            >
              <a class="dropdown-item" href="./android.html"
                ><i class="fa fa-android icon" aria-hidden="true"></i>Android</a
              >
              <a class="dropdown-item" href="windows.html">
                <i class="fa fa-windows icon" aria-hidden="true"></i>Windows</a
              >
              <a class="dropdown-item" href="ios.html">
                <i class="fa fa-apple icon" aria-hidden="true"></i>iOS</a
              >
              <a class="dropdown-item" href="linux.html"
                ><i class="fa fa-linux icon" aria-hidden="true"></i>Linux</a
              >
              <a class="dropdown-item" href="app-download.html"
                ><i class="fa fa-sitemap icon" aria-hidden="true"></i>All
                Platform</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blog/index.html">Blog</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="../my-account.html">My Account</a> -->
            <router-link :to="{ name: 'home' }" class="nav-link"
              >My Account</router-link
            >
          </li>
          <li class="nav-item cta-header">
            <a class="nav-link" href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
