<template>
  <h1 class="text-center mb-1">Compétences informatique</h1>
  <div v-for="(skillCategory, index) in info" :key="index">
    <div v-if="skillCategory.skills.length">
      <h3 class="text-center">{{ skillCategory.name }}</h3>
      <div class="skillList">
        <Skill v-for="(skillId, index) in skillCategory.skills" :key="index" :id="skillId" />
      </div>
    </div>
  </div>

</template>


<script>
import Skill from "../components/Skill.vue";

export default {
  name: "SkillList",
  components: {
    Skill,
  },
  data() {
    return {
      info: null,
    };
  },
  methods: {
    getSkillsCategory: async function () {
      await fetch("https://back.melaine-gerard.fr/items/SkillCategory")
          .then((response) => response.json())
          .then((data) => {
            this.info = data.data;
          });
    },
  },
  created: function () {
    this.getSkillsCategory();
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2em;
}
.text-center {
  text-align: center;
}

.mb-1 {
  margin-bottom: 1.5em;
}

.skillList {
  justify-items: center;
  width: 100%;
  height: 100%;
  display: inline-grid;
  row-gap: 20px;
  grid-template-columns:  1fr 1fr 1fr 1fr;
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 600px) {
  .skillList {
    grid-template-columns: 1fr;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media screen and (min-width: 600px) and (max-width: 768px) {
  .skillList {
    grid-template-columns: 1fr 1fr;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media screen and (min-width: 768px) and (max-width: 992px) {
  .skillList {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>