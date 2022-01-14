<template>
  <button class="btn" :class="[color]">
    {{ content }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    content: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  }
})
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
.btn {
  color: white;
  padding: 14px 20px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
}

.primary {
  background-color: #008cff;
}
.primary:hover {
  background-color: #0071e3;
}

.secondary {
  background-color: #5c5c5c;
}
.secondary:hover {
  background-color: #424242;
}
</style>
