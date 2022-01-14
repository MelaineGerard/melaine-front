<template>
  <h1>Projet personnels</h1>
  <div class="projectList">
    <Project v-bind:data="{
        name: 'Melaine Gérard',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        codeUrl: 'https://github.com/MelaineGerard/melaine-gerard-js',
        demoUrl: 'https://vuejs.org/',
        imgUrl: 'https://melaine-gerard.fr/images/moi.png'
    }" />
    </div>
</template>


<script>
import Project from "../components/Project.vue";

export default {
  name: "ProjectList",
  components: {
    Project,
  },
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.projectList {
    justify-items: center;
    width: 100%;
    height: 100%;
  display: inline-grid;
  row-gap: 20px;
  grid-template-columns:  1fr 1fr 1fr 1fr;
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 600px) {
    .projectList {
      grid-template-columns: 1fr;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media screen and (min-width: 600px) and (max-width: 768px) {
.projectList {
      grid-template-columns: 1fr 1fr;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media screen and (min-width: 768px) and (max-width: 992px) {
    .projectList {
      grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>