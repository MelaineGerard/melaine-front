<template>
  <div class="bg-dark">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
body {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
  background: url("https://www.lifewire.com/thmb/g2jva4iFBaG5vBXNpzEs8wEVYJY=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/passage_wallpaper_by_trenchmaker-d4pp3zd-5919d0673df78cf5fa42884c.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.bg-dark {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
#nav {
  padding: 0;
  margin: 0;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
  a {
    margin: 0 5px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: rgb(204, 204, 204);
  }
}
.container {
  width: calc(100% – 30px);
  max-width: 1080px;
  margin: 0 auto;
}
</style>
