<template>
  <div class="home">
    <h2>CAREER CENTER</h2>
    <button @click="handleNavigation">Start</button>
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
