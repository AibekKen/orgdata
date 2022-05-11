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
          @click.prevent="closeEditName(city.city)"
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
          <a class="edit" href="#" @click="editName(city.city)"
            ><img src="@/assets/icons/edit.png" alt="" />
          </a>
          <a class="delete" href="#" @click="removeCities(city.city)">
            <img src="@/assets/icons/delete.png" alt="" />
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
          :id="center.city + center.name"
          action="#"
          class="editName"
        >
          <label for="editName__input" class="editName__label"
            >Новое название</label
          >
          <input type="text" v-model="centerEdit" class="editName__input" />
          <button type="submit" class="editName__submit">Сохранить</button>
          <button
            @click.prevent="closeEditName(`${center.city}${center.name}`)"
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
            <a
              class="edit"
              href="#"
              @click.prevent="editName(`${center.city}${center.name}`)"
              ><img src="@/assets/icons/edit.png" alt="" />
            </a>
            <a
              class="delete"
              href="#"
              @click.prevent="removeCenters(center.city, center.name)"
            >
              <img src="@/assets/icons/delete.png" alt="" />
            </a>
          </div>
        </div>
        <div
          class="data-tree__deps-block"
          v-for="dep in center.deps"
          :key="dep.name"
        >
          <form
            @submit.prevent="editDeps(dep.id)"
            :id="dep.id"
            class="edit-dep__modal editName"
          >
            <h2 class="edit-dep__title">Изменить отдел</h2>
            <div class="edit-dep__city">
              <label class="labelInput" for="inputCity">Город:*</label>
              <input
                v-model="cityEdit"
                class="edit-dep__input-city input"
                required
                type="text"
                id="inputCity"
              />
            </div>
            <div class="edit-dep__center">
              <label class="labelInput" for="inputCenter">Центр:*</label>
              <input
                v-model="centerEdit"
                class="edit-dep__input-center input"
                type="text"
                required
                id="inputCenter"
              />
            </div>
            <div class="edit-dep__dep">
              <label class="labelInput" for="inputDep">Отдел:*</label>
              <input
                v-model="depEdit"
                class="edit-dep__input-dep input"
                required
                type="text"
                id="inputDep"
              />
            </div>
            <div class="add__count general">
              <label class="labelInputNum" for="inputGen"
                >Общее количество*:</label
              >
              <input
                v-model="genCount"
                class="edit-dep__input-gen"
                required
                min="0"
                type="number"
                id="inputGen"
              />
            </div>
            <div class="add__count fact">
              <label class="labelInputNum" required for="inputFact"
                >Фактическое количество:*</label
              >
              <input
                v-model="factCount"
                class="edit-dep__input-fact"
                min="0"
                type="number"
                id="inputFact"
              />
            </div>
            <button class="edit-dep__submit" type="submit">Сохранить</button>
            <button
              @click.prevent="closeEditName(dep.id)"
              class="edit-dep__close"
            >
              Закрыть
            </button>
          </form>

          <div class="data-tree__dep row">
            <div class="dep__name row__column row__column_b">
              {{ dep.name }}
            </div>
            <div class="dep__count row__column">{{ dep.fact }}</div>
            <div class="dep__count row__column">{{ dep.official }}</div>
            <div class="dep__action row__column row__column_s">
              <a class="edit" href="#" @click.prevent="editName(dep.id)"
                ><img src="@/assets/icons/edit.png" alt="" />
              </a>
              <a class="delete" href="#" @click.prevent="removeDeps(dep.id)">
                <img src="@/assets/icons/delete.png" alt="" />
              </a>
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
      depEdit: "",
      factCount: 0,
      genCount: 0,
    };
  },
  components: { TableHead },
  computed: mapGetters(["getDataTree"]),
  methods: {
    ...mapMutations([
      "removeCity",
      "editCityName",
      "removeCenter",
      "editCenterName",
      "editDep",
      "removeDep",
    ]),
    openCity: (e) => {
      e.currentTarget.classList.toggle("active");
    },
    openCenter: (e) => {
      e.stopPropagation();
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
    editName: function (name) {
      document.querySelectorAll(".editName").forEach((editName) => {
        editName.classList.remove("active");
      });
      document.getElementById(name).classList.add("active");
    },
    submitEditCity: function (city) {
      const changeCityObj = {
        city: city,
        newCity: this.cityEdit,
      };
      this.editCityName(changeCityObj);
      this.cityEdit = "";
    },
    closeEditName: function (name) {
      document.getElementById(name).classList.remove("active");
    },
    submitEditCenter: function (city, center) {
      const changeCenter = {
        city: city,
        center: center,
        newCenter: this.centerEdit,
      };
      this.editCenterName(changeCenter);
      this.centerEdit = "";
    },
    editDeps: function (id) {
      const changeDep = {
        id: id,
        city: this.cityEdit,
        center: this.centerEdit,
        fact: this.factCount,
        official: this.genCount,
        dep: this.depEdit,
      };
      this.editDep(changeDep);
      this.cityEdit = "";
      this.centerEdit = "";
      this.depEdit = "";
      this.factCount = 0;
      this.genCount = 0;
    },
    removeDeps: function (id) {
      this.removeDep(id);
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

.edit-dep {
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

.edit {
}

.edit-dep {
  &__modal {
    position: fixed;
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    background: #f9f9f9;
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 3px #2d3e50;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  }

  &__title {
    margin: 0 0 10px 0;
  }

  &__city {
    margin: 0 0 5px 0;
  }

  &__input-city {
  }

  &__center {
    margin: 0 0 5px 0;
  }

  &__input-center {
  }

  &__dep {
    margin: 0 0 5px 0;
  }

  &__input-dep {
  }

  &__input-gen {
    width: 50px;
    border: 1px solid #2d3e50;
  }

  &__input-fact {
    width: 50px;
    border: 1px solid #2d3e50;
  }
  &__submit {
    padding: 3px;
    color: #fff;
    background: rgb(13, 4, 80);
    margin: 0 10px 0 0;
    &:hover {
      background: rgb(36, 10, 236);
    }
  }
  &__close {
    padding: 3px;
    background: rgb(147, 147, 149);
  }
}
.input {
  border: 1px solid #2d3e50;
  width: 170px;
  pad: 2px;
}
.add {
  &__count {
  }
}
.general {
  margin: 0 0 5px 0;
}
.fact {
  margin: 0 0 5px 0;
}
.labelInput {
  display: inline-block;
  width: 50px;
}
.labelInputNum {
  display: inline-block;
  width: 170px;
}
</style>