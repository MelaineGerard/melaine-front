<template>
  <div class="img-list" v-if="responseAvailable">
    <img
        :src="data.image"
        :alt="data.name"
    />
    <h5 class="text-center">{{ data.level }}</h5>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Button from "../components/Button.vue";

@Options({
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data: function () {
    return {
      responseAvailable: false,
      data: null,
    }
  },
  created() {
    this.getSkill()
  },
  components: {
    Button,
  },
  methods: {
    getSkill: async function () {
      await fetch("https://back.melaine-gerard.fr/items/Skill/" + this.id)
          .then((response) => response.json())
          .then((data) => {
            this.data = data.data;
            this.responseAvailable = true;
            this.data.image = "https://back.melaine-gerard.fr/assets/" + this.data.image;
          });
    },
  }
})
export default class Project extends Vue {
}
</script>

<style scoped lang="scss">
.img-list img {
  width: 100%;
  max-width: 125px;
  height: auto;
  border-radius: 20px;
}
.text-center {
  text-align: center;
}

</style>
