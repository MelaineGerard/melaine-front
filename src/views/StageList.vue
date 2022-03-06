<template>
  <h1 class="text-center mb-1">Stages</h1>
  <div class="stageList">
      <Stage v-for="(stage, index) in stages" :key="index" :data="stage"/>
  </div>
</template>

<script>
import Stage from "../components/Stage.vue";


export default {
  name: "StageList",
  components: {
      Stage,
  },
  data() {
    return {
      stages: null,
    };
  },
  methods: {
    getStages: async function () {
      await fetch("https://back.melaine-gerard.fr/items/Stage")
        .then((response) => response.json())
        .then((data) => {
          this.stages = data.data;
        });
    },
  },
  created: function () {
    this.getStages();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.stageList {
    justify-items: center;
    width: 100%;
    height: 100%;
  display: inline-grid;
  row-gap: 20px;
  grid-template-columns:  1fr 1fr 1fr 1fr;
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 600px) {
    .stageList {
      grid-template-columns: 1fr;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media screen and (min-width: 600px) and (max-width: 768px) {
.stageList {
      grid-template-columns: 1fr 1fr;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media screen and (min-width: 768px) and (max-width: 992px) {
    .stageList {
      grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>