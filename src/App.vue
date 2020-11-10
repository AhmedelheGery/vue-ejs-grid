<template>
  <div id="app">
    <ejsGrid />
  </div>
</template>

<script>
import ejsGrid from "./components/ejsGrid";
export default {
  name: "App",
  components: { ejsGrid },
};
</script>

<style lang="scss">
#app {
  padding: 2%;
}
</style>
