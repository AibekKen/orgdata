<template>
  <div>
    <table-head />
    <div
      @click="openCity"
      class="data-tree__city-block"
      v-for="city in getDataTree"
      :key="city"
    >
      <form
        @submit.prevent="submitEditCity(city.city)"
        :id="city.city"
        action="#"
        class="editName"
      >
        <label for="editName__input" class="editName__label"
          >Новое название</label
        >
        <input type="text" v-model="cityEdit" class="editName__input" />
        <button type="submit" class="editName__submit">Сохранить</button>
        <button
          @click.prevent="closeEditCity(city.city)"
          class="editName__close"
        >
          Закрыть
        </button>
      </form>
      <div class="data-tree__city row">
        <div class="city__name row__column row__column_b">
          <span>&#62;</span> {{ city.city }}
        </div>
        <div class="city__count row__column">{{ city.fact }}</div>
        <div class="city__count row__column">{{ city.official }}</div>
        <div class="city__action row__column row__column_s">
          <a href="#" @click="editName(city.city)"
            ><img class="edit" src="@/assets/icons/edit.png" alt="" />
          </a>
          <a href="#" @click="removeCities(city.city)">
            <img class="delete" src="@/assets/icons/delete.png" alt="" />
          </a>
        </div>
      </div>
      <div
        @click="openCenter"
        class="data-tree__center-block"
        v-for="center in city.centers"
        :key="center.name"
      >
        <form
          @submit.prevent="submitEditCenter(center.city, center.name)"
          :id="center.city + ' ' + center.name"
          action="#"
          class="editName"
        >
          <label for="editName__input" class="editName__label"
            >Новое название</label
          >
          <input type="text" v-model="cityEdit" class="editName__input" />
          <button type="submit" class="editName__submit">Сохранить</button>
          <button
            @click="closeEditCenter(`${center.city} ${center.name}`)"
            class="editName__close"
          >
            Закрыть
          </button>
        </form>
        <div class="data-tree__center row">
          <div class="center__name row__column row__column_b">
            <span>&#62;</span> {{ center.name }}
          </div>
          <div class="сenter__count row__column">{{ center.fact }}</div>
          <div class="сenter__count row__column">{{ center.official }}</div>
          <div class="сenter__action row__column row__column_s">
            <a href="#" @click="editName(`${center.city} ${center.name}`)"
              ><img class="edit" src="@/assets/icons/edit.png" alt="" />
            </a>
            <a href="#" @click="removeCenters(center.city, center.name)">
              <img class="delete" src="@/assets/icons/delete.png" alt="" />
            </a>
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
              <img class="edit" src="@/assets/icons/edit.png" alt="" /><img
                class="delete"
                src="@/assets/icons/delete.png"
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
import TableHead from "../components/TableHead.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      cityEdit: "",
      centerEdit: "",
    };
  },
  components: { TableHead },
  computed: mapGetters(["getDataTree"]),
  methods: {
    ...mapMutations(["removeCity", "editCityName", "removeCenter"]),
    openCity: (e) => {
      e.currentTarget.classList.toggle("active");
    },
    openCenter: (e) => {
      e.currentTarget.classList.toggle("active");
    },
    removeCities: function (city) {
      this.removeCity(city);
    },
    removeCenters: function (city, center) {
      const centerObj = {
        city,
        center,
      };
      this.removeCenter(centerObj);
    },
    editName: function (city) {
      document.querySelectorAll(".editName").forEach((editName) => {
        editName.classList.remove("active");
      });
      document.querySelector("#" + city).classList.add("active");
    },
    submitEditCity: function (city) {
      const changeCityObj = {
        city: city,
        newCity: this.cityEdit,
      };
      this.editCityName(changeCityObj);
      this.cityEdit = "";
    },
    closeEditCity: function (city) {
      document.querySelector("#" + city).classList.remove("active");
    },
  },
};
</script>
<style lang="scss">
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

.add-dep {
  padding: 5px;
  margin: 0 0 20px 0;
}

.data-tree {
  &__titles {
    padding: 0;
    background: #2d3e50;
    color: #fff;
  }

  &__city-block {
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

.editName {
  position: fixed;
  left: 50%;
  visibility: hidden;
  opacity: 0;
  background: rgb(194, 213, 242);
  padding: 5px;
  height: 65px;
  z-index: 6;
  transform: translate(-50%);
  &.active {
    visibility: visible;
    opacity: 1;
  }
  &__label {
    display: block;
    margin: 0 0 3px 0;
  }

  &__input {
    display: block;
    margin: 0 0 3px 0;
  }

  &__submit {
    padding: 1px;
    margin: 0 3px 0 0;
  }

  &__close {
    padding: 1px;
  }
}
</style>