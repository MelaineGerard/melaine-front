<template>
  <h1>Projet personnels</h1>
  <div class="projectList">
    <Project v-for="(project, index) in info" :key="index" :data="project"/>
    </div>
</template>


<script>
import Project from "../components/Project.vue";

export default {
  name: "ProjectList",
  components: {
    Project,
  },
  data: function () {
    return {
      info: null,
    };
  },
  methods: {
    getProjects: async function () {
      await fetch("https://back.melaine-gerard.fr/items/project")
        .then((response) => response.json())
        .then((data) => {
          this.info = data.data;
        });
    },
  },
  created: function () {
    this.getProjects();
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