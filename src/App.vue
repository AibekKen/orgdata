<template>
  <div>{{ getObj }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["getObj"]),
  methods: {},
};
</script>

<style lang='scss'>
$minwidth: 320px;
$fontfamily: Arial;
@import "./assets/styles/nullstyle.scss";
#app {
  max-width: 1200px;
  padding: 30px 15px;
  margin: 0 auto;
}
</style>
