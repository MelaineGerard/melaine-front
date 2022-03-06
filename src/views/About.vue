<template>
  <div class="about">
    <h1>A propos de moi</h1>
    <p>Bonjour, Moi c'est Melaine, j'ai {{ getAge() }} ans et je suis actuellement en BTS SIO à Nantes.</p>
  </div>
</template>


<script>
import moment from 'moment'

export default {
  name: 'Home',
  components: {
  },
  methods: {
    getAge(){
      return moment().diff(moment("2002-06-19"), 'years');
    }
  },
}
</script>

<style scoped lang="scss">
  
</style>