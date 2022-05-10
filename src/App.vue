<template>
  <div>
    <div class="data-tree__titles row">
      <div class="titles__name row__column row__column_b"></div>
      <div class="titles__count row__column row__column">Общее количество</div>
      <div class="titles__count row__column">Фактическое количество</div>
      <div class="titles__action row__column row__column_s">Действие</div>
    </div>
    <div class="data-tree__city-block" v-for="city in getDataTree" :key="city">
      <div class="data-tree__city row">
        <div class="city__name row__column row__column_b">{{ city.city }}</div>
        <div class="city__count row__column">{{ city.fact }}</div>
        <div class="city__count row__column">{{ city.official }}</div>
        <div class="city__action row__column row__column_s">Действие</div>
      </div>
      <div
        class="data-tree__center-block"
        v-for="center in city.centers"
        :key="center.name"
      >
        <div class="data-tree__center row">
          <div class="city__name row__column row__column_b">
            {{ center.name }}
          </div>
          <div class="city__count row__column">{{ center.fact }}</div>
          <div class="city__count row__column">{{ center.official }}</div>
          <div class="city__action row__column row__column_s">Действие</div>
        </div>
        <div
          class="data-tree__center-block"
          v-for="dep in center.deps"
          :key="dep.name"
        >
          <div class="data-tree__dep row">
            <div class="dep__name row__column row__column_b">
              {{ dep.name }}
            </div>
            <div class="dep__count row__column">{{ dep.fact }}</div>
            <div class="dep__count row__column">{{ dep.official }}</div>
            <div class="dep__action row__column row__column_s">Действие</div>
          </div>
        </div>
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

.data-tree {
  &__titles {
  }

  &__city-block {
  }

  &__city {
  }

  &__center-block {
  }

  &__center {
  }

  &__dep {
  }
}
.row {
  display: flex;
  padding: 5px 0 0 0;
  &__column {
    text-align: center;
    flex: 1 1 25%;
    &_b {
      text-align: left;
    }

    &_s {
    }
  }
}
.titles {
  &__name {
  }

  &__count {
  }

  &__action {
  }
}
.city {
  &__name {
  }

  &__count {
  }

  &__action {
  }
}
.dep {
  &__name {
  }

  &__count {
  }

  &__action {
  }
}
</style>
