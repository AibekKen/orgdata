<template>
  <div v-for="city in getDataTree" :key="city">
    <div>{{ city.city }} {{ city.fact }} {{ city.official }}</div>
    <div v-for="center in city.centers" :key="center.name">
      <div>{{ center.name }} {{ center.fact }} {{ center.official }}</div>
      <div v-for="dep in center.deps" :key="dep.name">
        {{ dep.name }} {{ dep.fact }} {{ dep.official }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["getDataTree"]),
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
