<template>
  <div class="home" v-bind:style="{ backgroundImage: 'url(./images/fond-mosaique-01.png)' }">
    <div class="home-details">
        <img src="/images/logo-cc-vector.png" alt="">
        <p>A la decouverte</p>
        <p>des parcours des carrier</p>
      <button @click="handleNavigation"><i class="fas fa-check"></i></button>
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
    p {
      font-size: 24px;
      margin: 0;
    }
    button {
       margin-top: 65px;
        background: #A3C961;
        width: 56px;
        height:56px;
        box-shadow:0px 0px 2px 3px #312b2b;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        i {
        color: white;
        font-size: 20px;
         }
    }
    img {
      width: 200px;
      }
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
  }
</style>

