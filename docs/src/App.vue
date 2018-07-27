<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 576px) {
    font-size: 90%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}

body {
  margin: 0;
  color: #ffffff;
  background-color: #2f4480;  
  font-family: 'Roboto', sans-serif;
}

a {
  color: inherit;
}

h1 {
  color: #8b9dc3;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}
</style>
