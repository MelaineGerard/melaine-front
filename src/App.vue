<template>
  <div class="bg-dark">
    <div id="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">A Propos</router-link>
      <router-link to="/project">Projets personnels</router-link>
      <router-link to="/skill">Compétences informatiques</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

body {
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  color: white;
  background: linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url("https://files.melaine-gerard.fr/bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


#nav {
  margin: 0;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: center;

  a {
    font-size: 20px;
    margin: 0 5px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: rgb(204, 204, 204);
  }
}

@media screen and (max-width: 768px) {
  a {
    display: block;
  }
}

.container {
  width: calc(100% - 30px);
  max-width: 1080px;
  margin: 0 auto;
}
</style>
