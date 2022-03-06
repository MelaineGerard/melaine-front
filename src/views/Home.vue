<template>
  <div class="home" v-if="responseAvailable">
    <div v-html="data.content">

    </div>
  </div>
</template>


<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    getHome: async function () {
      await fetch("https://back.melaine-gerard.fr/items/home")
          .then((response) => response.json())
          .then((data) => {
            this.data = data.data;
            this.responseAvailable = true;
          });
    },
  },
  data: function () {
    return {
      responseAvailable: false,
      data: null,
    }
  },
  created() {
    this.getHome()
  },
}
</script>


<style lang="scss">
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e5e5e5;
  .me {
    max-width: 350px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .rank {
    font-size: 1.5rem;
  }
}
.socials {
  margin-top: 20px;
}
.social-list {
  display: inline-flex;
  li {
    margin-inline: 25px;
    font-size: 2.5rem;
    list-style-type: none;
    a {
      text-decoration: none;
      color: #e5e5e5;
      transition: 0.3s;
      &:hover {
        color: #919191;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .content img {
    max-width: 250px;
  }
}

.img-fluid{
  max-width: 100%;
  height: auto;
}
.btn {
  border: none;
  color: white;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}


.home a {
  color: #c1c1c1;
  text-decoration: none;
  transition: 0.5s;
}


.home a:hover {
  color: #efefef;
}


</style>