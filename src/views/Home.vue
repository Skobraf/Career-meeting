<template>
  <div class="home" v-bind:style="{ backgroundImage: 'url(./images/fond-mosaique-01.png)' }">
    <div class="home-details">
        <img src="/images/logo-cc-vector.png" alt="">
        <p>A la decouverte</p>
        <p>des parcours des carrier</p>
      <button @click="handleNavigation">Start</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleNavigation() {
      this.$router.push('/secteur');
    }
  }
};
</script>
<style lang="scss" scoped>
  .home {
    background-size: cover;
    height: 100%;
    text-align: center;
    img {
      width: 200px;
      }
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
  }
</style>

