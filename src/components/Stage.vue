<template>
  <img
    :src="data.logo"
    :alt="data.enterprise"
    @click="showModal = !showModal"
    class="img-list"
  />
  <div class="modal" v-show="showModal">
    <div class="modal-content">
      <div class="modal-header">
          <h3>{{ data.enterprise }}</h3>
        <span class="close" @click="showModal = !showModal">&times;</span>
        
      </div>
      <div class="modal-body">
        <div v-html="data.description">

        </div>
      </div>
      <div class="modal-footer" v-if="data.website_url">
        <a :href="data.website_url" v-if="data.website_url">
          <Button content="Site Web" color="primary" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "./Button.vue";

@Options({
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data: function () {
    return {
      showModal: false,
    };
  },
  created: function () {
    this.data.logo = "https://back.melaine-gerard.fr/assets/" + this.data.logo;
  },
  components: {
    Button,
  },
})
export default class Stage extends Vue {
}
</script>

<style scoped lang="scss">
.img-list {
  width: 100%;
  max-width: 225px;
  height: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.close {
    margin-left: auto;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 2px 16px;
  border-bottom: rgba(0, 0, 0, 0.4) 1px solid;
}

/* Modal Body */
.modal-body {
  padding: 2px 16px;
}

/* Modal Footer */
.modal-footer {
  padding: 2px 16px;
  border-top: rgba(0, 0, 0, 0.4) 1px solid;
  padding-top: 5px;
  padding-bottom: 5px;
}
/* Modal Content */
.modal-content {
  border-radius: 10px;
  color: #1f1f1f;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
