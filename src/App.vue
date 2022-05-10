<template>
  <div>
    <div class="data-tree__titles row">
      <div class="titles__name row__column row__column_b"></div>
      <div class="titles__count row__column row__column">Общее количество</div>
      <div class="titles__count row__column">Фактическое количество</div>
      <div class="titles__action row__column row__column_s">Действие</div>
    </div>
    <div
      @click="openCity"
      class="data-tree__city-block"
      v-for="city in getDataTree"
      :key="city"
    >
      <div class="data-tree__city row">
        <div class="city__name row__column row__column_b">
          <span>&#62;</span> {{ city.city }}
        </div>
        <div class="city__count row__column">{{ city.fact }}</div>
        <div class="city__count row__column">{{ city.official }}</div>
        <div class="city__action row__column row__column_s">
          <img class="edit" src="./assets/icons/edit.png" alt="" />
          <img class="delete" src="./assets/icons/delete.png" alt="" />
        </div>
      </div>
      <div
        @click="openCenter"
        class="data-tree__center-block"
        v-for="center in city.centers"
        :key="center.name"
      >
        <div class="data-tree__center row">
          <div class="center__name row__column row__column_b">
            <span>&#62;</span> {{ center.name }}
          </div>
          <div class="сenter__count row__column">{{ center.fact }}</div>
          <div class="сenter__count row__column">{{ center.official }}</div>
          <div class="сenter__action row__column row__column_s">
            <img class="edit" src="./assets/icons/edit.png" alt="" />
            <img class="delete" src="./assets/icons/delete.png" alt="" />
          </div>
        </div>
        <div
          class="data-tree__deps-block"
          v-for="dep in center.deps"
          :key="dep.name"
        >
          <div class="data-tree__dep row">
            <div class="dep__name row__column row__column_b">
              {{ dep.name }}
            </div>
            <div class="dep__count row__column">{{ dep.fact }}</div>
            <div class="dep__count row__column">{{ dep.official }}</div>
            <div class="dep__action row__column row__column_s">
              <img class="edit" src="./assets/icons/edit.png" alt="" /><img
                class="delete"
                src="./assets/icons/delete.png"
                alt=""
              />
            </div>
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
  methods: {
    openCity: (e) => {
      e.currentTarget.classList.toggle("active");
    },
    openCenter: (e) => {
      e.stopPropagation();
      e.currentTarget.classList.toggle("active");
    },
  },
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
.row {
  padding: 10px 0;
  display: flex;
  &__column {
    text-align: center;
    flex: 1 1 25%;
    &_b {
      text-align: left;
    }

    &_s {
      img {
        width: 25px;
        height: 25px;
        margin: 0 5px 0 0;
      }
    }
  }
}
.data-tree {
  &__titles {
    padding: 0;
    background: #2d3e50;
    color: #fff;
  }

  &__city-block {
    position: relative;
    z-index: 1;
    &.active {
      .city__name span {
        display: inline-block;
        transform: rotate(90deg);
      }
      > .data-tree__center-block {
        height: 100%;
      }
    }
  }

  &__city {
    border-bottom: 1px solid #6162632a;
  }

  &__center-block {
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 0;
    &.active {
      .center__name span {
        display: inline-block;
        transform: rotate(90deg);
      }
      > .data-tree__deps-block {
        height: 100%;
      }
    }
  }

  &__center {
    background: #e4edfc;
    border-bottom: 1px solid #fffefe8b;
  }
  &__deps-block {
    overflow: hidden;
    height: 0;
  }

  &__dep {
    background: #9dc4ff;
    border-bottom: 1px solid #fffefe8b;
  }
}

.titles {
  &__name {
    padding: 10px 0;
    border: 1px solid #fff;
  }

  &__count {
    padding: 10px 0;
    border: 1px solid #fff;
  }

  &__action {
    padding: 10px 0;
    border: 1px solid #fff;
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
.center {
  &__name {
    padding-left: 20px;
  }

  &__count {
  }

  &__action {
  }
}
.dep {
  &__name {
    padding-left: 50px;
  }

  &__count {
  }

  &__action {
  }
}
</style>
