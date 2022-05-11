<template>
  <div>
    <div class="title">ОРГАНИЗАЦИОННАЯ СТРУКТУРА</div>
    <add-dep-modal />
    <data-table />
  </div>
</template>
<script>
import AddDepModal from "./components/AddDepModal.vue";
import DataTable from "./components/DataTable.vue";

export default {
  components: { AddDepModal, DataTable },
  name: "App",
};
</script>

<style lang='scss'>
$minwidth: 320px;
$fontfamily: Arial;
@import "./assets/styles/nullstyle.scss";
#app {
  max-width: 800px;
  padding: 30px 15px;
  margin: 0 auto;
}
* {
  transition: all 0.3s ease-in;
}

.title {
  padding: 10px;
  margin: 0 0 10px 0;
  color: #fff;
  background: #2d3e50;
}
</style>
