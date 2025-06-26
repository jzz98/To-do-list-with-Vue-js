<template>
<nav class="app-navbar" v-bind:class="{ active_nav: isactive }">
  <div class="navbar-container">
    <div class="navbar-brand-container">
      <a class="navbar-brand" href="#">NavBar</a>
      <button class="navbar-toggler" @click="toggleMobileMenu()">
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
      </button>
    </div>
    
    <div class="navbar-collapse" :class="{ 'show-menu': showMobileMenu }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" @click="toggleDropdown($event)">
            Explore
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">More options</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      
      <div class="navbar-actions">
        <div class="search-container">
          <input class="search-input" type="search" placeholder="Search..." />
          <button class="search-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        <button class="theme-toggle" @click="changeTheme()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      message: "Navbar",
      isactive: false
    }
  },
  methods: {
    changeTheme(){
      this.isactive = !this.isactive
    }
  },
}
</script>

<style>

.app-navbar.active_nav{
  background-color: black;
}

.active_nav .nav-link {
  color: white !important;
}

.active_nav .navbar-brand{
  color: white;
}
</style>